import React from 'react';
import './App.scss';
import { MovieList } from './components/MovieList/MovieList';
import { Footer } from './components/Footer/Footer';
import { InfoPage } from './components/InfoPage/InfoPage';
import { Movie, State } from './models/movies';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect, StaticRouter, BrowserRouter } from 'react-router-dom';
import * as Actions from './store/actions/actions';
import { SearchPage } from './components/SearchPage/SearchPage';
import { NotFound } from './components/NotFound/NotFound';
import { Store } from 'redux';

type StateProps = {
  movies?: Movie[];
};

type DispatchProps = {
  selectMovie?: (a: Movie) => void;
};

type BasicProps = {
  router: any;
  store: any;
}

type Props = BasicProps & StateProps & DispatchProps;

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.handleMovieSelect = this.handleMovieSelect.bind(this);
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <this.props.router>
          <Switch>
            <Route path="/search/:query?" component={SearchPage} />
            <Route path="/movie/:id" component={InfoPage} />
            <Redirect exact from="/" to="/search" />
            <Route component={NotFound} />
          </Switch>
          <Route path={["/search/:query?", "/movie/:id"]}>
            <MovieList movies={this.props.movies} onSelect={this.handleMovieSelect} />
            <Footer />
          </Route>
        </this.props.router>
      </Provider>
    );
  }

  public handleMovieSelect(id: number) {
    const selectedMovie = this.props.movies.find((movie) => movie.id === id);
    if (selectedMovie) {
      this.props.selectMovie(selectedMovie);
      window.scrollTo(0, 0);
    }
  }
}

const mapStateToProps = (state: State): StateProps => ({
  movies: state.movies,
});

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    selectMovie: (movie: Movie) => dispatch(Actions.selectMovieAction(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
