import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import GridCol from './index';

const stories = storiesOf('GridCol', module);

stories.addDecorator(withKnobs);

const style = {
  'backgroundColor': '#ccc',
  'height': '100px'
};

stories.addWithInfo('Normal', () => (
  <GridCol xs={1} style={style}>Grid 1</GridCol>
));

