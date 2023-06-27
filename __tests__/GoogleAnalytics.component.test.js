import { render } from '@testing-library/react';
import GoogleAnalytics from '../';

describe('Google Analytics', () => {
  it('renders without crashing', () => {
    expect(render.bind(null, <GoogleAnalytics />))
      .not
      .toThrow();
  });
});
