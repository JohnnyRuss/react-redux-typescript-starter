import { configureStore } from "@reduxjs/toolkit";
import root from "./reducers/root";

const store = configureStore({
  reducer: root,
});

export type RootStateT = ReturnType<typeof store.getState>;
export type AppDispatchT = typeof store.dispatch;

export default store;
