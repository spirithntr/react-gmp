import * as React from 'react';
import { render, mount } from 'enzyme';
import { jest } from '@jest/globals';

import { MovieList } from './MovieList';
import { data as moviesMock } from '../../../__mocks__/movies.json';

const mockSelectHandler = jest.fn((x) => void 0);

describe('MovieList', () => {
  it('should call handler on click', () => {
    const component = mount(<MovieList movies={moviesMock} onSelect={mockSelectHandler} />);
    expect(component.find('.movie')).toHaveLength(10);
  });
});
