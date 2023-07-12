import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import drawingSlice from "./drawingSlice";

export const store = configureStore({
  reducer: {
    drawing: drawingSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
