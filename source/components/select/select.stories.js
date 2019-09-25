import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import Select, { SelectOption } from './index';
import Button from '../button';

const stories = storiesOf('Select', module);

stories.addDecorator(withKnobs);

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(item => ({
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
  },
];

stories.add('Select with Label', () => {
  return <Select label="Opções" onSelect={data => console.log(data)} items={items} height="200px" sortItems={false} />;
});

stories.add('Select outline', () => {
  return (
    <div>
      <Select
        outline
        label="Opções"
        position="bottom"
        onSelect={data => console.log(data)}
        height="150px"
        items={items}
      />
    </div>
  );
});

stories.add('Select Mobile', () => {
  return <Select isMobile label="Opções" onSelect={data => console.log(data)} items={items} sortItems={false} />;
});

stories.add(
  'Controled',
  withState({ value: 'value-1' })(({ store }) => {
    const changeValue = ({ value }) => {
      store.set({ value });
    };
    return <Select label="Opções" onSelect={changeValue} items={items} height="200px" value={store.state.value} />;
  })
);

stories.add('Select with defaultValue', () => {
  return <Select label="Opções" onSelect={data => console.log(data)} defaultValue="value-7" items={items} />;
});

stories.add('Select without Label', () => {
  return <Select placeholder="Opções" onSelect={data => console.log(data)} items={items} />;
});

stories.add('Select disabled', () => {
  return (
    <div>
      <Select disabled placeholder="Opções" onSelect={data => console.log(data)} items={items} />
      <br />
      <Select disabled label="Opções" onSelect={data => console.log(data)} items={items} />
      <br />
      <Select disabled placeholder="Opções" defaultValue="value-4" onSelect={data => console.log(data)} items={items} />
      <br />
      <br />
      <Select disabled label="Opções" onSelect={data => console.log(data)} defaultValue="value-7" items={items} />
    </div>
  );
});

stories.add('Select - No Current Value', () => {
  return (
    <Select
      label="Opções"
      onSelect={data => console.log(data)}
      items={items}
      height="200px"
      noCurrentValue
      sortItems={false}
    />
  );
});

stories.add('Select - Options Bottom', () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <Select
        isMobile
        label="Opções"
        position="bottom"
        onSelect={data => console.log(data)}
        height="150px"
        items={items}
      />
    </div>
  );
});

stories.add('Menu', () => {
  return (
    <Select
      type="menu"
      position="under"
      menuButton={<Button>Open Menu</Button>}
      onSelect={({ value }) => alert(value)}
      items={itemsIcon}
    />
  );
});

const manualState = {
  manualOpen: false,
  value: 'val2',
};

stories.add(
  'Manual',
  withState(manualState)(({ store }) => {
    const updateMenu = menuState => {
      store.set({ manualOpen: menuState });
    };

    const updateValue = value => {
      store.set({ value });
    };

    return (
      <Select
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
        style={{ width: '170px' }}
      >
        <SelectOption value="val1">Manual Option One xxxxxxxxxxxxxxx xxxxxxxxxxxxxxxx xxxxxxx</SelectOption>
        <SelectOption value="val2">Manual Option Two</SelectOption>
      </Select>
    );
  })
);
