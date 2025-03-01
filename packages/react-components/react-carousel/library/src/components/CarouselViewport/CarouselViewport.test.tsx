import * as React from 'react';
import { render } from '@testing-library/react';
import { isConformant } from '../../testing/isConformant';
import { CarouselViewport } from './CarouselViewport';

describe('CarouselViewport', () => {
  isConformant({
    Component: CarouselViewport,
    displayName: 'CarouselViewport',
  });

  // TODO add more tests here, and create visual regression tests in /apps/vr-tests

  it('renders a default state', () => {
    const result = render(<CarouselViewport>Default CarouselViewport</CarouselViewport>);
    expect(result.container).toMatchSnapshot();
  });
});
