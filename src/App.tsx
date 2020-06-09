import React from 'react';
import 'App.scss';

import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { MovieList } from './components/MovieList/MovieList';
import { Footer } from './components/Footer/Footer';
import { SearchPanel } from './components/SearchPanel/SearchPanel';
import { InfoPanel } from './components/InfoPanel/InfoPanel';
import { InfoSplit } from './components/InfoSplit/InfoSplit';

import { SearchSplit } from './components/SearchSplit/SearchSplit';
import { Movie, SearchTabs, SortTabs, State } from './models/movies';
import { connect } from 'react-redux';
import * as Actions from './store/actions/actions';
import { Store } from 'redux';

type Props = {
  getMovies: () => void;
  switchSearchTab: (a: SearchTabs) => void;
  switchSortTab: (a: SortTabs) => void;
  selectMovie: (a: Movie) => void;
  resetSelectedMovie: () => void;
  store: Store;
  movies: Movie[];
  sortTab: SortTabs;
  selectedMovie: Movie;
  searchTab: SearchTabs;
};

export class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      search: '',
      sortTab: SortTabs.release,
      searchTab: SearchTabs.title,
      movies: [],
      selectedMovie: null,
    };

    this.handleMovieSelect = this.handleMovieSelect.bind(this);
    this.handleMovieReset = this.handleMovieReset.bind(this);
    this.handleToggleSort = this.handleToggleSort.bind(this);
    this.handleToggleSearch = this.handleToggleSearch.bind(this);
    this.selectSortingAlgorithm = this.selectSortingAlgorithm.bind(this);
  }

  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const sortedMovies = this.props.movies;
    return (
      <ErrorBoundary>
        {this.props.selectedMovie ? (
          <InfoPanel movie={this.props.selectedMovie} onReset={this.handleMovieReset} />
        ) : (
          <SearchPanel searchTab={this.props.searchTab} onToggle={this.handleToggleSearch}></SearchPanel>
        )}
        {this.props.selectedMovie ? (
          <InfoSplit genre={this.props.selectedMovie.genres[0]} />
        ) : (
          <SearchSplit
            moviesCount={this.props.movies.length}
            sortTab={this.props.sortTab}
            onToggle={this.handleToggleSort}
          />
        )}
        <MovieList movies={sortedMovies} onSelect={this.handleMovieSelect} />
        <Footer />
      </ErrorBoundary>
    );
  }

  public handleMovieSelect(id: number) {
    const selectedMovie = this.props.movies.find((movie) => movie.id === id);
    if (selectedMovie) {
      this.props.selectMovie(selectedMovie);
    }
  }

  public handleMovieReset() {
    this.props.resetSelectedMovie();
  }

  public handleToggleSort(sortTab: SortTabs) {
    this.props.switchSortTab(sortTab);
  }

  public handleToggleSearch(searchTab: SearchTabs) {
    this.props.switchSearchTab(searchTab);
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

const mapStateToProps = (state: State) => ({
  movies: state.movies,
  sortTab: state.sortTab,
  selectedMovie: state.selectedMovie,
  searchTab: state.searchTab,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getMovies: () => dispatch(Actions.getMoviesAction()),
    switchSearchTab: (searchTab: SearchTabs) => dispatch(Actions.switchSearchTabAction(searchTab)),
    switchSortTab: (sortTab: SortTabs) => dispatch(Actions.switchSortTabAction(sortTab)),
    selectMovie: (movie: Movie) => dispatch(Actions.selectMovieAction(movie)),
    resetSelectedMovie: () => dispatch(Actions.resetSelectedMovieAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
