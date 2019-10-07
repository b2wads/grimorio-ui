import React from 'react';
import cx from 'classnames';
import styles from './beacon.styl';

const Beacon = ({ className }) => {
  return <span className={cx(className, styles.beacon)} />;
};

export default Beacon;
