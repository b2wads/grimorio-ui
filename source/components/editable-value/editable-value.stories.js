import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import EditableValue from './editable-value-component';
import Button from '../button';

const stories = storiesOf('EditableValue', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <EditableValue
    initialValue="Default"
    onSubmit={(value, toggleFn) => {
      console.log('onSubmit', value);
      toggleFn();
    }}
  />
));

stories.add('Outline', () => (
  <EditableValue
    outline
    initialValue="Outline"
    onSubmit={(value, toggleFn) => {
      console.log('onSubmit', value);
      toggleFn();
    }}
    validation={value => `${value}`.length >= 4}
    errorMessage="Favor inserir 4 caracteres"
  />
));

stories.add('Label', () => (
  <div>
    <EditableValue
      outline
      label="Teste"
      initialValue="Outline"
      onSubmit={(value, toggleFn) => {
        console.log('onSubmit', value);
        toggleFn();
      }}
      validation={value => `${value}`.length >= 4}
      errorMessage="Favor inserir 4 caracteres"
    />
    <br/>
    <br/>
    <br/>
    <br/>
    <EditableValue
      label="Teste"
      initialValue="No Outline"
      onSubmit={(value, toggleFn) => {
        console.log('onSubmit', value);
        toggleFn();
      }}
      validation={value => `${value}`.length >= 4}
      errorMessage="Favor inserir 4 caracteres"
    />
  </div>
));

stories.add('Uncontrolled', () => (
  <EditableValue
    label="Uncontrolled"
    initialValue="Valor interno"
    onSubmit={(value, toggleFn) => {
      console.log('onSubmit', value);
      toggleFn();
    }}
    validation={value => `${value}`.length >= 4}
    errorMessage="Favor inserir 4 caracteres"
  />
));

stories.add(
  'Controlled',
  withState({ loading: false, value: 'Valor no estado (externo)' })(({ store }) => {
    const setVal = (value, toggle) => {
      store.set({ loading: true });
      setTimeout(() => {
        store.set({ value, loading: false });
        toggle();
      }, 1000);
    };

    const changeVal = () => {
      store.set({ value: 'Novo Valor do Estado' });
    };

    return (
      <div>
        <EditableValue
          loading={store.state.loading}
          value={store.state.value}
          onSubmit={setVal}
          validation={value => `${value}`.length > 4}
          errorMessage="Favor inserir mais que 4 caracteres"
        />
        <br/>
        <br/>
        <Button onClick={changeVal}>Change State Value</Button>
      </div>
    );
  })
);
