import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  id: number;
  name: string;
}

export interface InitialStateUser {
  user: IUser | null;
}

const initialState: InitialStateUser = {
  user: null
};

export const userSlice = createSlice({
  name: "userSelected",
  initialState,
  reducers: {
    selected: (state, action: PayloadAction<{ user: IUser | null }>) => {
      state.user = action.payload.user;
    }
  }
});

// Actions
export const { selected } = userSlice.actions;

// Reducer
export default userSlice.reducer;
