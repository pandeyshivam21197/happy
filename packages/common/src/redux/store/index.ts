import type { EnhancedStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "@happy/common/src/redux/reducers";
import { StorageService } from "@happy/common/src/services/storage/StorageService";

const persistConfig = {
  key: "root",
  storage: StorageService.getReduxStorage(),
  whitelist: ["appReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: EnhancedStore = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, ...(__DEV__ ? [logger] : [])],
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, persistor };
