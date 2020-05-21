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
import { Movie, SearchTabs, SortTabs } from './models/movies';

const movie = moviesMock[7];

type State = {
  selectedMovie: Movie | null;
  movies: Movie[];
  searchTab: SearchTabs;
  sortTab: SortTabs;
}

export class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      sortTab: SortTabs.rating,
      searchTab: SearchTabs.genre,
      movies: moviesMock,
      selectedMovie: null
    }
  }
  render() {
    return (
      <ErrorBoundary>
        <SearchPanel></SearchPanel>
        <SearchSplit />
        <InfoPanel movie={movie} />
        <InfoSplit genre={movie.genres[0]} />
        <MovieList />
        <Footer />
      </ErrorBoundary>
    )
  }
}
