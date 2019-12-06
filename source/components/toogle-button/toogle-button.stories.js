import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import ToogleButton from './toogle-button-component';

const stories = storiesOf('ToogleButton', module);

stories.addDecorator(withKnobs);

stories.add(
  'Normal',
  withState({ value: false })
  (({ store }) => {
    const handleChange = value => {
      console.log('eventooo', value)
      store.set({ value });
    }

    return (
      <ToogleButton onClick={handleChange} value={false} />
    )
}))
