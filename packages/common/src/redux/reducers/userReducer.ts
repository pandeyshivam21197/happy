import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface appState {
  isLoggedIn: boolean;
}

const initialState = {
  isLoggedIn: false,
} as appState;

export const userSlice = createSlice({
  name: "USER_REDUCER",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = userSlice.actions;

export default userSlice.reducer;
