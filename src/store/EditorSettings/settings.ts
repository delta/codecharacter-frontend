import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface settingsStateType {
  isSettingsOpen: boolean;
  fontSize: number;
  theme: string;
  keyboardHandler: string;
  enableBasicAutoComplete: boolean;
  enableSnippets: boolean;
  isInfoOpen: boolean;
  isCommitModalOpen: boolean;
  autocomplete: boolean;
}

const initialState: settingsStateType = {
  isSettingsOpen: false,
  fontSize: 16,
  theme: 'vs-dark',
  keyboardHandler: 'default',
  enableBasicAutoComplete: true,
  enableSnippets: true,
  isInfoOpen: false,
  isCommitModalOpen: false,
  autocomplete: false,
};

export interface CodeAndLanguage {
  currentUserCode: string;
  currentUserLanguage: string;
}

export const settingsSlice = createSlice({
  name: 'settingsState',
  initialState,
  reducers: {
    isSettingsOpened: (state, action: PayloadAction<boolean>) => {
      state.isSettingsOpen = action.payload;
    },
    fontSizeChanged: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
    },
    themeChanged: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    keyboardHandlerChanged: (state, action: PayloadAction<string>) => {
      state.keyboardHandler = action.payload;
    },
    enableBasicAutoCompleteChanged: (state, action: PayloadAction<boolean>) => {
      state.enableBasicAutoComplete = action.payload;
    },
    enableSnippetsChanged: (state, action: PayloadAction<boolean>) => {
      state.enableSnippets = action.payload;
    },
    isInfoOpened: (state, action: PayloadAction<boolean>) => {
      state.isInfoOpen = action.payload;
    },
    isCommitModalOpened: (state, action: PayloadAction<boolean>) => {
      state.isCommitModalOpen = action.payload;
    },
    autoCompleteChanged: (state, action: PayloadAction<boolean>) => {
      state.autocomplete = action.payload;
    },
  },
});

export const {
  isSettingsOpened,
  fontSizeChanged,
  themeChanged,
  keyboardHandlerChanged,
  enableBasicAutoCompleteChanged,
  enableSnippetsChanged,
  isInfoOpened,
  isCommitModalOpened,
  autoCompleteChanged,
} = settingsSlice.actions;

export const IsSettingsOpen = (state: RootState): boolean =>
  state.codeEditorReducer.settingsState.isSettingsOpen;
export const FontSize = (state: RootState): number =>
  state.codeEditorReducer.settingsState.fontSize;
export const Theme = (state: RootState): string =>
  state.codeEditorReducer.settingsState.theme;
export const KeyboardHandler = (state: RootState): string =>
  state.codeEditorReducer.settingsState.keyboardHandler;
export const EnableBasicAutoComplete = (state: RootState): boolean =>
  state.codeEditorReducer.settingsState.enableBasicAutoComplete;
export const EnableSnippets = (state: RootState): boolean =>
  state.codeEditorReducer.settingsState.enableSnippets;
export const IsInfoOpen = (state: RootState): boolean =>
  state.codeEditorReducer.settingsState.isInfoOpen;
export const IsCommitModalOpen = (state: RootState): boolean =>
  state.codeEditorReducer.settingsState.isCommitModalOpen;
export const Autocomplete = (state: RootState): boolean =>
  state.codeEditorReducer.settingsState.autocomplete;

export default settingsSlice.reducer;
