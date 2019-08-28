import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import EditableValue from './editable-value-component';

const stories = storiesOf('EditableValue', module);

stories.addDecorator(withKnobs);

stories.add('Uncontrolled', () => (
  <EditableValue
    label="Teste"
    value="123"
    onSubmit={(value, toggleFn) => {
      console.log('onSubmit', value);
      toggleFn();
    }}
    validation={value => `${value}`.length === 4}
    errorMessage="Favor inserir 4 caracteres"
  />
));

stories.add('Outline and Label', () => (
  <EditableValue
    outline
    label="Teste"
    value="123"
    onSubmit={(value, toggleFn) => {
      console.log('onSubmit', value);
      toggleFn();
    }}
    validation={value => `${value}`.length === 4}
    errorMessage="Favor inserir 4 caracteres"
  />
));
