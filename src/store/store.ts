import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { movies } from './reducers/movies.reducer';

export default createStore(movies, applyMiddleware(thunk, logger));
