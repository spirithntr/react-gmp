import React from 'react';
import { SplitLine } from '../SplitLine/SplitLine';
import './SearchSplit.scss';
import { Toggle } from '../Toggle/Toggle';

export const SearchSplit: React.FunctionComponent = () => (
  <SplitLine>
    <div className="split-line__toggle-container">
      <Toggle criteria="sort" left="release date" right="rating" />
      <div className="split-line__found">7 movies found</div>
    </div>
  </SplitLine>
);
