import * as React from 'react';
import { shallow } from 'enzyme';

import { Logo } from './Logo';

describe('Logo', () => {
  it('renders properly', () => {
    const component = shallow(<Logo />);
    expect(component.hasClass('Logo')).toBeTruthy();
    expect(component.contains('netflix')).toBeTruthy();
  });
});
