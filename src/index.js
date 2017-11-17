import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/containers/App';
import Provider from "react-redux/es/components/Provider";
import BookReducer from "./reducers/reducer";
import {createStore} from "redux";

const store = createStore(
  BookReducer,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
