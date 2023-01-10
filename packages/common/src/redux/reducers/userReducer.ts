import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Image } from "react-native-image-crop-picker";

type GenderTypes = "Women" | "Men";

interface ISelectedInterests {
  [key: string]: number[];
}

interface IOppositeGender {
  gender: GenderTypes;
  selected: boolean;
}

export interface IUserDetails {
  connection: { key: string; value: string };
  gender: GenderTypes;
  oppositeGender: IOppositeGender[];
  userAge: Date;
  userImages: Image[];
  userName: string;
  userSelectedInterests: ISelectedInterests;
}

interface userState {
  userDetails: IUserDetails;
}

const initialState = {
  userDetails: {},
} as userState;

export const userSlice = createSlice({
  name: "USER_REDUCER",
  initialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<IUserDetails>) => {
      state.userDetails = action.payload;
    },
  },
});

export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;
