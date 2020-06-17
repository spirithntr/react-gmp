import * as React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Logo } from './Logo';

describe('Logo', () => {
  it('renders properly', () => {
    const component = shallow(<Logo />);
    expect(component.hasClass('Logo')).toBeTruthy();
    expect(component.contains('netflix')).toBeTruthy();
  });
  it('should match snapshot', () => {
    const component = renderer.create(<Logo />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
