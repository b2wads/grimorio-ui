import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Select from './index';

const stories = storiesOf('Select', module);

stories.addDecorator(withKnobs);

const items = [1,2,3,4,5,6,7,8,9].map(item => ({
  name: `Opção ${item}`,
  value: `value-${item}`,
}));

const itemsIcon = [
  {
    name: 'Opção 3',
    value: 'home',
    icon: 'home',
  },
  {
    name: 'Opção 4',
    value: 'person',
    icon: 'person',
  }
];

stories.addWithInfo('Select', () => {
  return <Select
    label="Opções"
    initialValue="Escolha suas Opções"
    onSelect={data => console.log(data)}
    items={items}
  />
});

stories.addWithInfo('Dropdown', () => {
  return <Select
    type="dropdown"
    dropDownButton={<span>Hello</span>}
    onSelect={({ value }) => alert(value)}
    items={itemsIcon}
  />
});

stories.addWithInfo('Manual', () => {
  return <Select
    label="Opções Manuais"
    onSelect={data => console.log(data)}
  >
    <Select.Option value="val1">Manual Option One</Select.Option>
    <Select.Option value="val2">Manual Option Two</Select.Option>
  </Select>
});
