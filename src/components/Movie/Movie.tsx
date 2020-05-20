import React from 'react';
import './styles.scss';

type Props = {
  poster: string;
  title: string;
  genres: string[];
  year: string;
};

export const Movie: React.FunctionComponent<Props> = (props) => (
  <div className="movie">
    <img src={props.poster} />
    <div className="info">
      <div className="info_first-row">
        <div className="title">{props.title}</div>
        <div className="year">{props.year}</div>
      </div>
      <div className="genres">{props.genres}</div>
    </div>
  </div>
);
