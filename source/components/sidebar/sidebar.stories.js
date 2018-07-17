import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

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

stories.addWithInfo('Default', () => {
  const activeIndex = number('activeIndex', -1);

  return (
    <div>
      <Sidebar>
        <SidebarLogotype>
          <Svg width={188} height={58} src="logo/acom" />
        </SidebarLogotype>
        <SidebarContent>
          <Accordion type="menu">
            <Menu type="accordion">
              <MenuItem active={activeIndex === 0}>
                <AccordionTitle
                  active={activeIndex === 0}
                  index={0}
                  onClick={action('clicked!!')}
                  icon="dashboard"
                >
                  Dashboard
                </AccordionTitle>
                <AccordionContent active={activeIndex === 0}>
                  <Menu>
                    <MenuItem link="/default" handleClick={action('default')}> Default</MenuItem>
                    <MenuItem link="/ecommerce" handleClick={action('ecommerce')}>eCommerce</MenuItem>
                    <MenuItem link="/news-portal" handleClick={action('news-portal')}>News Portal</MenuItem>
                  </Menu>
                </AccordionContent>
              </MenuItem>
              <MenuItem active={activeIndex === 1}>
                <AccordionTitle
                  active={activeIndex === 1}
                  index={1}
                  onClick={action('clicked!!')}
                  icon="insert_chart"
                >
                  Charts
                </AccordionTitle>
                <AccordionContent active={activeIndex === 1}>
                  <Menu>
                    <MenuItem link="/test" handleClick={action('test')}>Test</MenuItem>
                  </Menu>
                </AccordionContent>
              </MenuItem>
            </Menu>
          </Accordion>
        </SidebarContent>
      </Sidebar>
    </div>
  );
});
