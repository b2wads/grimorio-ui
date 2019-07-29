import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Feedback from './feedback-component';

const stories = storiesOf('Feedback', module);

stories.addDecorator(withKnobs);

stories.add('Normal', () => <Feedback isMobile={false} title="Meu feedback" />);
