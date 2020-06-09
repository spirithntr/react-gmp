import * as React from 'react';
import { mount } from 'enzyme';
import { jest } from '@jest/globals';

import { SearchPanel } from './SearchPanel';
import { SearchTabs } from '../../models/movies';

const mockSelectHandler = jest.fn((x) => void 0) as any;

describe('Search panel', () => {
  it('is just a proxy, nothing should be called', () => {
    const component = mount(
      <SearchPanel
        onKeyPress={() => {}}
        onClick={() => {}}
        onChange={() => {}}
        searchTab={SearchTabs.title}
        onToggle={mockSelectHandler}
      />
    );
    component.find('button').simulate('click');
    expect(mockSelectHandler).not.toBeCalled();
  });
});
