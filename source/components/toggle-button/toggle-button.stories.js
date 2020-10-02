import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import ToggleButton from './toggle-button-component';

const stories = storiesOf('ToggleButton', module);

stories.addDecorator(withKnobs);

stories.add(
  'Normal',
  withState({ value: false })
  (({ store }) => {
    const handleChange = value => {
      store.set({ value });
    }

    return (
      <ToggleButton onClick={handleChange} active={store.state.value} />
    )
}))
