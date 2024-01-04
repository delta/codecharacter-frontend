import { ChallengeType, TutorialsGetRequest } from '@codecharacter-2024/client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { CodeAndLanguage, languagesAvailable } from '../editor/code';
import defaultCppCode from '../../assets/codes/cpp/run.cpp?raw';
import defaultPythonCode from '../../assets/codes/python/run.py?raw';
import defaultJavaCode from '../../assets/codes/java/Run.java?raw';

export interface TutorialStateType {
  // eslint-disable-next-line prettier/prettier
  tutorials: TutorialsGetRequest;
  tutorialCode: string;
  tutorialAllLanguagesCode: string[];
  tutorialLanguage: string;
  tutorialMap: Array<Array<number>>;
  isSimulating: boolean;
}

const initialState: TutorialStateType = {
  tutorials: {
    tutorialId: 0,
    tutorialName: '',
    description: '',
    tutorialType: '' as ChallengeType,
    tutorialCodes: {
      cpp: ' ',
      java: ' ',
      python: ' ',
      image: ' ',
    },
  },
  tutorialCode: defaultCppCode,
  tutorialAllLanguagesCode: [
    defaultCppCode,
    defaultPythonCode,
    defaultJavaCode,
  ],
  tutorialLanguage: 'c_cpp',
  tutorialMap: [],
  isSimulating: false,
};

export const tutorialsSlice = createSlice({
  name: 'tutorialsState',
  initialState,
  reducers: {
    initializeTutorialState: (
      state,
      action: PayloadAction<TutorialsGetRequest>,
    ) => {
      state.tutorials.tutorialName = action.payload.tutorialName;
      state.tutorials.tutorialId = action.payload.tutorialId;
      (state.tutorials.description = action.payload.description
        ? action.payload.description
        : ''),
        (state.tutorials.tutorialCodes = action.payload.tutorialCodes);
    },
    changeTutorialCode: (state, action: PayloadAction<CodeAndLanguage>) => {
      const tempCurrentUserLanguage = action.payload.currentUserLanguage;
      const desiredIndex = languagesAvailable.indexOf(tempCurrentUserLanguage);
      state.tutorialAllLanguagesCode[desiredIndex] =
        action.payload.currentUserCode;
      state.tutorialCode = action.payload.currentUserCode;
    },
    changeTutorialLanguage: (state, action: PayloadAction<string>) => {
      const tempCurrentUserLanguage = action.payload;
      const desiredIndex = languagesAvailable.indexOf(tempCurrentUserLanguage);
      state.tutorialCode = state.tutorialAllLanguagesCode[desiredIndex];
      state.tutorialLanguage = action.payload;
    },
    changeTutorialMap: (state, action: PayloadAction<Array<Array<number>>>) => {
      state.tutorialMap = action.payload;
    },
    changeSimulationState: (state, action: PayloadAction<boolean>) => {
      state.isSimulating = action.payload;
    },
  },
});

export const {
  initializeTutorialState,
  changeTutorialCode,
  changeTutorialLanguage,
  changeTutorialMap,
  changeSimulationState,
} = tutorialsSlice.actions;
export const tutorialState = (state: RootState): TutorialsGetRequest =>
  state.tutorials.tutorials;
export const tutorialCode = (state: RootState): string =>
  state.tutorials.tutorialCode;
export const tutorialDescription = (state: RootState): string | undefined =>
  state.tutorials.tutorials.description;
export const tutorialCodeLanguage = (state: RootState): string =>
  state.tutorials.tutorialLanguage;
export const tutorialMap = (state: RootState): Array<Array<number>> =>
  state.tutorials.tutorialMap;
export const tutorialSimulation = (state: RootState): boolean =>
  state.tutorials.isSimulating;

export default tutorialsSlice.reducer;
