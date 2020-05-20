import React from 'react';
import 'App.scss';

import { CreatedElement } from './createElement';
import { Welcome } from './component';
import { PureWelcome } from './pureComponent';

export const App = () => (
  <>
    <h1 className="container">Hello world!</h1>
    {CreatedElement}
    <Welcome />
    <PureWelcome />
  </>
);
