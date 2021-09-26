import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCount: (state) => {
      state.counter += 1;
    },
    minusCount: (state) => {
      state.counter -= 1;
    },
  },
});

export const { addCount, minusCount } = counter.actions;
export default counter.reducer;
