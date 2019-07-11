import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Breadcrumb from './breadcrumb-component';

const stories = storiesOf('Breadcrumb', module);

stories.addDecorator(withKnobs);

stories.add('Normal', () => {
  return (
    <Breadcrumb
      home="Dashboard"
      onItemClick={path => console.log(path)}
      path="department/category/my-amazing-category"
    />
  );
});

stories.add('No Home', () => {
  return (
    <div>
      <Breadcrumb
        onItemClick={path => console.log(path)}
        path="department/category/my-amazing-category"
      />

      <Breadcrumb
        onItemClick={path => console.log(path)}
        path="department"
      />
    </div>
  );
});
