import React from 'react';
import './Movie.scss';

type Props = {
  poster: string;
  title: string;
  genres: string[];
  year: string;
};

export const Movie: React.FunctionComponent<Props> = (props) => (
  <div className="movie">
    <img
      src={props.poster}
      onError={(e) => {
        const img = e.target as HTMLImageElement;
        img.src = 'src/assets/grey_x.png';
        img.onerror = null;
      }}
    />
    <div className="info">
      <div className="info_first-row">
        <div className="title">{props.title}</div>
        <div className="year">{props.year}</div>
      </div>
      <div className="genres">{props.genres}</div>
    </div>
  </div>
);
