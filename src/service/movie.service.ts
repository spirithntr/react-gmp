import { Movie, MoviesResponse } from '../models/movies';

const API_URL = 'https://reactjs-cdp.herokuapp.com/movies';

export type SearchTerms = {
  search?: string;
  searchBy?: 'genres' | 'title';
  sortBy?: 'release_date' | 'vote_average';
};

export const getMovies = (terms: SearchTerms): Promise<MoviesResponse> => {
  const urlParams = new URLSearchParams(Object.entries(terms));

  return fetch(`${API_URL}?${urlParams}`).then((response) => response.json());
};

export const getMovie = (id: number): Promise<Movie> => {
  return fetch(`${API_URL}/${id}`).then((response) => response.json());
}
