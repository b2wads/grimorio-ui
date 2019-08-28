import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import InfoCard from './info-card-component';

const stories = storiesOf('InfoCard', module);

stories.addDecorator(withKnobs);

stories.add('Normal', () => (
  <div style={{ display: 'flex' }}>
    <InfoCard title="Pedidos Faturados" type="money" sizeText={21} value={666999000} tagline="fevereiro" />
    <InfoCard title="Pedidos Colocados" tagline="fevereiro" value={50} />
  </div>
));

stories.add('Error', () => (
  <div style={{ display: 'flex' }}>
    <InfoCard error tagline="fevereiro" value={50} title="Pedidos Faturados" />
  </div>
));
