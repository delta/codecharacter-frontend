import { Match, MatchApi } from '@codecharacter-2024/client';
import { apiConfig, ApiError } from '../../api/ApiConfig';
import { Action, createSlice, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import Toast from 'react-hot-toast';
export interface BattleTvInterFace {
  loading: boolean;
  hasErrors: boolean;
  hasbeenFetched: boolean;
  battletv: Match[];
}

export const initialState = {
  loading: false,
  hasErrors: false,
  hasbeenFetched: false,
  battletv: [],
};

const battleTvSlice = createSlice({
  name: 'BattleTv',
  initialState,
  reducers: {
    getBattleTv: state => {
      state.loading = true;
    },
    getBattleTvSuccess: (state, { payload }) => {
      state.battletv = payload;
      state.loading = false;
      state.hasbeenFetched = true;
      state.hasErrors = false;
    },
    getBattleTvFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getBattleTv, getBattleTvSuccess, getBattleTvFailure } =
  battleTvSlice.actions;

// A selector
export const battleTvSelector = (state: RootState): BattleTvInterFace =>
  state.battletv;

// The reducer
export default battleTvSlice.reducer;

// Asynchronous thunk action
export function fetchBattleTv(): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> {
  return async useAppDispatch => {
    useAppDispatch(getBattleTv());

    const matchesAPI = new MatchApi(apiConfig);
    matchesAPI
      .getUserMatches()
      .then(response => {
        useAppDispatch(getBattleTvSuccess(response));
      })
      .catch(error => {
        if (error instanceof ApiError) Toast.error(error.message);
        useAppDispatch(getBattleTvFailure());
      });
  };
}
