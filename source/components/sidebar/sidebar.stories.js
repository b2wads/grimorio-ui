import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import Sidebar from './index';

import Svg from '../svg';

import Menu, { MenuItem } from '../menu';
import Accordion, { AccordionTitle, AccordionContent } from '../accordion';


const stories = storiesOf('Sidebar', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Default', withState({ open: true, active: 0 })(({ store }) => {
  const getActive = (index) => {
    return store.state.active === index;
  }

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { active } = store.state;
    const newIndex = active === index ? -1 : index;

    store.set({ active: newIndex });
  }

  return (
    <div style={{ height: 800 }}>
      <Sidebar onClick={(e, open) => store.set({ open, active: !open ? -1 : store.state.active })}>
        <Accordion type="accordionMenu" exclusive={false} as={Menu} {...store.state}>
          <MenuItem active={getActive(0)} isNotAccordion icon="dashboard">
            Dashboard
          </MenuItem>
          <MenuItem active={getActive(1)}>
            <AccordionTitle
              active={getActive(1)}
              index={1}
              onClick={handleClick}
              icon="shop"
            >
              Promoções
            </AccordionTitle>
            <AccordionContent active={getActive(1)}>
              <Menu>
                <MenuItem link="/default" handleClick={action('default')}> Default</MenuItem>
                <MenuItem link="/ecommerce" handleClick={action('ecommerce')}>eCommerce</MenuItem>
                <MenuItem link="/news-portal" handleClick={action('news-portal')}>News Portal</MenuItem>
              </Menu>
            </AccordionContent>
          </MenuItem>
          <MenuItem active={getActive(2)}>
            <AccordionTitle
              active={getActive(2)}
              index={2}
              onClick={handleClick}
              icon="insert_chart"
            >
              Charts
            </AccordionTitle>
            <AccordionContent active={getActive(2)}>
              <Menu>
                <MenuItem link="/test" handleClick={action('test')}>Test</MenuItem>
              </Menu>
            </AccordionContent>
          </MenuItem>
        </Accordion>
      </Sidebar>
    </div>);
}));
