import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Modal from './modal-component';

const stories = storiesOf('Modal', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => <Modal />);
