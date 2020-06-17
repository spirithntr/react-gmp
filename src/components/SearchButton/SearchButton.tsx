import React from 'react';
import './SearchButton.scss';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

type BasicProps = {
  onReset(): void;
}

type Props = RouteComponentProps & BasicProps;

const BasicSearchButton = (props: Props) => {
  const handleClick = (e: React.SyntheticEvent) => {
    props.onReset();
    props.history.push('/search');
  }
  return (
    <div className="icon-container" onClick={handleClick}>
      <div className="search-icon"></div>
    </div>
  );
};

export const SearchButton = withRouter(BasicSearchButton);
