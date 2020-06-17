import React from 'react';
import ReactDOM from 'react-dom';

import App from './src/App';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { ErrorBoundary } from './src/components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
