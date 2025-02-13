import { Code } from '@codecharacter-2024/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import defaultCppCode from '../../assets/codes/cpp/run.cpp?raw';
import defaultPythonCode from '../../assets/codes/python/run.py?raw';
import defaultJavaCode from '../../assets/codes/java/Run.java?raw';
import defaultPvPCppCode from '../../assets/codes/cpp/runpvp.cpp?raw';
import defaultPvPPythonCode from '../../assets/codes/python/runpvp.py?raw';
import defaultPvPJavaCode from '../../assets/codes/java/RunPvP.java?raw';

export const languagesAvailable = ['c_cpp', 'python', 'java'];

export enum GameType {
  NORMAL,
  PVP,
}

export interface editorStateType {
  allLanguagesNormalCode: string[];
  allLanguagesPvPCode: string[];
  userCode: string;
  language: string;
  lastSavedAt: Date;
  gameType: GameType;
}

const initialState: editorStateType = {
  allLanguagesNormalCode: [defaultCppCode, defaultPythonCode, defaultJavaCode],
  allLanguagesPvPCode: [
    defaultPvPCppCode,
    defaultPvPPythonCode,
    defaultPvPJavaCode,
  ],
  userCode: '',
  language: 'c_cpp',
  lastSavedAt: new Date(),
  gameType: GameType.NORMAL,
};

export interface UpdateUserCodeRequestObject {
  currentUserCode: string;
  currentUserLanguage: string;
  gameType?: GameType;
}

export interface GameTypeAndLanguage {
  gameType: GameType;
  language: string;
}

export const editorSlice = createSlice({
  name: 'editorState',
  initialState,
  reducers: {
    initializeEditorStates: (state, action: PayloadAction<Code>) => {
      state.userCode = action.payload.code;
      if (action.payload.language === 'C' || action.payload.language === 'CPP')
        state.language = 'c_cpp';
      else if (action.payload.language === 'PYTHON') state.language = 'python';
      else if (action.payload.language === 'JAVA') state.language = 'java';
      state.lastSavedAt = action.payload.lastSavedAt;
      const desiredIndex = languagesAvailable.indexOf(state.language);
      state.allLanguagesNormalCode[desiredIndex] = action.payload.code;
      state.gameType = GameType.NORMAL;
    },

    initializePvPEditorStates: (state, action: PayloadAction<Code>) => {
      state.userCode = action.payload.code;
      if (action.payload.language === 'C' || action.payload.language === 'CPP')
        state.language = 'c_cpp';
      else if (action.payload.language === 'PYTHON') state.language = 'python';
      else if (action.payload.language === 'JAVA') state.language = 'java';
      state.lastSavedAt = action.payload.lastSavedAt;
      const desiredIndex = languagesAvailable.indexOf(state.language);
      state.allLanguagesPvPCode[desiredIndex] = action.payload.code;
      state.gameType = GameType.PVP;
    },

    updateUserCode: (
      state,
      action: PayloadAction<UpdateUserCodeRequestObject>,
    ) => {
      const tempCurrentUserLanguage = action.payload.currentUserLanguage;
      const desiredIndex = languagesAvailable.indexOf(tempCurrentUserLanguage);
      const newCodeAndLanguage: UpdateUserCodeRequestObject = {
        currentUserCode: action.payload.currentUserCode,
        currentUserLanguage: action.payload.currentUserLanguage,
      };
      const gameType = action.payload.gameType ?? state.gameType;
      state.gameType = gameType;
      if (gameType === GameType.NORMAL) {
        state.allLanguagesNormalCode[desiredIndex] =
          newCodeAndLanguage.currentUserCode;
      } else if (gameType === GameType.PVP) {
        state.allLanguagesPvPCode[desiredIndex] =
          newCodeAndLanguage.currentUserCode;
      }
      state.userCode = newCodeAndLanguage.currentUserCode;
    },

    updateEditorCodeState: (
      state,
      action: PayloadAction<GameTypeAndLanguage>,
    ) => {
      state.gameType = action.payload.gameType;
      if (action.payload.gameType === GameType.NORMAL) {
        state.userCode =
          state.allLanguagesNormalCode[
            languagesAvailable.indexOf(action.payload.language)
          ];
      } else {
        state.userCode =
          state.allLanguagesPvPCode[
            languagesAvailable.indexOf(action.payload.language)
          ];
      }
    },

    changeLanguage: (state, action: PayloadAction<string>) => {
      const tempCurrentUserLanguage = action.payload;
      const desiredIndex = languagesAvailable.indexOf(tempCurrentUserLanguage);
      if (state.gameType === GameType.NORMAL) {
        state.userCode = state.allLanguagesNormalCode[desiredIndex];
      } else {
        state.userCode = state.allLanguagesPvPCode[desiredIndex];
      }
      state.language = action.payload;
    },

    changeEditorGameType: (state, action: PayloadAction<GameType>) => {
      state.gameType = action.payload;
      if (action.payload === GameType.NORMAL) {
        state.userCode =
          state.allLanguagesNormalCode[
            languagesAvailable.indexOf(state.language)
          ];
      } else {
        state.userCode =
          state.allLanguagesPvPCode[languagesAvailable.indexOf(state.language)];
      }
    },
  },
});

export const {
  updateUserCode,
  changeLanguage,
  initializeEditorStates,
  initializePvPEditorStates,
  updateEditorCodeState,
  changeEditorGameType,
} = editorSlice.actions;
export const UserCode = (state: RootState): string =>
  state.codeEditorReducer.editorState.userCode;
export const UserLanguage = (state: RootState): string =>
  state.codeEditorReducer.editorState.language;
export const CurrentGameType = (state: RootState): GameType =>
  state.codeEditorReducer.editorState.gameType;
export default editorSlice.reducer;
