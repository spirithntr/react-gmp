import * as React from 'react';
import { mount, shallow, render } from 'enzyme';
import { jest } from '@jest/globals';

import { Poster } from './Poster';


describe('Poster', () => {
    it('should have proper src', () => {
        const component = mount(
            <Poster poster="1.jpg" />
        );
        expect(component.find('img').prop('src')).toEqual('1.jpg');

    });
});
