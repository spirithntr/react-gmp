import React from 'react';
import { Logo } from '../Logo/Logo';
import './TopPanel.scss';
import { Input } from '../Input/Input';
import { SearchButton } from '../SearchButton/SearchButton';
import { Button } from '../Button/Button';

// export const TopPanel: React.FunctionComponent = () => (
//   <div className="top-panel">
//     <div className="blur">
//       <div className="logo-container">
//         <Logo />
//         <SearchButton></SearchButton>
//       </div>
//       <h1>FIND YOUR MOVIE</h1>
//       <Input></Input>
//       <Button content="search"></Button>
//     </div>
//   </div>
// );

export const TopPanel: React.FunctionComponent = (props) => (
  <div className="top-panel">
    <div className="blur">{props.children}</div>
  </div>
);
