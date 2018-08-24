import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Header from './header-component';

const stories = storiesOf('Header', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => <Header user="ana@ana.com" />);
