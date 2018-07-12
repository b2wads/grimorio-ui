import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Tooltip from './tooltip-component';
import { dict } from 'tcomb';

const stories = storiesOf('Tooltip', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
  <div style={{ paddingLeft: '20%'}}>
    <Tooltip message="Tooltip" />
    <br/><br/>
    <Tooltip message="Tooltip" position="bottom">Bottom</Tooltip>
    <br/><br/>
    <Tooltip position="bottom" width="450px" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
    <br/><br/>
    <Tooltip message="Tooltip" position="left" />
    <br/><br/>
    <Tooltip message="Tooltip" position="right" />
  </div>
));
