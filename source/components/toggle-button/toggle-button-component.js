import React from 'react';
import cx from 'classnames';

import styles from './toggle-button.styl';

const ToggleBool = ({ active, onClick }) => {
  return (
    <div className={styles.toggleBool}>
      <span onClick={() => onClick(true)} className={cx(styles.toggleBoolLeft, { [styles.active]: active })}>
        Sim
      </span>

      <span onClick={() => onClick(false)} className={cx(styles.toggleBoolRight, { [styles.active]: !active })}>
        Não
      </span>
    </div>
  );
};

export default ToggleBool;
