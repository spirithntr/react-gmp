import React from 'react';
import './Movie.scss';
import { Poster } from '../Poster/Poster';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

type BasicProps = {
  id: number;
  poster: string;
  title: string;
  genres: string[];
  year: string;
  onSelect: any;
};

type Props = RouteComponentProps & BasicProps;

export const BasicMovie: React.FunctionComponent<Props> = (props) => {
  const handleClick = (e: React.SyntheticEvent) => {
    props.onSelect(props.id);
    props.history.push(`/movie/${props.id}`)
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

export const Movie = withRouter(BasicMovie);
