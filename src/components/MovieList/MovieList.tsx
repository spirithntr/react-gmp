import React from 'react';
import './MovieList.scss';
import { Movie } from '../Movie/Movie';

import { data as moviesMock } from '../../../__mocks__/movies.json';

const movies = moviesMock.map((movie) => (
  <Movie
    key={movie.id}
    poster={movie.poster_path}
    title={movie.title}
    year={movie.release_date.split('-').shift()}
    genres={movie.genres}
  />
));

export const MovieList: React.FunctionComponent<any> = (props) => <div className="movielist">{movies}</div>;
