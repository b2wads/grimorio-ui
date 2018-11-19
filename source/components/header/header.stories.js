import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Header from './header-component';

const stories = storiesOf('Header', module);

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

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () =>
  <Header
    user="ana@ana.com"
    onSelect={({value}) => alert(value)}
    onLogout={() => alert('Logout!')}
    items={itemsIcon}
    />
);

stories.addWithInfo('Mobile', () =>
  <Header
    isMobile
    onLogout={() => alert('Logout!')}
    onLogoClick={() => alert('logo!')}
  />
);
