import { configureStore } from "@reduxjs/toolkit";

// Reducers
import userReducer from "./user";

const store = configureStore({
  reducer: {
    userSelected: userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
