import 'react-native';
import React from 'react';
import Index from '../index.android.js';

// Note: test renderer must be required after app-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});
