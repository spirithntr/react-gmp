import React from 'react';
import 'App.scss';
import { MovieList } from './components/MovieList/MovieList';
import { Footer } from './components/Footer/Footer';
import { InfoPage } from './components/InfoPage/InfoPage';
import { Movie, SearchTabs, SortTabs, State } from './models/movies';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as Actions from './store/actions/actions';
import { SearchPage } from './components/SearchPage/SearchPage';

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
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/search/:query" component={SearchPage} />
          <Route path="/search/:query?" component={SearchPage} />
          <Route path="/movie/:id" component={InfoPage} />
          <Redirect from="/" to="/search" />
        </Switch>
        <MovieList movies={this.props.movies} onSelect={this.handleMovieSelect} />
        <Footer />
      </Router>
    );
  }

  public handleMovieSelect(id: number) {
    const selectedMovie = this.props.movies.find((movie) => movie.id === id);
    if (selectedMovie) {
      this.props.selectMovie(selectedMovie);
    }
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
