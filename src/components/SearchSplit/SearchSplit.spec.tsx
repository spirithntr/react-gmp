import * as React from 'react';
import { shallow, render } from 'enzyme';
import { jest } from '@jest/globals';

import { SearchSplit } from './SearchSplit';
import { SortTabs } from '../../models/movies';

const mockSelectHandler = jest.fn((x) => void 0) as any;

describe('SearchSplit', () => {
    it('should call handler on click', () => {
        const component = render(
            <SearchSplit onToggle={mockSelectHandler} sortTab={SortTabs.rating} />
        );
        expect(component.find('.split-line__found').text()).toEqual('7 movies found');

    });
});
