import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { movies } from './reducers/movies.reducer';
import { State } from '../models/movies';

declare global {
    interface Window { __PRELOADED_STATE__: State }
}

let state: State = {
    "movies": [], "searchTab": 'TITLE', "sortTab": "RELEASE DATE", "selectedMovie": null, "search": ""
} as State;
if (typeof window !== 'undefined') {
    state = window.__PRELOADED_STATE__ as any;
    delete window.__PRELOADED_STATE__;
}

export default createStore(movies, state as State, applyMiddleware(thunk));

