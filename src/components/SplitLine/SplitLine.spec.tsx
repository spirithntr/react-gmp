import * as React from 'react';
import { shallow, render } from 'enzyme';
import { jest } from '@jest/globals';

import { SortTabs } from '../../models/movies';
import { SplitLine } from './SplitLine';

const mockSelectHandler = jest.fn((x) => void 0) as any;

describe('SplitLine', () => {
    it('has appropriate class', () => {
        const component = shallow(
            <SplitLine />
        );
        expect(component.hasClass('split-line')).toBeTruthy()

    });
});
