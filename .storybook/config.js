import React from 'react';
import { configure } from '@storybook/react';
import { setAddon, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';


import infoAddon from '@storybook/addon-info';

import "../source/styl/style.styl";
import 'react-dates/lib/css/_datepicker.css';
import styles from "../source/styl/03-pages/storybook.styl";

addDecorator((fn, { kind, story }) => <div className={styles.container}>
  <header className={styles.header}>
    <h1 className={styles.title}>{kind}</h1>
    <h2 className={styles.subtitle}>{story}</h2>
  </header>
  <div className={styles.body}>
    {fn()}
  </div>
</div>);

setOptions({
  name: 'Grimório ✨',
});

setAddon(infoAddon);
addParameters({
  options: {
    theme: themes.dark,
  },
});

configure(loadStories, module);

function loadStories() {
  const req = require.context('../source/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
