import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  isLoggedIn: boolean;
}

const initialState: CounterState = {
  isLoggedIn: false,
};

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
