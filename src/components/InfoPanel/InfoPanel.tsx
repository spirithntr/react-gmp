import React from 'react';
import { Logo } from '../Logo/Logo';
import { TopPanel } from '../TopPanel/TopPanel';
import { Poster } from '../Poster/Poster';
import { data as moviesMock } from '../../../__mocks__/movies.json';
import { Movie } from '../../models/movies';
import { SearchButton } from '../SearchButton/SearchButton';
import './InfoPanel.scss';

const movie = moviesMock[7];

type Props = {
  movie: Movie;
};

export const InfoPanel: React.FunctionComponent = (props) => (
  <TopPanel>
    <div className="infopanel">
      <div className="logo-container">
        <Logo />
        <SearchButton></SearchButton>
      </div>
      <div className="infopanel__container">
        <Poster poster={movie.poster_path} />
        <div className="infopanel__text">
          <div className="infopanel__title-row">
            <h2 className="infopanel__title">{movie.title}</h2>
            <div className="infopanel__vote">{movie.vote_average}</div>
          </div>
          <div className="infopanel__tagline">{movie.tagline}</div>
          <span className="infopanel__digits">{movie.release_date.split('-').shift()}</span>
          <span className="infopanel__digits">{movie.runtime} min</span>
          <div className="infopanel__overview">{movie.overview}</div>
        </div>
      </div>
    </div>
  </TopPanel>
);
