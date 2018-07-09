import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Panel from './panel-component';
import Button from '../button';


const stories = storiesOf('Panel', module);

stories.addDecorator(withKnobs);
const options = {
  default: 'default',
  brand: 'brand',
};

stories.addWithInfo('Default', () => (
  <div>
    <Panel type={select('Panel Type', options, 'default', '0')} header="Title">
      <p>Content</p>
      <Button>Send</Button>
    </Panel>
  </div>
));

stories.addWithInfo('Brand', () => (
  <div>
    <Panel type="brand" header={<div style={{height: 70, background: '#eee'}}>Title</div>}>
      <p>Content</p>
      <Button>Send</Button>
    </Panel>
  </div>
));
