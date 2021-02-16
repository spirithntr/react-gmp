import React from 'react';
import './Movie.scss';
import { Poster } from '../Poster/Poster';

type Props = {
  id: number;
  poster: string;
  title: string;
  genres: string[];
  year: string;
  onSelect: any;
};

export const Movie: React.FunctionComponent<Props> = (props) => {
  const handleClick = (e: React.SyntheticEvent) => {
    props.onSelect(props.id);
  };

  return (
    <div className="movie" onClick={handleClick}>
      <Poster poster={props.poster} />
      <div className="info">
        <div className="info_first-row">
          <div className="title">{props.title}</div>
          <div className="year">{props.year}</div>
        </div>
        <div className="genres">{props.genres.join(', ')}</div>
      </div>
    </div>
  );
};
