import React from 'react';
import { withState } from '@dump247/storybook-state';

import Sidebar from './index';

import Svg from '../svg';
import styles from './sidebar.styl';

export default {
  title: 'Sidebar',
  component: Sidebar,
};

const action = (name) => (...params) => {
  console.log(name, params);
};

const schema = [
  {
    name: 'Home',
    link: '/home',
    icon: 'person',
    id: 'home-link',
  },
  {
    name: 'Página 1',
    link: '/pag1',
    icon: 'desktop_mac',
    id: 'pag1',
  },
  {
    name: 'Um Accordion',
    icon: 'filter',
    id: 'acc',
    submenu: [
      {
        name: 'Item 1',
        link: '/acc/item1',
        id: 'acc-item1',
      },
     {
        name: 'Item 2',
        link: '/acc/item2',
        id: 'acc-item2',
      },
    ],
   },
   {
    name: 'Outro Accordion',
    icon: 'filter',
    id: 'acc2',
    submenu: [
      {
        name: 'Item 1',
        link: '/acc2/item1',
        id: 'acc2-item1',
      },
     {
        name: 'Item 2',
        link: '/acc2/item2',
        id: 'acc2-item2',
      },
    ],
   },
];

stories.add('Default', withState({ open: true })(({ store }) => {
  return (<div style={{ height: 800 }}>
    <Sidebar
      open={store.state.open}
      onLogoClick={() => alert('logo!')}
      onToggle={() => store.set({ open: !store.state.open })}
      onClickItem={link => alert(`Clicou no link ${link}`)}
      logo={
        <Svg className={styles.logo} width={188} height={58} src="logo/afiliados" />
      }
      logoSmall={
        <Svg className={styles.logo} width={24} src="logo/afiliados-icon" />
      }
      schema={schema}
      initialSection="acc2"
      initialItem="acc2-item2"
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
        // openMobile={store.state.openMobile}
        onLogoClick={() => alert('logo!')}
        onToggle={open}
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
