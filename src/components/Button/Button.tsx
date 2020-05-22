import React from 'react';
import './Button.scss';

export const Button = (props: any) => {
  return <button className="button">{props.content}</button>;
};
