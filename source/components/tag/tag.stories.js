import React from 'react';

import Tag from './tag-component';

export default {
  title: 'Tag',
  component: Tag,
};

const action = (name) => (...params) => {
  console.log(name, params);
};

export const Normal = () => (
  <div>
    <Tag color="primary">1º Ranking</Tag>
  </div>
);

export const Fixed = () => (
  <div>
    <Tag color="primary" fixed>
      2º Ranking
    </Tag>
  </div>
);

export const OnClick = () => (
  <div>
    <Tag color="primary" onClick={action('onClick!')}>
      Click here ➡️
    </Tag>
  </div>
);


