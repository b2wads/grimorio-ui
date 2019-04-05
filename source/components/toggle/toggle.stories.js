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

stories.addWithInfo('Disabled', () =>
  <div>
    <Toggle
      id="my-toggle-1"
      disabled
      value="10"
      onChange={e => action('value, checked')(e.target.value, e.target.checked)}
    />
    <br/>
    <br/>
    <br/>
    <Toggle
      id="my-toggle"
      disabled
      value="10"
      checked={true}
      onChange={e => action('value, checked')(e.target.value, e.target.checked)}
    />
  </div>
);
