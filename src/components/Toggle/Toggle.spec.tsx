import * as React from 'react';
import { shallow, render, mount } from 'enzyme';
import { jest } from '@jest/globals';

import { SortTabs } from '../../models/movies';
import { Toggle } from './Toggle';

const mockSelectHandler = jest.fn((x) => void 0) as any;

describe('Toggle', () => {
    it('should be called twice', () => {
        const component = mount(
            <Toggle onToggle={mockSelectHandler} left="left" right="right" active="left" criteria="test" />
        );
        component.find('.toggle__button_left').simulate('click');
        expect(mockSelectHandler).toHaveBeenCalledWith('left')
        component.find('.toggle__button_right').simulate('click');
        expect(mockSelectHandler).toHaveBeenCalledWith('right')

        expect(mockSelectHandler).toHaveBeenCalledTimes(2);

    });
});
