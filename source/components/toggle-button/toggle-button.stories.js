import React from 'react';
import { withState } from '../../helpers/storybook';

import ToggleButton from './toggle-button-component';

export default {
  title: 'ToggleButton',
  component: ToggleButton,
};

export const Normal = withState({ value: false }, store => {
  const handleChange = (value) => {
    store.set({ value });
  };

  return <ToggleButton onClick={handleChange} active={store.state.value} />;
});
