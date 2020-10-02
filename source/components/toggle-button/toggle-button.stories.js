import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';

import ToggleButton from './toggle-button-component';

const stories = storiesOf('ToggleButton', module);

stories.add(
  'Normal',
  withState({ value: false })
  (({ store }) => {
    const handleChange = value => {
      store.set({ value });
    }

    return (
      <ToggleButton onClick={handleChange} value={store.state.value} />
    )
}))
