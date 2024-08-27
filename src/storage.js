import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './features/modal/modalSlice';
import competitorReducer from './features/competirors/competitorSlice';
import TimerReducer from './features/timer/TimerSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    competitor: competitorReducer,
    timer: TimerReducer,
  },
});
