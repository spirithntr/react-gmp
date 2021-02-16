import * as React from 'react';
import { shallow, render } from 'enzyme';
import { jest } from '@jest/globals';

import { TopPanel } from './TopPanel';

const mockSelectHandler = jest.fn((x) => void 0) as any;

describe('TopPanel', () => {
    it('should have blurred background', () => {
        const component = render(
            <TopPanel />
        );
        expect(component.find('.blue')).toBeTruthy();

    });
});
