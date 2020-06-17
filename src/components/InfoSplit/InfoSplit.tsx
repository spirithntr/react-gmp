import React from 'react';
import { SplitLine } from '../SplitLine/SplitLine';
import './InfoSplit.scss';

type Props = {
  genre: string;
};

export const InfoSplit: React.FunctionComponent<Props> = (props) => (
  <SplitLine>
    <div className="split-line__genre-container">
      <div className="split-line__genre">Films by {props.genre} Genre</div>
    </div>
  </SplitLine>
);
