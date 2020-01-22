import React from 'react';
import { shallow } from 'enzyme';
import AutoAdvances from '../AutoAdvanced';

describe('AutoAdvances()', () => {
  const MockComponent = () => null;

  MockComponent.displayName = 'MockComponent';

  const MockComponentWithAutoAdvance = AutoAdvances(
    MockComponent,
    'index',
    'upperBound'
  );

  it('has the expected displayName', () => {
    expect(MockComponentWithAutoAdvance.displayName).toBe(
      'AutoAdvances(MockComponent)'
    );
  });

  const AutoAdvanceDelay = 10e3;
  const upperBound = 5;
  let indexIncrement;
  let wrapper;

  beforeEach(() => {
    indexIncrement = jest.fn();
    jest.useFakeTimers();
    wrapper = shallow(
      <MockComponentWithAutoAdvance
        AutoAdvanceDelay={AutoAdvanceDelay}
        index={0}
        indexIncrement={indexIncrement}
        upperBound={upperBound}
      />
    );
  });


});