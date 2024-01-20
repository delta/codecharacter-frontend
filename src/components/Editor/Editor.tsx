import { useEffect, useRef } from 'react';
import { Editor, loader } from '@monaco-editor/react';
import * as Editors from './EditorTypes';
import styles from './style.module.css';
import * as monaco from 'monaco-editor';

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker();
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker();
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker();
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

loader.config({ monaco });
loader.init();

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
  updateUserCode,
  CodeAndLanguage,
  UserCode,
} from '../../store/editor/code';

import {
  codeCommitIDChanged,
  codeCommitNameChanged,
  isSelfMatchModalOpened,
  mapCommitIDChanged,
  mapCommitNameChanged,
} from '../../store/SelfMatchMakeModal/SelfMatchModal';

import { lspUrl } from '../../config/config';

import {
  dcCode,
  changeDcCode,
} from '../../store/DailyChallenge/dailyChallenge';
import { Uri } from 'vscode';
import { buildWorkerDefinition } from 'monaco-editor-workers';

buildWorkerDefinition(
  '../../node_modules/monaco-editor-workers/dist/workers',
  new URL('', window.location.href).href,
  false,
);

let firstRender = 1;

export default function CodeEditor(props: Editors.Props): JSX.Element {
  const monacoRef = useRef(null);
  const editorRef = useRef(null);

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

  const userCode: string =
    props.page == 'Dashboard'
      ? useAppSelector(UserCode)
      : useAppSelector(dcCode);
  const fontSize: number = useAppSelector(FontSize);
  const theme: string = useAppSelector(Theme);
  const autocomplete: boolean = useAppSelector(Autocomplete);
  const dispatch: React.Dispatch<unknown> = useAppDispatch();
  const keyboardHandler = useAppSelector(KeyboardHandler);
  const language = props.language;
  let workSpace: Editors.Workspace | null = null;
  let webSocket: WebSocket | null = null;
  let languageClientRef: MonacoLanguageClient | null = null;
  let wsClientRef: WebSocket | null = null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createEditor = (editor: any, monaco: any) => {
    editor.updateOptions({
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
    monaco.Uri.parse(workSpace != null ? workSpace.filepath : '');

    let wsClient: WebSocket;
    let languageClient: MonacoLanguageClient;

    if (autocomplete && userCode) {
      editor.setValue(userCode);

      const url = `${lspUrl}/${
        props.language == 'c_cpp' ? 'cpp' : props.language
      }`;
      wsClient = new WebSocket(url);
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
          const fileInfo = message as Message & Editors.Workspace;
          const workspace: Editors.Workspace = {
            filepath: fileInfo.filepath,
            folderpath: fileInfo.folderpath,
          };
          workSpace = workspace;
          webSocket = wsClient;
          filePathMessageReader.dispose();

          MonacoServices.install({
            workspaceFolders: [
              {
                uri: Uri.parse(workspace.folderpath),
                name: 'Workspace',
                index: 1,
              },
            ],
          });
          wsClientRef = wsClient;
          const newSocket = toSocket(wsClient);
          const writer = new WebSocketMessageWriter(newSocket);
          const reader = new WebSocketMessageReader(newSocket);
          languageClient = createLanguageClient({
            reader,
            writer,
          });
          languageClientRef = languageClient;
          languageClient.start();
          reader.onClose(() => languageClient.stop());
        });
      };
    }
    //Keybinding for save -> CTRL+S
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, function () {
      props.SaveRef.current?.click();
    });

    //Keybinding for Simulate -> CTRL+ALT+N
    if (props.page == 'Dashboard') {
      editor.addCommand(
        monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KeyN,
        function () {
          dispatch(isSelfMatchModalOpened(true));
          dispatch(codeCommitNameChanged('Current Code'));
          dispatch(codeCommitIDChanged(null));
          dispatch(mapCommitNameChanged('Current Map'));
          dispatch(mapCommitIDChanged(null));
        },
      );

      //Keybinding for Commit -> CTRL+K
      editor.addCommand(
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyK,
        function () {
          dispatch(isCommitModalOpened(true));
        },
      );
    }

    //Keybinding for Submit -> CTRL+SHIFT+S
    editor.addCommand(
      monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyS,
      function () {
        props.SubmitRef.current?.click();
      },
    );
  };

  useEffect(() => {
    if (!editorRef.current && !monacoRef.current) return;
    createEditor(editorRef.current, monacoRef.current);

    return () => {
      languageClientRef?.stop();
      wsClientRef?.close();
    };
  }, [fontSize, theme, language, keyboardHandler, props.page, autocomplete]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleEditorDidMount(editor: any, monaco: any) {
    monacoRef.current = monaco;
    editorRef.current = editor;
    createEditor(editor, monaco);
  }

  useEffect(() => {
    if (
      userCode &&
      editorRef.current &&
      monacoRef.current &&
      firstRender != 0 &&
      (localStorage.getItem('firstEditorRender') == null
        ? true
        : parseInt(localStorage.getItem('firstEditorRender') as string) != 0)
    ) {
      (editorRef.current as any).setValue(userCode);
      firstRender = 0;
      localStorage.setItem('firstEditorRender', firstRender.toString());
    }
  }, [userCode]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleEditorWillMount(monaco: any) {
    // Register C++ language
    monaco.languages.register({
      id: 'cpp',
      extensions: ['.cpp'],
      aliases: ['CPlusPlus', 'cpp', 'CPP', 'C++', 'c++'],
    });

    // Register Python language
    monaco.languages.register({
      id: 'python',
      extensions: ['.py'],
      aliases: ['Python', 'py'],
    });

    // Register Java language
    monaco.languages.register({
      id: 'java',
      extensions: ['.java', '.jar', '.class', '.jav'],
      aliases: ['Java', 'java'],
    });
  }

  function handleEditorChange() {
    if (webSocket != null) {
      const currUpdater = {
        operation: 'fileUpdate',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        code: (editorRef.current as any)?.getValue(),
      };
      webSocket.send(JSON.stringify(currUpdater));
    }
    const codeNlanguage: CodeAndLanguage = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      currentUserCode: (editorRef.current as any).getValue(),
      currentUserLanguage: language,
    };
    if (props.page == 'Dashboard') {
      dispatch(updateUserCode(codeNlanguage));
    } else {
      dispatch(changeDcCode(codeNlanguage));
    }
  }

  return (
    <Editor
      defaultLanguage={language}
      onMount={handleEditorDidMount}
      beforeMount={handleEditorWillMount}
      onChange={handleEditorChange}
      className={styles.editor}
    />
  );
}
