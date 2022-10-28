import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
console.log('jel')
console.log('hello')
