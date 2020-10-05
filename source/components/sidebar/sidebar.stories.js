import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import Sidebar from './index';

import Svg from '../svg';
import styles from './sidebar.styl';

const stories = storiesOf('Sidebar', module);

stories.addDecorator(withKnobs);

const schema = [
  {
    name: 'Home',
    link: '/home',
    icon: 'person',
    isActive: true
  },
  {
    name: 'Página 1',
    link: '/pag1',
    icon: 'desktop_mac',
  },
  {
    name: 'Um Accordion',
    icon: 'filter',
    submenu: [
      {
        name: 'Item 1',
        link: '/acc/item1',
        isActive: true
      },
     {
        name: 'Item 2',
        link: '/acc/item2',
      },
    ],
   },
   {
    name: 'Outro Accordion',
    icon: 'filter',
    submenu: [
      {
        name: 'Item 1',
        link: '/acc/item1',
      },
     {
        name: 'Item 2',
        link: '/acc/item2',
      },
    ],
   },
  ]

stories.add('Default', withState({ open: false, active: -1 })(({ store }) => {
  return (<div style={{ height: 800 }}>
    <Sidebar
      open={store.state.open}
      onLogoClick={() => alert('logo!')}
      onClick={(e, { open }) => store.set({ open: !store.state.open, active: !open ? -1 : store.state.active })}
      onClickItem={(e, link) => alert(`Clicou no link ${link}`)}
      logo={
        <Svg className={styles.logo} width={188} height={58} src="logo/afiliados" />
      }
      logoSmall={
        <Svg className={styles.logo} width={24} src="logo/afiliados-icon" />
      }
      schema={schema}
    />
  </div>)
}));

stories.add('Mobile', withState({ openMobile: false, active: -1 })(({ store }) => {
  const open = (e, { openMobile }) => {
    store.set({ openMobile: !store.state.openMobile, active: !openMobile ? -1 : store.state.active })
  };

  return (
    <div style={{ height: 800 }}>
      <Sidebar
        isMobile
        openMobile={store.state.openMobile}
        onLogoClick={() => alert('logo!')}
        onClick={open}
        logo={
          <Svg className={styles.logo} width={188} height={58} src="logo/afiliados" />
        }
        logoSmall={
          <Svg className={styles.logo} width={24} src="logo/afiliados-icon" />
        }
        schema={schema}
      />
    </div>
  )
}));