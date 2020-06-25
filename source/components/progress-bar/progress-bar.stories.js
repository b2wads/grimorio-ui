import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import ProgressBar from './progress-bar-component';

const stories = storiesOf('ProgressBar', module);

stories.addDecorator(withKnobs);

stories.add('Normal', () => <ProgressBar />);
