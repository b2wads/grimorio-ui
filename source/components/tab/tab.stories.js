import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import TabMenu, { Tab } from './';

const tabs = [
  {
    id: 'tab1',
    value: 'tab1',
    content: 'Tab 1',
    iconLeft: 'heart',
  },
  {
    id: 'tab2',
    value: 'tab2',
    content: 'Tab 2',
    iconLeft: 'heart',
  },
  {
    id: 'tab3',
    value: 'tab3',
    content: 'Tab 3',
    iconLeft: 'heart',
  },
];

const tabs2 = [1,2,3,4,5,6,7].map(i => ({
  id: `tab${i}`,
  value: `tab${i}`,
  content: `Número ${i}`,
  iconLeft: 'heart',
}));

const stories = storiesOf('Tab', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => {
  return (
    <div>
      <div style={{ width: '500px' }}>
        <TabMenu
          tabs={tabs}
          active="tab2"
          activeIndex={1}
          onChange={(...args) => console.log(args)}
        />
      </div>
      <br/>
      <br/>
      <TabMenu
        tabs={tabs}
        active="tab2"
        activeIndex={1}
        onChange={(...args) => console.log(args)}
      />
    </div>
  );
});

stories.add('Active Style', () => {
  return (
    <div>
      <TabMenu activeStyle="primary" active="1" onChange={(...args) => console.log(args)}>
        <Tab id="1" value="1">Primary</Tab>
        <Tab id="2" value="2">Active</Tab>
        <Tab id="3" value="3">Style</Tab>
      </TabMenu>
      <br/>
      <br/>
      <TabMenu activeStyle="secondary" active="1" onChange={(...args) => console.log(args)}>
        <Tab id="1" value="1">Secondary</Tab>
        <Tab id="2" value="2">Active</Tab>
        <Tab id="3" value="3">Style</Tab>
      </TabMenu>
    </div>
  );
});

stories.add('Manual', () => {
  return (
    <TabMenu active="acom" onChange={(...args) => console.log(args)}>
      <Tab id="acom" value="brandAcom" iconLeft="heart">Acom</Tab>
      <Tab id="suba" value="Subidubidu" iconTop="heart">Suba</Tab>
      <Tab id="shop" value="Shapitaim">Shop</Tab>
    </TabMenu>
  );
});

stories.add('With Array', () => {
  return (
    <TabMenu
      tabs={tabs2}
      active="tab5"
      onChange={(...args) => console.log(args)}
    />
  );
});
