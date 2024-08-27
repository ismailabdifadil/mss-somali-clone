import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  timeLeft: 259200,
};

const TimerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    decrease: (state) => {
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
      }
    },
  },
});

export default TimerSlice.reducer;
export const { decrease } = TimerSlice.actions;
