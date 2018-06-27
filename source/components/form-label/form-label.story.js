import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import FormGroup from '../form-group';
import FormLabel from './index';

const stories = storiesOf('FormLabel', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
  <FormGroup>
    <br/><br/><br/>
    <FormLabel>Nome:</FormLabel>
  </FormGroup>
));

stories.addWithInfo('Addon text', () => (
  <FormGroup>
    <br/><br/><br/>
    <FormLabel addon={'text'}>Nome:</FormLabel>
  </FormGroup>
));

stories.addWithInfo('Addon link', () => (
  <FormGroup>
    <br/><br/><br/>
    <FormLabel addon={<a href="/home">Esqueci a minha senha</a>}>Nome:</FormLabel>
  </FormGroup>
));
