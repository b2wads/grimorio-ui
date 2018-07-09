import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import FormGroup from './index';
import FormLabel from '../form-label/index';
import FormControl from '../form-control';

const stories = storiesOf('FormGroup', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
  <FormGroup>
    <FormLabel>Nome:</FormLabel>
    <FormControl placeholder="Form group with input" />
  </FormGroup>
));

stories.addWithInfo('With id', () => (
  <FormGroup controlId="test">
    <FormLabel>Nome:</FormLabel>
    <FormControl placeholder="Form group with input" />
  </FormGroup>
));

stories.addWithInfo('With validation', () => (
  <div>
    <FormGroup validationState="success">
      <FormLabel>Nome:</FormLabel>
      <FormControl addonBefore="@"  placeholder="Form group with input" feedback />
    </FormGroup>
    <FormGroup validationState="warning">
      <FormLabel>Nome:</FormLabel>
      <FormControl addonBefore="@"   placeholder="Form group with input" feedback />
    </FormGroup>
    <FormGroup validationState="error">
      <FormLabel>Nome:</FormLabel>
      <FormControl addonBefore="@"  placeholder="Form group with input" feedback />
      <span className="error">testte</span>
    </FormGroup>
  </div>
));
