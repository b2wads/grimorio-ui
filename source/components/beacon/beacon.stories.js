import React from 'react';
import { storiesOf } from '@storybook/react';

import Beacon from './beacon-component';

const stories = storiesOf('Beacon', module);

stories.add('Normal', () => {
  return (
    <Beacon className="position"/>
  );
});
