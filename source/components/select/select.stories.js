import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import Select, { SelectOption } from './index';
import Button from '../button';

const stories = storiesOf('Select', module);

stories.addDecorator(withKnobs);

const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(item => ({
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

stories.addWithInfo('Select with Label', () => {
  return <Select
    label="Opções"
    onSelect={data => console.log(data)}
    items={items}
    height="200px"
  />
});

stories.addWithInfo('Select with defaultValue', () => {
  return <Select
    label="Opções"
    onSelect={data => console.log(data)}
    defaultValue="value-7"
    items={items}
  />
});

stories.addWithInfo('Select without Label', () => {
  return <Select
    placeholder="Opções"
    onSelect={data => console.log(data)}
    items={items}
  />
});

stories.addWithInfo('Select disabled', () => {
  return <div>
    <Select
      disabled
      placeholder="Opções"
      onSelect={data => console.log(data)}
      items={items}
    />
    <br/>
    <Select
      disabled
      label="Opções"
      onSelect={data => console.log(data)}
      items={items}
    />
    <br/>
    <Select
      disabled
      placeholder="Opções"
      defaultValue="value-4"
      onSelect={data => console.log(data)}
      items={items}
    />
    <br/>
    <br/>
    <Select
      disabled
      label="Opções"
      onSelect={data => console.log(data)}
      defaultValue="value-7"
      items={items}
    />
  </div>
});

stories.addWithInfo('Select - Options Bottom', () => {
  return <Select
    label="Opções"
    position="bottom"
    onSelect={data => console.log(data)}
    items={items}
  />
});

stories.addWithInfo('Menu', () => {
  return <Select
    type="menu"
    position="under"
    menuButton={<Button>Open Menu</Button>}
    onSelect={({ value }) => alert(value)}
    items={itemsIcon}
  />
});

const manualState = {
  manualOpen: false,
  value: 'val2',
};

stories.addWithInfo('Manual', withState(manualState)(({ store }) => {
  const updateMenu = menuState => {
    store.set({ manualOpen: menuState });
  };

  const updateValue = value => {
    store.set({ value });
  };

  return <Select
    label="Opções Manuais"
    onSelect={(data, menu) => {
      console.log(data, menu);
      updateMenu(menu);
      updateValue(data.value);
    }}
    onClickOutside={menu => {
      console.log('click outside');
      updateMenu(menu);
    }}
    open={store.manualOpen}
    defaultValue="val2"
  >
    <SelectOption value="val1">Manual Option One</SelectOption>
    <SelectOption value="val2">Manual Option Two</SelectOption>
  </Select>
}));
