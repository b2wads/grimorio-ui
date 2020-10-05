import React from 'react';

import Breadcrumb from './breadcrumb-component';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
};

export const Normal = () => {
  return (
    <Breadcrumb
      home="Dashboard"
      onItemClick={(path) => console.log(path)}
      path="department/category/my-amazing-category"
    />
  );
};

export const NoHome = () => {
  return (
    <div>
      <Breadcrumb
        onItemClick={(path) => console.log(path)}
        path="department/category/my-amazing-category"
      />

      <Breadcrumb onItemClick={(path) => console.log(path)} path="department" />
    </div>
  );
};
