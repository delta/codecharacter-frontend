import * as Editor from './EditorTypes';
import styles from './style.module.css';
import { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';
import {
  MonacoLanguageClient,
  CloseAction,
  ErrorAction,
  MonacoServices,
  MessageTransports,
  Message,
} from 'monaco-languageclient';

import {
  toSocket,
  WebSocketMessageReader,
  WebSocketMessageWriter,
} from 'vscode-ws-jsonrpc';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  FontSize,
  isCommitModalOpened,
  KeyboardHandler,
  Theme,
  Autocomplete,
} from '../../store/EditorSettings/settings';

import {
  GameType,
  GameTypeAndLanguage,
  updateEditorCodeState,
  updateUserCode,
  UpdateUserCodeRequestObject,
  UserCode,
} from '../../store/editor/code';

import {
  codeCommitIDChanged,
  codeCommitNameChanged,
  isSelfMatchModalOpened,
  mapCommitIDChanged,
  mapCommitNameChanged,
} from '../../store/SelfMatchMakeModal/SelfMatchModal';

import {
  code1CommitIDChanged,
  code1CommitNameChanged,
  code2CommitIDChanged,
  code2CommitNameChanged,
  isPvPSelfMatchModalOpened,
} from '../../store/PvPSelfMatchMakeModal/PvPSelfMatchModal';

import { lspUrl } from '../../config/config';

import {
  dcCode,
  changeDcCode,
} from '../../store/DailyChallenge/dailyChallenge';
import {
  changeTutorialCode,
  tutorialCode,
} from '../../store/Tutorials/tutorials';
import { buildWorkerDefinition } from 'monaco-editor-workers';
import { Uri } from 'vscode';
import toast from 'react-hot-toast';

buildWorkerDefinition(
  '../../node_modules/monaco-editor-workers/dist/workers',
  new URL('', window.location.href).href,
  false,
);

