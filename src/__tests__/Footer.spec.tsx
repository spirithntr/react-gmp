import * as React from 'react';
import { mount } from 'enzyme';

import { Footer } from '../components/Footer/Footer';

describe('Footer', () => {
  it('renders the Logo', () => {
    const result = mount(<Footer />).containsMatchingElement(
      <div className="Logo">
        <strong>netflix</strong>roulette
      </div>
    );
    expect(result).toBeTruthy();
  });
});
