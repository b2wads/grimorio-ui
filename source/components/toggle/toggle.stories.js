import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';


import Toggle from './toggle-component';

const stories = storiesOf('Toggle', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () =>
  <Toggle
    id="my-toggle"
    value="10"
    onChange={e => action('value, checked')(e.target.value, e.target.checked)}
  />
);
