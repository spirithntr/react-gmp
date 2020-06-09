import React from 'react';
import { SplitLine } from '../SplitLine/SplitLine';
import './SearchSplit.scss';
import { Toggle } from '../Toggle/Toggle';
import { SortTabs } from '../../models/movies';

type Props = {
  sortTab: SortTabs;
  onToggle: any;
  moviesCount: number;
};

export const SearchSplit: React.FunctionComponent<Props> = (props) => (
  <SplitLine>
    <div className="split-line__toggle-container">
      <Toggle
        onToggle={props.onToggle}
        active={props.sortTab}
        criteria="sort"
        left={SortTabs.release}
        right={SortTabs.rating}
      />
      <div className="split-line__found">{props.moviesCount} movies found</div>
    </div>
  </SplitLine>
);
