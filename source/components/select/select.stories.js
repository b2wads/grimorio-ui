import React from 'react';
import { withState } from '../../helpers/storybook';

import Select, { SelectOption } from './index';
import Button from '../button';

export default {
  title: 'Select',
  component: Select,
};

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(
  (item) => ({
    name: `Opção ${item}`,
    value: `value-${item}`,
  })
);

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

export const SelectWithLabel = () => {
  return (
    <Select
      label="Opções"
      onSelect={(data) => console.log(data)}
      items={items}
      height="200px"
      sortItems={false}
    />
  );
};



export const SelectOutline = () => {
  return (
    <div>
      <Select
        outline
        label="Opções"
        position="bottom"
        onSelect={(data) => console.log(data)}
        height="150px"
        items={items}
      />
    </div>
  );
};



export const SelectMobile = () => {
  return (
    <Select
      isMobile
      label="Opções"
      onSelect={(data) => console.log(data)}
      items={items}
      sortItems={false}
    />
  );
};

export const Controled = withState({ value: 'value-1' }, store => {
  const changeValue = ({ value }) => {
    store.set({ value });
  };
  return (
    <Select
      label="Opções"
      onSelect={changeValue}
      items={items}
      height="200px"
      value={store.state.value}
    />
  );
});

export const SelectWithDefaultValue = () => {
  return (
    <Select
      label="Opções"
      onSelect={(data) => console.log(data)}
      defaultValue="value-7"
      items={items}
    />
  );
};



export const SelectWithoutLabel = () => {
  return <Select placeholder="Opções" onSelect={(data) => console.log(data)} items={items} />;
};



export const SelectDisabled = () => {
  return (
    <div>
      <Select disabled placeholder="Opções" onSelect={(data) => console.log(data)} items={items} />
      <br />
      <Select disabled label="Opções" onSelect={(data) => console.log(data)} items={items} />
      <br />
      <Select
        disabled
        placeholder="Opções"
        defaultValue="value-4"
        onSelect={(data) => console.log(data)}
        items={items}
      />
      <br />
      <br />
      <Select
        disabled
        label="Opções"
        onSelect={(data) => console.log(data)}
        defaultValue="value-7"
        items={items}
      />
    </div>
  );
};



export const SelectNoCurrentValue = () => {
  return (
    <Select
      label="Opções"
      onSelect={(data) => console.log(data)}
      items={items}
      height="200px"
      noCurrentValue
      sortItems={false}
    />
  );
};



export const SelectOptionsBottom = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <Select
        isMobile
        label="Opções"
        position="bottom"
        onSelect={(data) => console.log(data)}
        height="150px"
        items={items}
      />
    </div>
  );
};



export const Menu = () => {
  return (
    <Select
      type="menu"
      position="under"
      menuButton={<Button>Open Menu</Button>}
      onSelect={({ value }) => alert(value)}
      items={itemsIcon}
    />
  );
};

const manualState = {
  manualOpen: false,
  value: 'val2',
};

export const Manual = withState(manualState, store => {
  const updateMenu = (menuState) => {
    store.set({ manualOpen: menuState });
  };

  const updateValue = (value) => {
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
      onClickOutside={(menu) => {
        console.log('click outside');
        updateMenu(menu);
      }}
      open={store.manualOpen}
      defaultValue="val2"
      style={{ width: '170px' }}
    >
      <SelectOption value="val1">
        Manual Option One xxxxxxxxxxxxxxx xxxxxxxxxxxxxxxx xxxxxxx
      </SelectOption>
      <SelectOption value="val2">Manual Option Two</SelectOption>
    </Select>
  );
});

const itemsToFilter = [
  ...items,
  { 
    name: 'Teste de filtro',
    value: 'teste-filter',
  }
]

export const SelectWithFilter = () => {
  return (
    <Select
      label="Select com Filtro"
      items={itemsToFilter}
      onSelect={(data) => console.log(data)}
      hasFilter
    />)
}

export const ManualWithFilter = () => {
  return(
    <Select label="Select Manual com Filtro" onSelect={(data) => console.log(data)} hasFilter>
      <SelectOption value="val1">Manual Option One</SelectOption>
      <SelectOption value="val2">Manual Opzione Due</SelectOption>
      <SelectOption value="val3">Manual Opção Três</SelectOption>
      <SelectOption value="val4">Manual Opción Cuatro</SelectOption>
    </Select>
  )
}