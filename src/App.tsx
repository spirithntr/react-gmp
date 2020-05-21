import React from 'react';
import 'App.scss';

import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { MovieList } from './components/MovieList/MovieList';
import { Footer } from './components/Footer/Footer';
import { SearchPanel } from './components/SearchPanel/SearchPanel';
import { InfoPanel } from './components/InfoPanel/InfoPanel';
import { InfoSplit } from './components/InfoSplit/InfoSplit';

import { data as moviesMock } from '../__mocks__/movies.json';
import { SearchSplit } from './components/SearchSplit/SearchSplit';

const movie = moviesMock[7];

export const App = () => (
  <ErrorBoundary>
    <SearchPanel></SearchPanel>
    <SearchSplit />
    <InfoPanel movie={movie} />
    <InfoSplit genre={movie.genres[0]} />
    <MovieList></MovieList>
    <Footer />
  </ErrorBoundary>
);
