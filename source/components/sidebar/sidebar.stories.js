import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import Sidebar from './index';

import Svg from '../svg';
import styles from './sidebar.styl';

import Menu, { MenuItem } from '../menu';
import Accordion, { AccordionTitle, AccordionContent } from '../accordion';


const stories = storiesOf('Sidebar', module);

stories.addDecorator(withKnobs);

stories.add('Default', withState({ open: false, active: -1 })(({ store }) => {
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
      <Sidebar
        open={store.state.open}
        onLogoClick={() => alert('logo!')}
        onClick={(e, { open }) => store.set({ open: !store.state.open, active: !open ? -1 : store.state.active })}
        logo={
          <Svg className={styles.logo} width={188} height={58} src="logo/afiliados" />
        }
        logoSmall={
          <Svg className={styles.logo} width={24} src="logo/afiliados-icon" />
        }
      >
        <Accordion type="accordionMenu" exclusive={false} as={Menu} {...store.state}>
          <MenuItem title="Dashboard" active={true} isNotAccordion icon="dashboard">
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
                <MenuItem active={true} link="/default" handleClick={action('default')}> Default</MenuItem>
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

stories.add('Mobile', withState({ openMobile: false, active: -1 })(({ store }) => {
  const getActive = (index) => {
    return store.state.active === index;
  }

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { active } = store.state;
    const newIndex = active === index ? -1 : index;

    store.set({ active: newIndex });
  }

  const open = (e, { openMobile }) => {
    store.set({ openMobile: !store.state.openMobile, active: !openMobile ? -1 : store.state.active })
  };

  return (
    <div style={{ height: 800 }}>
      <Sidebar isMobile openMobile={store.state.openMobile} onClick={open} onLogoClick={() => alert('logo!')}>
        <Accordion type="accordionMenu" exclusive={false} as={Menu} open={true}>
          <MenuItem title="Dashboard" active={getActive(0)} isNotAccordion icon="dashboard">
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
