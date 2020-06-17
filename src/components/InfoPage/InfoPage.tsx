import React from 'react';
import { RouteComponentProps } from 'react-router';
import { InfoPanel } from '../InfoPanel/InfoPanel';
import { InfoSplit } from '../InfoSplit/InfoSplit';
import { Movie, State } from '../../models/movies';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions/actions';

type StateProps = {
  selectedMovie: Movie;
};

type DispatchProps = {
  resetSelectedMovie: () => void;
  fetchMovie: (id: number) => void;
};

type Props = StateProps & DispatchProps & RouteComponentProps;

class BasicInfoPage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    const id = (this.props.match.params as any).id;
    this.props.fetchMovie(Number(id));
  }

  componentDidUpdate(prevProps: Props) {
    const id = (this.props.match.params as any).id;
    const prevId = (prevProps.match.params as any).id;

    if (prevId !== id) {
      this.props.fetchMovie(id);
      console.log('asdasd', (this.props.match.params as any).id);
    }
  }

  render() {
    return this.props.selectedMovie ? (
      <>
        <InfoPanel movie={this.props.selectedMovie} onReset={this.props.resetSelectedMovie} />
        <InfoSplit genre={this.props?.selectedMovie?.genres[0]} />
      </>
    ) :
      (
        <div>Loading</div>
      )
  }
}

const mapStateToProps = (state: State): StateProps => ({
  selectedMovie: state.selectedMovie,
});

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    resetSelectedMovie: () => dispatch(Actions.resetSelectedMovieAction()),
    fetchMovie: (id: number) => dispatch(Actions.getSingleMovieAction(id))
  };
};

export const InfoPage = connect(mapStateToProps, mapDispatchToProps)(BasicInfoPage);
