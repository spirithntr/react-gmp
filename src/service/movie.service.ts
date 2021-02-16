import { MovieResponse } from '../models/movies';

const API_URL = 'https://reactjs-cdp.herokuapp.com/movies';

export type SearchTerms = {
  search?: string;
  searchBy?: 'genres' | 'title';
  sortBy?: 'release_date' | 'vote_average';
};

export const getMovies = (terms: SearchTerms): Promise<MovieResponse> => {
  const urlParams = new URLSearchParams(Object.entries(terms));

  return fetch(`${API_URL}?${urlParams}`).then((response) => response.json());
};
