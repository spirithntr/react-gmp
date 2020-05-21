import React from 'react';
import './TopPanel.scss';

export const TopPanel: React.FunctionComponent = (props) => (
  <div className="top-panel">
    <div className="blur">{props.children}</div>
  </div>
);
