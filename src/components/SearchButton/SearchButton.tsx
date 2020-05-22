import React from 'react';
import './SearchButton.scss';

type Props = {
  onReset(): void;
}

export const SearchButton = (props: Props) => {
  const handleClick = (e: React.SyntheticEvent) => {
    props.onReset();
  }
  return (
    <div className="icon-container" onClick={handleClick}>
      <div className="search-icon"></div>
    </div>
  );
};
