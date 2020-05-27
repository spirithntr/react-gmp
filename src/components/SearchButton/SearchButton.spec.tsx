import * as React from 'react';
import { shallow } from 'enzyme';
import { jest } from '@jest/globals';

import { SearchButton } from './SearchButton';

const mockSelectHandler = jest.fn((x) => void 0) as any;

describe('SearchButton', () => {
  it('should call handler on click', () => {
    const component = shallow(
      <SearchButton onReset={mockSelectHandler} />
    );
    component.find('.icon-container').simulate('click');
    expect(mockSelectHandler).toHaveBeenCalled();
  });
});
