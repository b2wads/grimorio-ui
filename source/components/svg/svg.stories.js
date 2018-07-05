import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Svg from './index';

const stories = storiesOf('Svg', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('All', () => (
  <div>
    <Svg width={48} height={48} type="icon" src="link" />
    <Svg type="other" src="logo/acom" />
    <Svg />
    <Svg src="555555555555555" />
  </div>
));

stories.addWithInfo('Icons', () => <Svg width={48} height={48} type="icon" src="exit_to_app" />);

stories.addWithInfo('Other', () => <Svg width={48} height={48} type="other" src="logo/suba" />);
