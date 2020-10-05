import React from 'react';

import Toggle from './toggle-component';

export default {
  title: 'Toggle',
  component: Toggle,
};

const action = (name) => (...params) => {
  console.log(name, params);
};

export const Normal = () => (
  <Toggle
    id="my-toggle"
    value="10"
    onChange={(e) => action('value, checked')(e.target.value, e.target.checked)}
  />
);

export const Disabled = () => (
  <div>
    <Toggle
      id="my-toggle-1"
      disabled
      value="10"
      onChange={(e) => action('value, checked')(e.target.value, e.target.checked)}
    />
    <br />
    <br />
    <br />
    <Toggle
      id="my-toggle"
      disabled
      value="10"
      checked={true}
      onChange={(e) => action('value, checked')(e.target.value, e.target.checked)}
    />
  </div>
);
