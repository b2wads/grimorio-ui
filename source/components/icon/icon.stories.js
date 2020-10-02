import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from './icon-component';

const stories = storiesOf('Icon', module);

stories.add('Normal', () => (
  <div>
    <Icon />
    <Icon name="pets" />
    <Icon name="link" size={48} />
  </div>
));
