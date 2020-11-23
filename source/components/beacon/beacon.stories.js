import React from 'react';

import Beacon from './beacon-component';

export default {
  title: 'Beacon',
  component: Beacon,
};

export const Normal = () => {
  return <Beacon className="position" />;
};
