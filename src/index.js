import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { Provider } from "react-redux";

import rootReducer from "./store/reducers/rootReduser";
import firebase from "./store/fb_config";

import App from "./App";
import "./index.css";

import { LocaleProvider } from "antd";
import ru_RU from "antd/lib/locale-provider/ru_RU";
import moment from "moment";
import "moment/locale/ru";
moment.locale("ru");

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reactReduxFirebase(firebase, {
      userProfile: "users",
      useFirestoreForProfile: true,
      attachAuthIsReady: true
    }),
    reduxFirestore(firebase)
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <LocaleProvider locale={ru_RU}>
          <App />
        </LocaleProvider>
      </Router>
    </Provider>,

    document.getElementById("root")
  );
  registerServiceWorker();
});
