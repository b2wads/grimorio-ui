import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import GridRow from './index';
import GridCol from '../grid-col';

const stories = storiesOf('GridRow', module);

stories.addDecorator(withKnobs);

const style = {
  'backgroundColor': '#ccc',
  'height': '100px'
};

stories.addWithInfo('Normal', () => (
  <GridRow start={'xs'}>
    <GridCol xs={6} sm={6} md={6} style={style}>Grid 6</GridCol>
  </GridRow>
));

