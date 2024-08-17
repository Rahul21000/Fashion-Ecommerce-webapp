import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import { configureStore} from "@reduxjs/toolkit";
import CartReducer from "./feature/CartSlice";
import AuthSlice from "./feature/AuthSlice";
import WhisListSlice from "./feature/WhisListSlice";

const persistConfig = {
  key: "fashion_cart",
  storage,
};
const persistConfig1 = {
  key: "fashion_whislist",
  storage,
};
const persistedReducer = persistReducer(persistConfig, CartReducer);
const persistedReducer1 = persistReducer(persistConfig1, WhisListSlice);

export let store = configureStore({ reducer: {
  cart:persistedReducer,
  whislist:persistedReducer1,
  auth:AuthSlice
},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

 });
export let persister = persistStore(store);
