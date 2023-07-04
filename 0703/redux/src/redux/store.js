import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import CounterSlice from "./counterSlice";
import AuthSlice from "./authSlice";
import TodoSlice from "./todoSlice";

const store = configureStore({
  reducer: {
    CounterSlice: CounterSlice,
    AuthSlice: AuthSlice,
    TodoSlice: TodoSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
