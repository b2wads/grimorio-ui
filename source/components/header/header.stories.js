import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Svg from '../svg';
import Header from './header-component';
import styles from './header.styl';

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

stories.addWithInfo('With children', () =>
  <Header> 
    Conteúdo qualquer que vai entrar aqui!
  </Header>
);

stories.addWithInfo('Mobile', () =>
  <Header
    isMobile
    onLogout={() => alert('Logout!')}
    onLogoClick={() => alert('logo!')}
    logo={
      <Svg width={188} height={58} src="logo/afiliados" />
    }
  />
);
