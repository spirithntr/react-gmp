import { Dispatch } from 'react';
import { getMovies, SearchTerms } from '../../service/movie.service';
import { ThunkAction } from 'redux-thunk';
import { State, SortTabs, SearchTabs } from '../../models/movies';
import { Action } from 'redux';

export enum ACTIONS {
  GET_MOVIES = 'GET_MOVIES',
  GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS',
  GET_MOVIES_REJECT = 'GET_MOVIES_REJECT',
  SWITCH_SEARCH_TAB = 'SWITCH_SEARCH_TAB',
  SWITCH_SORT_TAB = 'SWITCH_SORT_TAB',
  SELECT_MOVIE = 'SELECT_MOVIE',
  CHANGE_SEARCH_INPUT = 'CHANGE_SEARCH_INPUT'
}

export const getMoviesAction = (): ThunkAction<any, State, unknown, Action> => {
  return (dispatch: Dispatch<any>, getState) => {
    const { searchTab, sortTab, selectedMovie, search } = getState();
    let terms: SearchTerms;
    if (selectedMovie) {
      terms = {
        search: selectedMovie.genres[0],
        searchBy: 'genres',
        sortBy: 'release_date'
      }
    } else {
      terms = {
        search,
        sortBy: sortTab === SortTabs.release ? 'release_date' : 'title',
        searchBy: searchTab === SearchTabs.title ? 'title' : 'genres'
      }
    }
    dispatch({ type: ACTIONS.GET_MOVIES });
    getMovies(terms)
      .then(({ data }) => {
        return dispatch({
          type: ACTIONS.GET_MOVIES_SUCCESS,
          payload: {
            movies: data,
          },
        });
      });
  };
};


export const switchSearchTabAction = (searchTab: SearchTabs) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: ACTIONS.SWITCH_SEARCH_TAB, payload: searchTab })
    dispatch(getMoviesAction());
  }
} 