import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import ProgressBar from './progress-bar-component';

const stories = storiesOf('ProgressBar', module);

stories.addDecorator(withKnobs);

stories.add('Normal', () => 
    <div>
        <p>Primary</p>
        <ProgressBar progress={10} className="my-progress" theme="primary"/>
    <br/>
        <p>Error</p>
        <ProgressBar progress={30} className="my-progress" theme="error"/>
    <br/>
        <p>Warning</p>
        <ProgressBar progress={50} className="my-progress" theme="warning"/>
    <br/>
        <p>Success</p>
        <ProgressBar progress={70} className="my-progress" theme="success"/>
    </div>
);