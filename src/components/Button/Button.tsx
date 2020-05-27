import React from 'react';
import './Button.scss';

type Props = {
  content: string;
};

export const Button = (props: Props) => {
  return <button className="button">{props.content}</button>;
};
