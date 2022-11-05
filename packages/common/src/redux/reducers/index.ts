import { combineReducers } from "@reduxjs/toolkit";
import type { PayloadAction, Reducer } from "@reduxjs/toolkit";
import appReducer, {
  setIsLoggedIn,
} from "@happy/common/src/redux/reducers/appReducer";
import { RootState } from "../store";

const combineReducer: Reducer = combineReducers({
  appReducer,
});

const rootReducer = (
  state: RootState,
  action: PayloadAction<boolean | any>
): Reducer => {
  if (state && setIsLoggedIn.match(action)) {
    if (action.payload === false) state = undefined;
  }

  return combineReducer(state, action);
};

export default rootReducer;
