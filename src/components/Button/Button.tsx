import React from 'react';
import './Button.scss';

type Props = {
  content: string;
  onClick: () => void;
};

export const Button = (props: Props) => {
  return (
    <button onClick={props.onClick} className="button">
      {props.content}
    </button>
  );
};
