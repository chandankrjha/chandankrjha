import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import App from "./main/App";
import "./styles/index.scss";
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
), document.getElementById('chandankrjha'));

//registerServiceWorker();

