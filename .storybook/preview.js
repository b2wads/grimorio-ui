import React from 'react';

import "../source/styl/variables.styl";
import "../source/styl/style.styl";
import "../source/styl/vendor/react-dates.styl";

import styles from "./storybook.styl";

export const decorators = [(Story, { kind, story }) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.title}>{kind}</h1>
      <h2 className={styles.subtitle}>{story}</h2>
    </header>
    <div className={styles.body}>
      <Story />
    </div>
  </div>
)];
