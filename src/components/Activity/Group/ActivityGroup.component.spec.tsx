import React from 'react';
import renderer from 'react-test-renderer';

import {ActivityGroup} from './ActivityGroup.component';

describe('ActivityGroup', () => {
  it('should be true', () => {
    expect(true).toBeTruthy();
  });

  it('Should be renderable', () => {
    renderer.create(<ActivityGroup />);
  });
});
