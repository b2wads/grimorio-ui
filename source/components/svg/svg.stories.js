import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Svg from './index';

const stories = storiesOf('Svg', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('All', () => (
  <div>
    <Svg width={48} height={48} src="logo/suba" />&nbsp;
    <Svg width={48} height={48} />&nbsp;
    <Svg src="555555555555555" />
  </div>
));
