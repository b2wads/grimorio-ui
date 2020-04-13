import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import DragAndDrop from './drag-and-drop-component';

const stories = storiesOf('DragAndDrop', module);

stories.addDecorator(withKnobs);

stories.add('Normal', () => <DragAndDrop />);
