import { Dispatch } from 'react';

export enum ACTIONS {
  GET_MOVIES = 'GET_MOVIES',
  GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS',
  GET_MOVIES_REJECT = 'GET_MOVIES_REJECT',
}

const apiUrl = 'https://reactjs-cdp.herokuapp.com/movies';

export const getMoviesAction = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: ACTIONS.GET_MOVIES });
    fetch(apiUrl)
      .then((response) => response.json())
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
