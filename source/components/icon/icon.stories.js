import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Icon from './icon-component';

const stories = storiesOf('Icon', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
  <div>
    <Icon />
    <Icon name="pets" />
    <Icon name="link" size={48} />
  </div>
));
