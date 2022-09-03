import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
//this is slice one
const counterSlice = createSlice({
  name: "counter",
  //   initialState:initialState,
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      //we  mutating state, here, we can in toolkit
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
