import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import HelpText from './index';

const stories = storiesOf('HelpText', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
  <div>
    <HelpText>Example</HelpText>
  </div>
));
