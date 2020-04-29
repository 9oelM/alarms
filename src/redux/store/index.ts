import { createStore } from "redux";
import { rootReducer, RootState } from "../reducers";

import { persistReducer, PersistConfig, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

export const persistConfig: PersistConfig<RootState> = {
  key: `root`,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => {
  const getStore = () => createStore(persistedReducer);
  const getPersistor = () => persistStore(getStore());

  return { getStore, getPersistor };
};
