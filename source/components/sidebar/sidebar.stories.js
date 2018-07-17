import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import Sidebar from './index';
import SidebarLogotype from './elements/sidebar-logotype';
import SidebarContent from './elements/sidebar-content';

import Svg from '../svg';

import Menu from '../menu';
import MenuItem from '../menu/elements//menu-item';

import Accordion from '../accordion';
import AccordionTitle from '../accordion/elements/accordion-title';
import AccordionContent from '../accordion/elements/accordion-content';


const stories = storiesOf('Sidebar', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Default', withState({ open: true, active: -1 })(({ store }) => {

  return (
    <div style={{ height: 800 }}>
      <Sidebar onClick={(e, open) => store.set({ open })}>
        <SidebarLogotype>
          { store.state.open ? <Svg width={188} height={58} src="logo/afiliados" /> : ''}
        </SidebarLogotype>
        <SidebarContent>
          <Accordion type="accordionMenu" as={Menu} {...store.state}>
            <MenuItem active={store.state.active === 0}>
              <AccordionTitle
                active={store.state.active === 0}
                index={0}
                onClick={() => store.set({ active: 0 })}
                icon="dashboard"
              >
                Dashboard
              </AccordionTitle>
              <AccordionContent active={store.state.active === 0}>
                <Menu>
                  <MenuItem link="/default" handleClick={action('default')}> Default</MenuItem>
                  <MenuItem link="/ecommerce" handleClick={action('ecommerce')}>eCommerce</MenuItem>
                  <MenuItem link="/news-portal" handleClick={action('news-portal')}>News Portal</MenuItem>
                </Menu>
              </AccordionContent>
            </MenuItem>
            <MenuItem active={store.state.active === 1}>
              <AccordionTitle
                active={store.state.active === 1}
                index={1}
                onClick={() => store.set({ active: 1 })}
                icon="insert_chart"
              >
                Charts
              </AccordionTitle>
              <AccordionContent active={store.state.active === 1}>
                <Menu>
                  <MenuItem link="/test" handleClick={action('test')}>Test</MenuItem>
                </Menu>
              </AccordionContent>
            </MenuItem>
          </Accordion>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}));
