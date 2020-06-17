import React from 'react';
import { RouteComponentProps } from 'react-router';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import { SearchSplit } from '../SearchSplit/SearchSplit';
import { Movie, SortTabs, SearchTabs, State } from '../../models/movies';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions/actions';

type StateProps = {
  movies: Movie[];
  sortTab: SortTabs;
  searchTab: SearchTabs;
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
  }

  componentDidMount() {
    const query = (this.props.match.params as any).query;
    if (query) {
      this.props.changeInput(query);
    }
    this.props.getMovies()
  }

  render() {
    return (
      <>
        <SearchPanel
          onKeyPress={this.props.getMovies}
          onChange={this.props.changeInput}
          searchTab={this.props.searchTab}
          onToggle={this.props.switchSearchTab}
          onClick={this.props.getMovies}
        ></SearchPanel>
        <SearchSplit
          moviesCount={this.props.movies.length}
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
});

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    getMovies: () => dispatch(Actions.getMoviesAction()),
    switchSearchTab: (searchTab: SearchTabs) => dispatch(Actions.switchSearchTabAction(searchTab)),
    switchSortTab: (sortTab: SortTabs) => dispatch(Actions.switchSortTabAction(sortTab)),
    resetSelectedMovie: () => dispatch(Actions.resetSelectedMovieAction()),
    changeInput: (input: string) => dispatch(Actions.changeSearchInputAction(input)),
  };
};

export const SearchPage = connect(mapStateToProps, mapDispatchToProps)(BasicSearchPage);
