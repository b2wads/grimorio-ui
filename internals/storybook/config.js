import React from 'react';
import infoAddon from '@storybook/addon-info';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import "../../source/styl/style.styl";
import styles from "../../source/styl/07-pages/storybook.styl";

addDecorator((fn, { kind, story }) => <div className={styles.container}>
  <header className={styles.header}>
    <h1 className={styles.title}>{kind}</h1>
    <h2 className={styles.subtitle}>{story}</h2>
  </header>
  <div className={styles.body}>
    {fn()}
  </div>
  <div className={styles.footer}>
    Click the "?" mark at top-right to view the info.
  </div>
</div>);

setOptions({
  name: 'Afl Theme',
  url: '',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true
});
setAddon(infoAddon);

function loadStories () {
  const req = require.context('../../source/', true, /\.stories\.js$/);
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
