import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Loader from './loader-component';
import Panel from '../panel';
import Button from '../button';

const stories = storiesOf('Loader', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => <div>
  <Loader />
  <div style={{ background: 'gray', display: 'inline-block', padding: '10px' }}>
    <Loader color="secondary" />
  </div>
</div>);

stories.addWithInfo('Size', () => <div>
  <Loader size="20px" />
  <Loader size="40px" />
  <Loader size="60px" />
  <Loader size="80px" />
</div>);

stories.addWithInfo('Full', () => <Panel>
  <p>Conteúdo</p>
  <Button>Continuar</Button>
  <Loader type="full" />
</Panel>);

stories.addWithInfo('Full Page', () => <Loader background="black" color="secondary" type="full-page" />);
