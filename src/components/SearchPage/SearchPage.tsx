import React from 'react';
import { RouteComponentProps } from 'react-router';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import { SearchSplit } from '../SearchSplit/SearchSplit';
import { Movie, SortTabs, SearchTabs, State } from '../../models/movies';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions/actions';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

type StateProps = {
  movies: Movie[];
  sortTab: SortTabs;
  searchTab: SearchTabs;
  search: string;
};

type DispatchProps = {
  getMovies: () => void;
  switchSearchTab: (a: SearchTabs) => void;
  switchSortTab: (a: SortTabs) => void;
  resetSelectedMovie: () => void;
  changeInput: (a: string) => void;
};

type Props = StateProps & DispatchProps & RouteComponentProps;

class BasicSearchPage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.searchMovies = this.searchMovies.bind(this);
  }

  componentDidMount() {
    const query = (this.props.match.params as any).query;
    if (query) {
      this.props.changeInput(query);
    }
    this.props.getMovies();
  }

  componentDidUpdate(prevProps: Props) {
    const query = (this.props.match.params as any).query;
    const prevQuery = (prevProps.match.params as any).query
    if (query !== prevQuery) {
      this.props.getMovies();
    }
  }

  private searchMovies() {
    this.props.history.push(`/search/${this.props.search}`)
  }

  render() {
    return (
      <>
        <SearchPanel
          onKeyPress={this.searchMovies}
          onChange={this.props.changeInput}
          searchTab={this.props.searchTab}
          onToggle={this.props.switchSearchTab}
          onClick={this.searchMovies}
        ></SearchPanel>
        <SearchSplit
          moviesCount={this.props?.movies?.length || 0}
          sortTab={this.props.sortTab}
          onToggle={this.props.switchSortTab}
        ></SearchSplit>
      </>
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  movies: state.movies,
  sortTab: state.sortTab,
  searchTab: state.searchTab,
  search: state.search,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<State, any, Action>): DispatchProps => {
  return {
    getMovies: () => dispatch(Actions.getMoviesAction()),
    switchSearchTab: (searchTab: SearchTabs) => dispatch(Actions.switchSearchTabAction(searchTab)),
    switchSortTab: (sortTab: SortTabs) => dispatch(Actions.switchSortTabAction(sortTab)),
    resetSelectedMovie: () => dispatch(Actions.resetSelectedMovieAction()),
    changeInput: (input: string) => dispatch(Actions.changeSearchInputAction(input)),
  };
};

export const SearchPage = connect(mapStateToProps, mapDispatchToProps)(BasicSearchPage);
