import * as React from 'react';
import { shallow } from 'enzyme';
import { jest } from '@jest/globals';
import { match } from 'react-router';
import { Movie } from './Movie';
import { createHistoryProps } from '../../__tests__/history.utils';


const { location, match, history } = createHistoryProps();

const mockSelectHandler = jest.fn((x) => void 0);

describe('Movie', () => {
  it('should call handler on click', () => {
    const component = shallow(
      <Movie
        history={history}
        location={location}
        match={match}
        genres={['1', '2']}
        id={1}
        year="123"
        onSelect={mockSelectHandler}
        poster="asdfasdf"
        title="testTitle"
      />
    );
    component.find('.movie').simulate('click');
    expect(mockSelectHandler).toHaveBeenCalled();
  });
});
