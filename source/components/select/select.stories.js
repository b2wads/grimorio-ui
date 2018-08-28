import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Select from './index';

const stories = storiesOf('Select', module);

stories.addDecorator(withKnobs);

const items = [
  {
    name: 'Opção 1',
    value: 'val1'
  },
  {
    name: 'Opção 2',
    value: 'val2'
  }
]

stories.addWithInfo('Select', () => {
  return <Select
    initialValue="Escolha suas Opções"
    onSelect={data => console.log(data)}
    items={items}
  />
});

stories.addWithInfo('Dropdown', () => {
  return <Select
    type="dropdown"
    initialValue="Escolha suas Opções"
    onSelect={({ name }) => alert(name)}
    items={items}
  />
});

stories.addWithInfo('Manual', () => {
  return <Select
    initialValue="Select Manual"
    onSelect={data => console.log(data)}
  >
    <Select.Option value="val1">Manual Option One</Select.Option>
    <Select.Option value="val2">Manual Option Two</Select.Option>
  </Select>
});
