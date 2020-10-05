import React from 'react';

import Menu from './index';
import MenuItem from './elements/menu-item';

export default {
  title: 'Menu',
  component: Menu,
};

export const Default = () => {
  return (
    <Menu
      items={[
        {
          key: 'dashboard',
          icon: 'dashboard',
          name: 'Dashboard',
          items: [
            { key: 'default', name: 'Default', link: '/default' },
            { key: 'ecommerce', name: 'eCommerce', link: '/ecommerce' },
            { key: 'newsportal', name: 'News Portal', link: '/news-portal' },
          ],
        },
        {
          key: 'charts',
          icon: 'insert_chart',
          name: 'Charts',
          items: [{ key: 'test', name: 'Test', link: '/test' }],
        },
      ]}
    />
  );
};

export const Manual = () => {
  return (
    <Menu>
      <MenuItem icon="dashboard">
        Dashboard
        <Menu>
          <MenuItem>Default</MenuItem>
          <MenuItem>eCommerce</MenuItem>
          <MenuItem>News Portal</MenuItem>
        </Menu>
      </MenuItem>
      <MenuItem icon="insert_chart">
        Charts
        <Menu>
          <MenuItem>Default</MenuItem>
        </Menu>
      </MenuItem>
    </Menu>
  );
};
