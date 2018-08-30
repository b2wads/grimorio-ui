import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

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

const manualState = {
  manualOpen: false,
};

stories.addWithInfo('Manual', withState(manualState)(({ store }) => {
  const updateMenu = menuState => {
    store.set({ manualOpen: menuState });
  };

  return <Select
    label="Opções Manuais"
    onSelect={(data, menu) => {
      console.log(data, menu);
      updateMenu(menu);
    }}
    onClickOutside={menu => {
      console.log('click outside');
      updateMenu(menu);
    }}
    open={store.manualOpen}
  >
    <Select.Option value="val1">Manual Option One</Select.Option>
    <Select.Option value="val2">Manual Option Two</Select.Option>
  </Select>
}));
