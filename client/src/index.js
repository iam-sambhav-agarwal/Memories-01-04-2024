import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import './index.css';
import ReactDOM from 'react-dom';
import reducers from './reducers';

import App from './App';

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  });

ReactDOM.render(
<Provider store={store}>
<App />
  </ Provider>,document.getElementById('root'));
