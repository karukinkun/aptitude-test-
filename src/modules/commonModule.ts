/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ErrorObject = {
  message: string;
  summary: string;
  detail: string;
  isGoBack?: boolean;
};

type State = {
  isLoading: boolean;
  error?: ErrorObject;
  errorCount: number;
};

const initialState: State = {
  isLoading: false,
  errorCount: 0,
};

const commonModule = createSlice({
  name: 'common',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    endLoading(state) {
      state.isLoading = false;
      state.errorCount = 0;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    failLoading(state, action: PayloadAction<ErrorObject>) {
      state.isLoading = false;
      state.errorCount += 1;
      state.error = action.payload;
    },
    clearError(state) {
      state.error = undefined;
    },
  },
});

export const {
  startLoading,
  endLoading,
  failLoading,
  clearError,
} = commonModule.actions;

export const createErrorObject = (
  message: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  e: any,
  isGoBack?: boolean,
) => {
  const res = e.response;
  if (res?.config?.headers['X-Amz-Security-Token']) {
    res.config.headers['X-Amz-Security-Token'] = '***';
  }
  if (res?.config?.headers?.Authorization) {
    res.config.headers.Authorization = '***';
  }

  return {
    message,
    summary: String(e),
    detail: JSON.stringify(res || e),
    isGoBack,
  };
};

export default commonModule;
