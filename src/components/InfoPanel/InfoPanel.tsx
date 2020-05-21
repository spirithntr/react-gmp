import React from 'react';
import { Logo } from '../Logo/Logo';
import { TopPanel } from '../TopPanel/TopPanel';
import { Poster } from '../Poster/Poster';
import { data as moviesMock } from '../../../__mocks__/movies.json';
import { Movie } from '../../models/movies';
import { SearchButton } from '../SearchButton/SearchButton';
import './InfoPanel.scss';

type Props = {
  movie: Movie;
};

export const InfoPanel: React.FunctionComponent<Props> = (props) => (
  <TopPanel>
    <div className="infopanel">
      <div className="logo-container">
        <Logo />
        <SearchButton></SearchButton>
      </div>
      <div className="infopanel__container">
        <Poster poster={props.movie.poster_path} />
        <div className="infopanel__text">
          <div className="infopanel__title-row">
            <h2 className="infopanel__title">{props.movie.title}</h2>
            <div className="infopanel__vote">{props.movie.vote_average}</div>
          </div>
          <div className="infopanel__tagline">{props.movie.tagline}</div>
          <span className="infopanel__digits">{props.movie.release_date.split('-').shift()}</span>
          <span className="infopanel__digits">{props.movie.runtime} min</span>
          <div className="infopanel__overview">{props.movie.overview}</div>
        </div>
      </div>
    </div>
  </TopPanel>
);
