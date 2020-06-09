import * as React from 'react';
import { shallow } from 'enzyme';

import { Button } from './Button';

it('renders the heading', () => {
  const testName = 'someName';
  const result = shallow(<Button onClick={() => {}} content={testName} />).containsMatchingElement(
    <button className="button">someName</button>
  );
  expect(result).toBeTruthy();
});
