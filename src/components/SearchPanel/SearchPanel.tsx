import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Logo } from '../Logo/Logo';
import { TopPanel } from '../TopPanel/TopPanel';
import './SearchPanel.scss';

export const SearchPanel: React.FunctionComponent = (props) => (
  <TopPanel>
    <div className="search-container">
      <div className="logo-container">
        <Logo />
      </div>
      <h1>FIND YOUR MOVIE</h1>
      <Input></Input>
      <Button content="search"></Button>
    </div>
  </TopPanel>
);
