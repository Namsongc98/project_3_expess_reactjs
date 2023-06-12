import {  configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import useSlice, { logout } from "./useSlice";
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
import hotelSlice from "./hotelSlice";


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist :["error","status"]
}

const rootReducer = combineReducers({
  user: useSlice,
  hotel:hotelSlice,
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