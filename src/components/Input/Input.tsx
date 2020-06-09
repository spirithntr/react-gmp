import React from 'react';
import './Input.scss';

type Props = {
  onChange: (input: string) => void;
  onKeyPress: () => void;
};

export const Input = (props: Props) => {
  const handleChange = (e: any) => {
    props.onChange(e.target.value);
  };
  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      props.onKeyPress();
    }
  };
  return <input onKeyPress={handleKeyPress} onChange={handleChange} placeholder="Search" className="input" />;
};
