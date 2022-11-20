import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface appState {
  isLoggedIn: boolean;
}

const initialState = {
  isLoggedIn: false,
} as appState;

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = appSlice.actions;

export default appSlice.reducer;
