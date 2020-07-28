import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Svg from '../svg';
import Header from './header-component';

const stories = storiesOf('Header', module);

stories.addDecorator(withKnobs);

stories.add('Normal', () =>
  <Header >
    Conteúdo qualquer que vai entrar aqui!
  </Header>
);

stories.add('With Logo', () =>
  <Header
    showLogo
    onLogoClick={() => alert('logo!')}
    logo={
      <Svg width={188} height={58} src="logo/afiliados" />
    }
  >
    Conteúdo qualquer que vai entrar aqui!
  </Header>
);
