import React from 'react';

import Svg from '../svg';
import Header from './header-component';

export default {
  title: 'Header',
  component: Header,
};

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

export const Normal = () => (
  <Header
    user="ana@ana.com"
    onSelect={({ value }) => alert(value)}
    onLogout={() => alert('Logout!')}
    items={itemsIcon}
  />
);

export const WithChildren = () => <Header>Conteúdo qualquer que vai entrar aqui!</Header>;

WithChildren.story = {
  name: 'With children',
};

export const Mobile = () => (
  <Header
    isMobile
    onLogout={() => alert('Logout!')}
    onLogoClick={() => alert('logo!')}
    logo={<Svg width={188} height={58} src="logo/afiliados" />}
  />
);
