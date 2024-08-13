import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import { configureStore} from "@reduxjs/toolkit";
import CartReducer from "./feature/CartSlice";
import AuthSlice from "./feature/AuthSlice";

const persistConfig = {
  key: "cart",
  storage,
};
const persistedReducer = persistReducer(persistConfig, CartReducer);

export let store = configureStore({ reducer: {
  cart:persistedReducer,
  auth:AuthSlice
},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

 });
export let persister = persistStore(store);
