import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./Reducer/chatReducer";
import InternalReducer from "./Reducer/InternalReducer";
import adminReducer from "./Reducer/adminReducer";
import studentReducer from "./Reducer/studentReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import roomReducer from "./Reducer/roomReducer";
import attanceReducer from './Reducer/attanceReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, chatReducer);
const persistedInternalReducer = persistReducer(persistConfig, InternalReducer);
const persistedadminReducer = persistReducer(persistConfig, adminReducer);
const persistedroomReducer = persistReducer(persistConfig, roomReducer);
const persistedstudentReducer = persistReducer(persistConfig, studentReducer);
const persistedattanceReducer = persistReducer(persistConfig, attanceReducer);

const store = configureStore({
  reducer: {
    chat: persistedReducer,
    internal: persistedInternalReducer,
    admin:persistedadminReducer,
    room:persistedroomReducer,
    student:persistedstudentReducer,
    attance:persistedattanceReducer
  },
});

const persistor = persistStore(store)
export {store,persistor}
