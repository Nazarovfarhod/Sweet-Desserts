import { configureStore } from "@reduxjs/toolkit";

import dessertsReducer from "./features/dessertSlise";

export const store = configureStore({
  reducer: {
    orders: dessertsReducer,
  },
});
