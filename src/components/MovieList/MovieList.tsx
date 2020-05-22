import React from 'react';
import './MovieList.scss';
import { Movie } from '../Movie/Movie';
import { Movie as IMovie } from '../../models/movies';

import { data as moviesMock } from '../../../__mocks__/movies.json';

type Props = {
  onSelect: any;
  movies: IMovie[];
}



export const MovieList: React.FunctionComponent<Props> = (props) => {
  const makeList = (movies: IMovie[]) => props.movies.map((movie) => (
    <Movie
      id={movie.id}
      genres={movie.genres}
      key={movie.id}
      poster={movie.poster_path}
      title={movie.title}
      year={movie.release_date.split('-').shift()}
      onSelect={props.onSelect}
    />
  ));
  return (<div className="movielist">
    {makeList(props.movies)}
  </div>)
};
