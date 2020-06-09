import * as React from 'react';
import { shallow } from 'enzyme';

import { Input } from './Input';

describe('Input', () => {
  it('renders properly', () => {
    const component = shallow(<Input onChange={() => {}} onKeyPress={() => {}} />);
    expect(component.hasClass('input')).toBeTruthy();
    expect(component.getElement().type).toEqual('input');
  });
});
