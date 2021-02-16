import * as React from 'react';
import { shallow } from 'enzyme';
import { jest } from '@jest/globals';

import { Movie } from './Movie';

const mockSelectHandler = jest.fn((x) => void 0);

describe('Movie', () => {
  it('should call handler on click', () => {
    const component = shallow(
      <Movie genres={['1', '2']} id={1} year="123" onSelect={mockSelectHandler} poster="asdfasdf" title="testTitle" />
    );
    component.find('.movie').simulate('click');
    expect(mockSelectHandler).toHaveBeenCalled();
  });
});
