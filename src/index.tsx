import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import store from 'app/store';
import Amplify from 'aws-amplify'; // <--- 追加
import { Provider } from 'react-redux';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import config from './aws-exports';
// <--- 追加
Amplify.configure(config); // <--- 追加

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
