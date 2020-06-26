import React from 'react';
import ReactDOM, { hydrate } from 'react-dom';

import App from './src/App';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';
import { ErrorBoundary } from './src/components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';

hydrate(
  <App router={BrowserRouter} store={store} />,
  document.getElementById('root')
);
