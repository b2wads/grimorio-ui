import React from 'react';
import { configure } from '@storybook/react';
import { setAddon, addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import brandImage from '../internals/logo/logo-grimorio-white.png';


import infoAddon from '@storybook/addon-info';

import "../source/styl/variables.styl";
import "../source/styl/style.styl";
import "../source/styl/vendor/react-dates.styl";
import styles from "./storybook.styl";

addDecorator((fn, { kind, story }) => <div className={styles.container}>
  <header className={styles.header}>
    <h1 className={styles.title}>{kind}</h1>
    <h2 className={styles.subtitle}>{story}</h2>
  </header>
  <div className={styles.body}>
    {fn()}
  </div>
</div>);

setAddon(infoAddon);
addParameters({
  options: {
    theme: create({
      base: 'dark',
      brandTitle: 'Grimório✨',
      brandUrl: 'https://github.com/b2wads/grimorio-ui#readme',
      brandImage,

      // colorPrimary: '#5e4596',
      colorSecondary: '#7934d0',

      // UI
      appBg: '#282a36',
      appBorderRadius: 0,

      // Toolbar default and active colors
      barBg: '#282a36',
    }),
  },
});

function loadStories() {
  const req = require.context('../source/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
