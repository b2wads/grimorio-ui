import React from 'react';
import cx from 'classnames';

import styles from './toogle-button.styl';

const ToogleBool = ({ value, onClick }) => {
  return (
    <div className={styles.toggleBool}>
      <span onClick={() => onClick(1)} className={cx(styles.toggleBoolLeft, { [styles.active]: !!value })}>
        Sim
      </span>

      <span onClick={() => onClick(0)} className={cx(styles.toggleBoolRight, { [styles.active]: !value })}>
        Não
      </span>
    </div>
  );
};

export default ToogleBool;
