import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Form from './index';
import FormGroup from '../form-group/index';
import FormLabel from '../form-label/index';
import FormControl from '../form-control/index';
import FormActions from '../form-actions/index';
import Button from '../button';

const stories = storiesOf('Form', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
  <Form onSubmit={ ()=>{} }>
    <FormGroup>
      <FormLabel>Example of label</FormLabel>
      <FormControl placeholder="Form, FormGroup and input" />
    </FormGroup>
    <FormActions>
      <Button>Cancelar</Button>
      <Button style="primary">Enviar</Button>
    </FormActions>
  </Form>
));

stories.addWithInfo('Inline', () => (
  <Form onSubmit={ ()=>{} } style='inline'>
    <FormGroup>
      <FormControl placeholder="Form, FormGroup and input" />
    </FormGroup>
    <FormGroup>
      <FormControl placeholder="Form, FormGroup and input" />
    </FormGroup>
    <FormActions>
      <Button>Cancelar</Button>
      <Button style="primary">Enviar</Button>
    </FormActions>
  </Form>
));

stories.addWithInfo('Horizontal', () => (
  <Form onSubmit={ ()=>{} } style='horizontal'>
    <FormGroup>
      <FormLabel>Example of label</FormLabel>
      <FormControl placeholder="Form, FormGroup and input" />
    </FormGroup>
    <FormGroup>
      <FormLabel>Example of label</FormLabel>
      <FormControl placeholder="Form, FormGroup and input" />
    </FormGroup>
    <FormActions>
      <Button>Cancelar</Button>
      <Button style="primary">Enviar</Button>
    </FormActions>
  </Form>
));
