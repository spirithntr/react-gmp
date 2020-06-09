import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Logo } from '../Logo/Logo';
import { TopPanel } from '../TopPanel/TopPanel';
import './SearchPanel.scss';
import { Toggle } from '../Toggle/Toggle';
import { SearchTabs } from '../../models/movies';

type Props = {
  searchTab: SearchTabs;
  onToggle: any;
  onChange: (i: string) => void;
  onClick: () => void;
  onKeyPress: () => void;
};

export const SearchPanel: React.FunctionComponent<Props> = (props) => (
  <TopPanel>
    <div className="search-container">
      <div className="logo-container">
        <Logo />
      </div>
      <h1>FIND YOUR MOVIE</h1>
      <div className="search-panel__row">
        <Input onKeyPress={props.onKeyPress} onChange={props.onChange}></Input>
        <Button onClick={props.onClick} content="search"></Button>
      </div>
      <Toggle
        onToggle={props.onToggle}
        active={props.searchTab}
        criteria="search"
        left={SearchTabs.title}
        right={SearchTabs.genre}
      ></Toggle>
    </div>
  </TopPanel>
);
