import {  configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import useSlice, { logout } from "./useSlice";
import hotelSlice  from "./hotelSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import profileSlice from "./profileSlice";

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const rootReducer = combineReducers({
  user: useSlice,
  hotel:hotelSlice,
   profile:profileSlice,
  reducers: logout,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const  persistor = persistStore(store)


export default store;