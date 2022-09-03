import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./slices/AuthSlice";
import authReducer from "../store/slices/AuthSlice";
import counterSlice from "./slices/CounterSlice";
//this is slice two

// const store = createStore(counterSlice.reducer);
const store = configureStore({
  // for multiple slice
  reducer: {
    counter: counterSlice.reducer,
    auth: authReducer,
  },
});

//to avoid typo, use to return an action object of this shape : {type:'some auto-generate unique identifier'}

export default store;
