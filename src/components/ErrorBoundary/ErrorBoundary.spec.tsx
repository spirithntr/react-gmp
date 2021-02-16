import * as React from 'react';
import { jest } from '@jest/globals';
import { mount, ReactWrapper } from 'enzyme';
import { ErrorBoundary } from './ErrorBoundary';

const ChildComp = () => <div>test data</div>;
let wrapper: ReactWrapper;

beforeEach(() => {
  // remove test error from cli output
  jest.spyOn(console, 'log').mockImplementation(() => undefined);

  wrapper = mount(
    <ErrorBoundary>
      <ChildComp />
    </ErrorBoundary>
  );
});

describe('ErrorBoundary', () => {
  it('should display an ErrorMessage if child component throws', () => {
    const error = new Error('test');

    wrapper.find(ChildComp).simulateError(error);
    expect(wrapper.containsMatchingElement(<h1>Something went wrong.</h1>)).toBeTruthy();
  });

  it('should display child component if child doesnt throw', () => {
    expect(wrapper.containsMatchingElement(<div>test data</div>)).toBeTruthy();
  });
});
