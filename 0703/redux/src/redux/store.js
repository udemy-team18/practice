import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import CounterSlice from "./counterSlice";
import AuthSlice from "./authSlice";
import TodoSlice from "./todosSlice";
import CartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    CounterSlice: CounterSlice,
    AuthSlice: AuthSlice,
    TodoSlice: TodoSlice,
    CartSlice: CartSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
