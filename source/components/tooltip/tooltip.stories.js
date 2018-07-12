import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Tooltip from './tooltip-component';
import { dict } from 'tcomb';

const stories = storiesOf('Tooltip', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
  <div style={{ textAlign: 'center'}}>
    <Tooltip message="Tooltip">top center >>>>>>>>>></Tooltip>
    <br/><br/>
    <Tooltip message="Tooltip" align="left">top left >>>>>>>>>></Tooltip>
    <br/><br/>
    <Tooltip message="Tooltip" align="right">top right >>>>>>>>>></Tooltip>
    <br/><br/>
    <Tooltip message="Tooltip" direction="bottom">bottom center >>>>>>>>>></Tooltip>
    <br/><br/>
    <Tooltip message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" direction="bottom">bottom center Lipsum >>>>>>>>>></Tooltip>
    <br/><br/>
    <Tooltip message="Tooltip" direction="right">right center >>>>>>>>>></Tooltip>
    <br/><br/>
    <Tooltip message="Tooltip" direction="left">left center >>>>>>>>>></Tooltip>
  </div>
));
