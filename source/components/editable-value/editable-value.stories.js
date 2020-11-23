import React from 'react';
import { withState } from '../../helpers/storybook';

import EditableValue from './editable-value-component';
import Button from '../button';

export default {
  title: 'EditableValue',
  component: EditableValue,
};

export const Default = () => (
  <EditableValue
    initialValue="Default"
    onSubmit={(value, toggleFn) => {
      console.log('onSubmit', value);
      toggleFn();
    }}
  />
);

export const Outline = () => (
  <EditableValue
    outline
    initialValue="Outline"
    onSubmit={(value, toggleFn) => {
      console.log('onSubmit', value);
      toggleFn();
    }}
    validation={(value) => `${value}`.length >= 4}
    errorMessage="Favor inserir 4 caracteres"
  />
);

export const Label = () => (
  <div>
    <EditableValue
      outline
      label="Teste"
      initialValue="Outline"
      onSubmit={(value, toggleFn) => {
        console.log('onSubmit', value);
        toggleFn();
      }}
      validation={(value) => `${value}`.length >= 4}
      errorMessage="Favor inserir 4 caracteres"
    />
    <br />
    <br />
    <br />
    <br />
    <EditableValue
      label="Teste"
      initialValue="No Outline"
      onSubmit={(value, toggleFn) => {
        console.log('onSubmit', value);
        toggleFn();
      }}
      validation={(value) => `${value}`.length >= 4}
      errorMessage="Favor inserir 4 caracteres"
    />
  </div>
);

export const Uncontrolled = () => (
  <EditableValue
    label="Uncontrolled"
    initialValue="Valor interno"
    onSubmit={(value, toggleFn) => {
      console.log('onSubmit', value);
      toggleFn();
    }}
    validation={(value) => `${value}`.length >= 4}
    errorMessage="Favor inserir 4 caracteres"
  />
);

export const Controlled = withState({ loading: false, value: 'Valor no estado (externo)' })(
  ({ store }) => {
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
          validation={(value) => `${value}`.length > 4}
          errorMessage="Favor inserir mais que 4 caracteres"
        />
        <br />
        <br />
        <Button onClick={changeVal}>Change State Value</Button>
      </div>
    );
  }
);
