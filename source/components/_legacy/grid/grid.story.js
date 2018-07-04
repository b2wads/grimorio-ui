import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Grid from './index';
import GridRow from '../grid-row/index';
import GridCol from '../grid-col/index';

const stories = storiesOf('Grid', module);

stories.addDecorator(withKnobs);

const style = {
  'backgroundColor': '#ccc',
  'border': '1px solid #999',
  'height': '40px'
};

stories.addWithInfo('Normal', () => (
  <Grid>
    <GridRow start={'xs'}>
      <GridCol xs={1} style={style}>Grid 1</GridCol>
      <GridCol xs={1} style={style}>Grid 1</GridCol>
      <GridCol xs={1} style={style}>Grid 1</GridCol>
      <GridCol xs={1} style={style}>Grid 1</GridCol>
      <GridCol xs={1} style={style}>Grid 1</GridCol>
      <GridCol xs={1} style={style}>Grid 1</GridCol>
      <GridCol xs={1} style={style}>Grid 1</GridCol>
      <GridCol xs={1} style={style}>Grid 1</GridCol>
      <GridCol xs={1} style={style}>Grid 1</GridCol>
      <GridCol xs={1} style={style}>Grid 1</GridCol>
      <GridCol xs={1} style={style}>Grid 1</GridCol>
      <GridCol xs={1} style={style}>Grid 1</GridCol>
    </GridRow>
    <GridRow start={'xs'}>
      <GridCol xs={2} style={style}>Grid 2</GridCol>
      <GridCol xs={2} style={style}>Grid 2</GridCol>
      <GridCol xs={2} style={style}>Grid 2</GridCol>
      <GridCol xs={2} style={style}>Grid 2</GridCol>
      <GridCol xs={2} style={style}>Grid 2</GridCol>
      <GridCol xs={2} style={style}>Grid 2</GridCol>
    </GridRow>
    <GridRow start={'xs'}>
      <GridCol xs={3} style={style}>Grid 3</GridCol>
      <GridCol xs={3} style={style}>Grid 3</GridCol>
      <GridCol xs={3} style={style}>Grid 3</GridCol>
      <GridCol xs={3} style={style}>Grid 3</GridCol>
    </GridRow>
    <GridRow start={'xs'}>
      <GridCol xs={4} style={style}>Grid 4</GridCol>
      <GridCol xs={4} style={style}>Grid 4</GridCol>
      <GridCol xs={4} style={style}>Grid 4</GridCol>
    </GridRow>
    <GridRow start={'xs'}>
      <GridCol xs={6} style={style}>Grid 6</GridCol>
      <GridCol xs={6} style={style}>Grid 6</GridCol>
    </GridRow>
    <GridRow start={'xs'}>
      <GridCol xs={12} style={style}>Grid 12</GridCol>
    </GridRow>
  </Grid>
));

