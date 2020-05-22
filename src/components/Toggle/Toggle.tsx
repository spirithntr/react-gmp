import React from 'react';
import './Toggle.scss';

type Props = {
  criteria: string;
  left: string;
  right: string;
  active: string;
  onToggle: any;
};

export const Toggle: React.FunctionComponent<Props> = (props) => {
  const handleLeft = () => {
    props.onToggle(props.left);
  }

  const handleRight = () => {
    props.onToggle(props.right);
  }

  const isLeftSelected = props.left === props.active;
  return (
    <div className="toggle">
      <span className="toggle__criteria">{props.criteria.toUpperCase()} BY</span>
      <div className="toggle__buttons">
        <div onClick={handleLeft} className={`toggle__button toggle__button_left ${isLeftSelected ? "toggle__button_selected" : ""}`}>{props.left.toUpperCase()}</div>
        <div onClick={handleRight} className={`toggle__button toggle__button_right ${isLeftSelected ? "" : "toggle__button_selected"}`}>{props.right.toUpperCase()}</div>
      </div>
    </div>
  )
}