export default function CodeEditor(props: Editor.Props): JSX.Element {
  const divCodeEditor = useRef<HTMLDivElement>(null);
  const fontSize: number = useAppSelector(FontSize);
  const theme: string = useAppSelector(Theme);
  const autocomplete: boolean = useAppSelector(Autocomplete);
  const dispatch: React.Dispatch<unknown> = useAppDispatch();
  const keyboardHandler = useAppSelector(KeyboardHandler);
  const userCode: string =
    props.page == 'Dashboard'
      ? useAppSelector(UserCode)
      : props.page == 'DailyChallenge'
      ? useAppSelector(dcCode)
      : useAppSelector(tutorialCode);
  const language = props.language;

  monaco.languages.register({
    id: 'cpp',
    extensions: ['.cpp'],
    aliases: ['CPlusPlus', 'cpp', 'CPP', 'C++', 'c++'],
  });

  monaco.languages.register({
    id: 'python',
    extensions: ['.py'],
    aliases: ['Python', 'py'],
  });

  monaco.languages.register({
    id: 'java',
    extensions: ['.java', '.jar', '.class', '.jav'],
    aliases: ['Java', 'java'],
  });

  const createLanguageClient = (
    transports: MessageTransports,
  ): MonacoLanguageClient => {
    return new MonacoLanguageClient({
      name: 'Code Editor Language Client',
      clientOptions: {
        documentSelector: ['cpp', 'python', 'java'],
        errorHandler: {
          error: () => ({ action: ErrorAction.Continue }),
          closed: () => ({ action: CloseAction.Restart }),
        },
      },
      connectionProvider: {
        get: () => {
          return Promise.resolve(transports);
        },
      },
    });
  };

  const createEditor = (
    divref: HTMLDivElement,
    workspace: Editor.Workspace | null,
    websocket: WebSocket | null,
  ) => {
    const editor = monaco.editor.create(divref, {
      model: monaco.editor.createModel(
        userCode,
        language == 'c_cpp' ? 'cpp' : language,
        monaco.Uri.parse(workspace != null ? workspace.filepath : ''),
      ),
      fontSize: fontSize,
      cursorStyle:
        keyboardHandler == 'emacs'
          ? 'block-outline'
          : keyboardHandler == 'vim'
          ? 'block'
          : 'line',
      scrollBeyondLastLine: true,
      wrappingIndent: 'same',
      wrappingStrategy: 'advanced',
      lineNumbers: 'on',
      lineNumbersMinChars: 3,
      lineDecorationsWidth: 10,
      automaticLayout: true,
      theme:
        theme == 'high-contrast-black'
          ? 'hc-black'
          : theme == 'vs-light'
          ? 'vs'
          : 'vs-dark',
      cursorBlinking: 'smooth',
      lightbulb: {
        enabled: true,
      },
    });
    editor.onDidChangeModelContent(() => {
      if (websocket != null) {
        const currUpdater = {
          operation: 'fileUpdate',
          code: editor.getValue(),
        };
        websocket.send(JSON.stringify(currUpdater));
      }
      const codeNlanguage: UpdateUserCodeRequestObject = {
        currentUserCode: editor.getValue(),
        currentUserLanguage: language,
      };
      if (props.page == 'Dashboard') {
        dispatch(updateUserCode(codeNlanguage));
      } else if (props.page == 'DailyChallenge') {
        dispatch(changeDcCode(codeNlanguage));
      } else if (props.page == 'Tutorials') {
        dispatch(changeTutorialCode(codeNlanguage));
      }
    });

    //Keybinding for save -> CTRL+S
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, function () {
      props.SaveRef.current?.click();
    });

    //Keybinding for Simulate -> CTRL+ALT+N
    if (props.page == 'Dashboard' || props.page == 'Tutorials') {
      editor.addCommand(
        monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KeyN,
        () => {
          if (props.gameType === GameType.NORMAL) {
            dispatch(isSelfMatchModalOpened(true));
            dispatch(codeCommitNameChanged('Current Code'));
            dispatch(codeCommitIDChanged(null));
            dispatch(mapCommitNameChanged('Current Map'));
            dispatch(mapCommitIDChanged(null));
          } else if (props.gameType === GameType.PVP) {
            dispatch(isPvPSelfMatchModalOpened(true));
            dispatch(code1CommitNameChanged('Current Code'));
            dispatch(code1CommitIDChanged(null));
            dispatch(code2CommitNameChanged('Current Code'));
            dispatch(code2CommitIDChanged(null));
          }
        },
      );
    }

    //Keybinding for Commit -> CTRL+K
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyK, function () {
      dispatch(isCommitModalOpened(true));
    });

    //Keybinding for Submit -> CTRL+SHIFT+S
    editor.addCommand(
      monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyS,
      function () {
        props.SubmitRef.current?.click();
      },
    );

    //Keybinding for GameMode Change -> CTRL+M
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyM, () => {
      const newGameType =
        props.gameType == GameType.NORMAL ? GameType.PVP : GameType.NORMAL;
      const gameTypeAndLanguage: GameTypeAndLanguage = {
        gameType: newGameType,
        language: language,
      };
      dispatch(updateEditorCodeState(gameTypeAndLanguage));
    });

    return editor;
  };

  useEffect(() => {
    if (!divCodeEditor.current) return;
    let languageClient: MonacoLanguageClient;
    let editor: monaco.editor.IStandaloneCodeEditor;
    let wsClient: WebSocket;
    if (autocomplete) {
      const url = `${lspUrl}/${
        props.language == 'c_cpp' ? 'cpp' : props.language
      }`;
      wsClient = new WebSocket(url);
      wsClient.onerror = () => {
        toast.error('Error occured in lsp');
        editor = createEditor(
          divCodeEditor.current as HTMLDivElement,
          null,
          null,
        );
      };
      wsClient.onopen = () => {
        const updater = {
          operation: 'fileUpdate',
          code: userCode,
        };
        wsClient.send(JSON.stringify(updater));
        const filePathRequest = {
          operation: 'getAbsPath',
        };
        wsClient.send(JSON.stringify(filePathRequest));
        const socket = toSocket(wsClient);
        const filePathMessageReader = new WebSocketMessageReader(socket);
        filePathMessageReader.listen((message: Message) => {
          const fileInfo = message as Message & Editor.Workspace;
          const workspace: Editor.Workspace = {
            filepath: fileInfo.filepath,
            folderpath: fileInfo.folderpath,
          };
          filePathMessageReader.dispose();
          editor = createEditor(
            divCodeEditor.current as HTMLDivElement,
            workspace,
            wsClient,
          );
          MonacoServices.install({
            workspaceFolders: [
              {
                uri: Uri.parse(workspace.folderpath),
                name: 'Workspace',
                index: 1,
              },
            ],
          });
          const newSocket = toSocket(wsClient);
          const writer = new WebSocketMessageWriter(newSocket);
          const reader = new WebSocketMessageReader(newSocket);
          languageClient = createLanguageClient({
            reader,
            writer,
          });
          languageClient.start();
          reader.onClose(() => languageClient.stop());
        });
      };
    } else {
      editor = createEditor(divCodeEditor.current, null, null);
    }
    return () => {
      languageClient?.stop();
      monaco.editor.getModels().forEach(model => model.dispose());
      editor?.dispose();
      wsClient?.close(1000);
    };
  }, [
    fontSize,
    theme,
    language,
    keyboardHandler,
    props.page,
    autocomplete,
    props.gameType,
    props.tutorialNumber,
  ]);

  return <div className={styles.Editor} ref={divCodeEditor}></div>;
}
