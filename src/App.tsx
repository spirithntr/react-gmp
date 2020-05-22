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
      sortTab: SortTabs.release,
      searchTab: SearchTabs.title,
      movies: moviesMock,
      selectedMovie: null
    }

    this.handleMovieSelect = this.handleMovieSelect.bind(this);
    this.handleMovieReset = this.handleMovieReset.bind(this);
    this.handleToggleSort = this.handleToggleSort.bind(this);
    this.handleToggleSearch = this.handleToggleSearch.bind(this);
    this.selectSortingAlgorithm = this.selectSortingAlgorithm.bind(this);


  }
  render() {
    const sortedMovies = ([].concat(this.state.movies) as Movie[]).sort(this.selectSortingAlgorithm)
    return (
      <ErrorBoundary>
        {this.state.selectedMovie
          ? <InfoPanel movie={this.state.selectedMovie} onReset={this.handleMovieReset} />
          : <SearchPanel searchTab={this.state.searchTab} onToggle={this.handleToggleSearch}></SearchPanel>
        }
        {this.state.selectedMovie
          ? <InfoSplit genre={this.state.selectedMovie.genres[0]} />
          : <SearchSplit sortTab={this.state.sortTab} onToggle={this.handleToggleSort} />
        }
        <MovieList movies={sortedMovies} onSelect={this.handleMovieSelect} />
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

  public handleToggleSort(sortTab: SortTabs) {
    this.setState({ sortTab });
  }

  public handleToggleSearch(searchTab: SearchTabs) {
    this.setState({ searchTab });
  }

  private sortByDate(first: Movie, second: Movie) {
    return first.release_date < second.release_date ? 1 : -1;
  }

  private sortByRating(first: Movie, second: Movie) {
    return first.vote_average < second.vote_average ? 1 : -1;
  }
  private selectSortingAlgorithm(a: Movie, b: Movie) {
    return this.state.sortTab === SortTabs.rating ? this.sortByRating(a, b) : this.sortByDate(a, b);
  }
}
