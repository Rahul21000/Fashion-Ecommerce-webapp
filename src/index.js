import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {store,persister} from "./store"
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <App />
    </PersistGate>
  </Provider>
);
