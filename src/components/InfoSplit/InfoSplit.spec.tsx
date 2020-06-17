import * as React from 'react';
import { mount } from 'enzyme';

import { InfoSplit } from './InfoSplit';

describe('InfoSplit', () => {
  it('renders the props correctly', () => {
    const result = mount(<InfoSplit genre="test" />).containsMatchingElement(
      <div className="split-line__genre">Films by test Genre</div>
    );
    expect(result).toBeTruthy();
  });
});
