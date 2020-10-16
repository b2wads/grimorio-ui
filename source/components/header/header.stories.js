import React from 'react';

import Svg from '../svg';
import Header from './header-component';

export default {
  title: 'Header',
  component: Header,
};

export const Normal = () => <Header>Conteúdo qualquer que vai entrar aqui!</Header>;

export const WithLogo = () => (
  <Header
    showLogo
    onLogoClick={() => alert('logo!')}
    logo={<Svg width={188} height={58} src="logo/afiliados" />}
  >
    Conteúdo qualquer que vai entrar aqui!
  </Header>
);
