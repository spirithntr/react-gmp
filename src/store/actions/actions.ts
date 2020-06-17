import { Dispatch } from 'react';
import { getMovies, SearchTerms, getMovie } from '../../service/movie.service';
import { ThunkAction } from 'redux-thunk';
import { State, SortTabs, SearchTabs, Movie } from '../../models/movies';
import { Action, ActionCreator } from 'redux';

export enum ACTIONS {
  GET_MOVIE = 'GET_MOVIE',
  GET_MOVIES = 'GET_MOVIES',
  GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS',
  GET_MOVIES_REJECT = 'GET_MOVIES_REJECT',
  SWITCH_SEARCH_TAB = 'SWITCH_SEARCH_TAB',
  SWITCH_SORT_TAB = 'SWITCH_SORT_TAB',
  SELECT_MOVIE = 'SELECT_MOVIE',
  CHANGE_SEARCH_INPUT = 'CHANGE_SEARCH_INPUT',
  RESET_SELECTED_MOVIE = 'RESET_SELECTED_MOVIE',
}

export const getMoviesAction = (): ThunkAction<any, State, unknown, Action> => {
  return (dispatch: Dispatch<any>, getState) => {
    const { searchTab, sortTab, selectedMovie, search } = getState();
    let terms: SearchTerms;
    if (selectedMovie) {
      terms = {
        search: selectedMovie.genres[0],
        searchBy: 'genres',
        sortBy: 'release_date',
      };
    } else {
      terms = {
        search,
        sortBy: sortTab === SortTabs.release ? 'release_date' : 'vote_average',
        searchBy: searchTab === SearchTabs.title ? 'title' : 'genres',
      };
    }
    dispatch({ type: ACTIONS.GET_MOVIES });
    getMovies(terms).then(({ data }) => {
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
    dispatch({ type: ACTIONS.SWITCH_SEARCH_TAB, payload: searchTab });
    dispatch(getMoviesAction());
  };
};

export const switchSortTabAction = (sortTab: SortTabs) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: ACTIONS.SWITCH_SORT_TAB, payload: sortTab });
    dispatch(getMoviesAction());
  };
};

export const selectMovieAction = (movie: Movie) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: ACTIONS.SELECT_MOVIE, payload: movie });
  };
};

export const resetSelectedMovieAction = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: ACTIONS.RESET_SELECTED_MOVIE });
    dispatch(getMoviesAction());
  };
};

export const changeSearchInputAction = (input: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: ACTIONS.CHANGE_SEARCH_INPUT, payload: input });
  };
};

export const getSingleMovieAction = (id: number) => {
  return (dispatch: Dispatch<any>) => {
    getMovie(id).then((movie) => {
      return dispatch({
        type: ACTIONS.GET_MOVIE,
        payload: movie,
      });
    }).then(() => {
      dispatch(getMoviesAction())
    })
  };
};
