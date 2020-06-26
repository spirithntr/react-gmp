import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { movies } from './reducers/movies.reducer';

declare global {
    interface Window { __PRELOADED_STATE__:  }
}
let state = {}
if(typeof window !== 'undefined') {
    state = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
}

export default createStore(movies, applyMiddleware(thunk, logger));

