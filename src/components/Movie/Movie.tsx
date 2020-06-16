import React from 'react';
import './Movie.scss';
import { Poster } from '../Poster/Poster';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

type Props = {
  id: number;
  poster: string;
  title: string;
  genres: string[];
  year: string;
  onSelect: any;
};

type PropsType = RouteComponentProps & Props;

export const Movie: React.FunctionComponent<PropsType> = (props) => {
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

export default withRouter(Movie);
