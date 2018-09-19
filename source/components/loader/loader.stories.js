import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Loader from './loader-component';
import Panel from '../panel';
import Button from '../button';

const stories = storiesOf('Loader', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => <Loader />);

stories.addWithInfo('Full', () => <Panel>
  <p>Conteúdo</p>
  <Button>Continuar</Button>
  <Loader type="full" />
</Panel>);

stories.addWithInfo('Full Page', () => <Loader type="full-page" />);
