import { configureStore } from "@reduxjs/toolkit";
import {setupListeners } from "@reduxjs/toolkit/query";
import {apiSlice} from "./service/auth";
import authReducer from "./features/authSlice"


export const store = configureStore({
  reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      auth: authReducer,
      // Add other reducers here
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)

})

setupListeners(store.dispatch)
