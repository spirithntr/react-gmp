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

    this.handleMovieSelect = this.handleMovieSelect.bind(this);
    this.handleMovieReset = this.handleMovieReset.bind(this);

  }
  render() {
    return (
      <ErrorBoundary>
        {this.state.selectedMovie
          ? <InfoPanel movie={this.state.selectedMovie} onReset={this.handleMovieReset} />
          : <SearchPanel></SearchPanel>
        }
        {this.state.selectedMovie
          ? <InfoSplit genre={this.state.selectedMovie.genres[0]} />
          : <SearchSplit />
        }
        <MovieList movies={this.state.movies} onSelect={this.handleMovieSelect} />
        <Footer />
      </ErrorBoundary>
    )
  }

  public handleMovieSelect(id: number) {
    const selectedMovie = this.state.movies.find((movie) => movie.id === id);
    if (selectedMovie) {
      this.setState({ selectedMovie });
    }
  }

  public handleMovieReset() {
    this.setState({ selectedMovie: null });
  }
}
