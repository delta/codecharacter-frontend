import { RendererUtils } from '@codecharacter-2024/renderer';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getLogs } from './logAPI';

const initialState = {
  logs: '',
};

export const getLogAction = createAsyncThunk(
  'logs/getLogs',
  async (idWithCallback: { id: string; callback: () => void }) => {
    console.log('called');
    console.log(idWithCallback.id);
    try {
      getLogs(idWithCallback.id).then(logs => {
        console.log('worked');
        console.log(logs);
        idWithCallback.callback();
        setTimeout(() => {
          RendererUtils.loadLog(logs);
        }, 1000);
      });
      return '';
    } catch (error) {
      throw error;
    }
  },
);

export const logSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getLogAction.fulfilled, (state, action) => {
      state.logs = action.payload;
    });
  },
});

export const logs = (state: RootState): string => state.logs.logs;
export default logSlice.reducer;
