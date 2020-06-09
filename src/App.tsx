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

type StateProps = {
  movies: Movie[];
  sortTab: SortTabs;
  selectedMovie: Movie;
  searchTab: SearchTabs;
};

type DispatchProps = {
  getMovies: () => void;
  switchSearchTab: (a: SearchTabs) => void;
  switchSortTab: (a: SortTabs) => void;
  selectMovie: (a: Movie) => void;
  resetSelectedMovie: () => void;
  changeInput: (a: string) => void;
};

type Props = StateProps & DispatchProps;

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
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <ErrorBoundary>
        {this.props.selectedMovie ? (
          <>
            <InfoPanel movie={this.props.selectedMovie} onReset={this.handleMovieReset} />
            <InfoSplit genre={this.props.selectedMovie.genres[0]} />
          </>
        ) : (
          <>
            <SearchPanel
              onKeyPress={this.props.getMovies}
              onChange={this.handleSearchInput}
              searchTab={this.props.searchTab}
              onToggle={this.handleToggleSearch}
              onClick={this.props.getMovies}
            ></SearchPanel>
            <SearchSplit
              moviesCount={this.props.movies.length}
              sortTab={this.props.sortTab}
              onToggle={this.handleToggleSort}
            />
          </>
        )}
        <MovieList movies={this.props.movies} onSelect={this.handleMovieSelect} />
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

  public handleSearchInput(input: string) {
    this.props.changeInput(input);
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

const mapStateToProps = (state: State): StateProps => ({
  movies: state.movies,
  sortTab: state.sortTab,
  selectedMovie: state.selectedMovie,
  searchTab: state.searchTab,
});

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    getMovies: () => dispatch(Actions.getMoviesAction()),
    switchSearchTab: (searchTab: SearchTabs) => dispatch(Actions.switchSearchTabAction(searchTab)),
    switchSortTab: (sortTab: SortTabs) => dispatch(Actions.switchSortTabAction(sortTab)),
    selectMovie: (movie: Movie) => dispatch(Actions.selectMovieAction(movie)),
    resetSelectedMovie: () => dispatch(Actions.resetSelectedMovieAction()),
    changeInput: (input: string) => dispatch(Actions.changeSearchInputAction(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
