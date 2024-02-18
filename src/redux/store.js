import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./carSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterReducer } from "./filterSlice";

const carsConfig = {
  key: "root",
  storage,
  whitelist: ["favCarsIds"],
};

const persistedReducer = persistReducer(carsConfig, carsReducer);

export const store = configureStore({
  reducer: { cars: persistedReducer, filter: filterReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
