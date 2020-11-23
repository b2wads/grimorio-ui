import React from 'react';
import cx from 'classnames';

import PropTypes from 'prop-types';

import styles from './toggle-button.styl';

const ToggleBool = ({ active, onClick, className }) => {
  return (
    <div className={cx(styles.toggleBool, className)}>
      <span onClick={() => onClick(true)} className={cx(styles.toggleBoolLeft, { [styles.active]: active })}>
        Sim
      </span>

      <span onClick={() => onClick(false)} className={cx(styles.toggleBoolRight, { [styles.active]: !active })}>
        Não
      </span>
    </div>
  );
};

ToggleBool.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ToggleBool;
