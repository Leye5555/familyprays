import React from "react";
import reactDom from "react-dom";
import { Provider }  from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import reducers from "./reducers";
import "./index.css";



 const store = createStore(reducers, compose(applyMiddleware(thunk)));
reactDom.render(
      <Provider store = {store}>
             <App />
      </Provider>
      , document.getElementById("root"));