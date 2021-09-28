import React from 'react';

import Svg from '../svg';
import { Header } from './header-component';

export default {
  title: 'Header',
  component: Header,
};

export const Normal = () => <Header>Conteúdo qualquer que vai entrar aqui!</Header>;

export const WithLogo = () => (
  <Header
  showLogo
  color="support"
  onLogoClick={() => alert('logo!')}
  logo={<Svg width={288} height={108} src="logo/americanas-advertising" />}
  >
    Conteúdo qualquer que vai entrar aqui!
  </Header>
);

export const SecondaryColor = () => <Header color="secondary">Conteúdo qualquer que vai entrar aqui!</Header>;
