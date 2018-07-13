import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Menu from './index';
import MenuItem from './elements/menu-item';

const stories = storiesOf('Menu', module);

stories.addDecorator(withKnobs);

stories.addWithInfo(
  'Default',
  `This is the basic usage with the menu.`,
  () => {
    return (
      <Menu items={[
        {
          key: 'dashboard',
          icon: 'dashboard',
          name: 'Dashboard',
          items: [
            { key: 'default', name: 'Default' },
            { key: 'ecommerce', name: 'eCommerce' },
            { key: 'newsportal', name: 'News Portal' }
          ]
        },
        { key: 'charts', icon: 'insert_chart', name: 'Charts' }
      ]} />
    );
  }
);

stories.addWithInfo(
  'Manual',``,
  () => {
    return (
      <Menu>
        <MenuItem>
          Dashboard
          <Menu>
            <MenuItem>Default</MenuItem>
            <MenuItem>eCommerce</MenuItem>
            <MenuItem>News Portal</MenuItem>
          </Menu>
        </MenuItem>
        <MenuItem>
          Charts
          <Menu>
            <MenuItem>Default</MenuItem>
          </Menu>
        </MenuItem>
      </Menu>
    )
  }
);
