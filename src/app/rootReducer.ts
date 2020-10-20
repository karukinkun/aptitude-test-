/* eslint-disable import/no-cycle */
import { combineReducers } from '@reduxjs/toolkit';

import commonModule from 'modules/commonModule';

const rootReducer = combineReducers({
  common: commonModule.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
