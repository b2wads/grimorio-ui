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
    <Svg width={48} height={48} src="logo/afiliados-icon" />
    <Svg width={150} height={50} src="logo/afiliados" />
    <Svg width={50} height={50} src="flame" />
    <Svg width={50} height={50} src="cupom" />
    <Svg width={150} height={150} src="logo/suba-full-color" />
    <Svg width={150} height={150} src="logo/shop-full-color" />
  </div>
));
