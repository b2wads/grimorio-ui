import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Svg from './index';

const stories = storiesOf('Svg', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
  <div>
    <Svg width={500} height={500} type="icon" src="link" />
    <Svg type="icon" src="exit_to_app" />
    <Svg />
  </div>
));
