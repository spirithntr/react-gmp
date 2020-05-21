import React from 'react';
import './Toggle.scss';

type Props = {
  criteria: string;
  left: string;
  right: string;
};

export const Toggle: React.FunctionComponent<Props> = (props) => (
  <div className="toggle">
    <span className="toggle__criteria">{props.criteria.toUpperCase()} BY</span>
    <div className="toggle__buttons">
      <div className="toggle__button toggle__button_left toggle__button_selected">{props.left.toUpperCase()}</div>
      <div className="toggle__button toggle__button_right">{props.right.toUpperCase()}</div>
    </div>
  </div>
);
