import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import InfoCard from './info-card-component';

const stories = storiesOf('InfoCard', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => <InfoCard />);
