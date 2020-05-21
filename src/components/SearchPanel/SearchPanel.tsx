import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Logo } from '../Logo/Logo';
import { TopPanel } from '../TopPanel/TopPanel';
import './SearchPanel.scss';
import { Toggle } from '../Toggle/Toggle';

export const SearchPanel: React.FunctionComponent = (props) => (
  <TopPanel>
    <div className="search-container">
      <div className="logo-container">
        <Logo />
      </div>
      <h1>FIND YOUR MOVIE</h1>
      <div className="search-panel__row">
        <Input></Input>
        <Button content="search"></Button>
      </div>
      <Toggle criteria="search" left="title" right="genre"></Toggle>
    </div>
  </TopPanel>
);
