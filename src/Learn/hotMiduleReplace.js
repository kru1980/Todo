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

const configureStore = () => {
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

  // if (module.hot) {
  //   module.hot.accept("./store/reducers/rootReduser", () => {
  //     store.replaceReducer(rootReducer);
  //   });
  // }
  // return store;

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("./store/reducers/rootReduser", () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
};

const store = configureStore();

registerServiceWorker();

const render = Component => {
  return ReactDOM.render(
    <Provider store={store}>
      <Router>
        <LocaleProvider locale={ru_RU}>
          <App />
        </LocaleProvider>
      </Router>
    </Provider>,
    document.getElementById("root")
  );
};
// const render = (Component, store) => {
//   return store.firebaseAuthIsReady.then(() => {
//     ReactDOM.render(
//       <Provider store={store}>
//         <Router>
//           <LocaleProvider locale={ru_RU}>
//             <App />
//           </LocaleProvider>
//         </Router>
//       </Provider>,
//       document.getElementById("root")
//     );
//   });
// };



render(App);

// const rootEL = document.getElementById("root");

// store.firebaseAuthIsReady.then(() => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <Router>
//         <LocaleProvider locale={ru_RU}>
//           <App />
//         </LocaleProvider>
//       </Router>
//     </Provider>,
//     rootEL
//   );

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}
