import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {cartSlice} from "./features/indexSlice"

const middleware = [thunk];

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middleware),
});