import React from 'react';

import InfoCard from './info-card-component';

export default {
  title: 'InfoCard',
  component: InfoCard,
};

export const Normal = () => (
  <div style={{ display: 'flex' }}>
    <InfoCard title="Pedidos Faturados" type="money" value={666999000} tagline="fevereiro" />
    <InfoCard title="Pedidos Colocados" tagline="fevereiro" value={50} />
  </div>
);

export const Error = () => (
  <div style={{ display: 'flex' }}>
    <InfoCard error tagline="fevereiro" value={50} title="Pedidos Faturados" />
  </div>
);
