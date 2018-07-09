import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Svg from './index';

const stories = storiesOf('Svg', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
  <div>
    <Svg src="logo/acom" />
    <Svg src="logo/suba" />
    <Svg src="logo/shop" />
    <Svg src="logo/soub" />
    <Svg src="logo/campaign-light" />
    <Svg src="logo/spacey" />
  </div>
));
