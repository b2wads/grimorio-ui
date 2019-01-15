import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import SelectPopover from './select-popover-component';
import Button from '../button'

const stories = storiesOf('SelectPopover', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => {
  const options = [
    {
      key: 'name',
      label: 'Nome',
      checked: true,
    },
    {
      key: 'likes',
      label: 'Favoritos',
      checked: false,
    },
    {
      key: 'store',
      label: 'Loja',
    },
  ];

  const submit = (e) => {
    action('form submitted');
    console.log(e);
  }

  return (
    <SelectPopover
      component={<Button>Select</Button>}
      title="Escolha as colunas visíveis"
      options={options}
      onSubmit={submit}
    />
  )
});
