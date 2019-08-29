import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import TabMenu, { Tab } from './';

const stories = storiesOf('Tab', module);

stories.addDecorator(withKnobs);

stories.add('Manual', () => {
  return (
    <TabMenu active="acom" onChange={(...args) => console.log(args)}>
      <Tab id="acom" value="brandAcom" iconLeft="heart">Ana</Tab>
      <Tab id="suba" value="Subidubidu" iconTop="heart">Paula</Tab>
      <Tab id="shop" value="Shapitaim">Azevedo</Tab>
    </TabMenu>
  );
});

stories.add('With Array', () => {
  const tabs = [
    {
      id: 'tab1',
      value: 'tab1',
      content: 'Minha tab 1',
      iconLeft: 'heart',
    },
    {
      id: 'tab2',
      value: 'tab2',
      content: 'Minha tab 2',
      iconLeft: 'heart',
    },
    {
      id: 'tab3',
      value: 'tab3',
      content: 'Minha tab 3',
      iconLeft: 'heart',
    },
  ];

  return (
    <TabMenu
      tabs={tabs}
      active="acom"
      onChange={(...args) => console.log(args)}
    />
  );
});
