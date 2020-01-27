import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Beacon from './beacon-component';

const stories = storiesOf('Beacon', module);

stories.addDecorator(withKnobs);

stories.add('Normal', () => {
  return (
    <Beacon className="position"/>
  );
});
