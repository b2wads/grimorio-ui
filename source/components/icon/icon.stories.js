import React from 'react';

import Icon from './icon-component';

export default {
  title: 'Icon',
  component: Icon,
};

export const Normal = () => (
  <div>
    <Icon />
    <Icon name="pets" />
    <Icon name="link" size={48} />
  </div>
);
