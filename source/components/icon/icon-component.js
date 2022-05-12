import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './icon.styl';

function Icon({ name, size, color, align, className, ...elementProps }) {
  const custom = {
    color: color,
    verticalAlign: align,
  };

  if (size) {
    // Prevents scaling issue in IE
    custom.fontSize = `${size}px`;
  }

  return (
    <i style={custom} className={cx('material-icons', styles.icon, className)} {...elementProps}>
      {name}
    </i>
  );
}

Icon.defaultProps = {
  name: 'person', // https://material.io/tools/icons/?style=baseline
  size: 24,
  align: 'middle',
};

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  align: PropTypes.oneOf([
    'baseline',
    'length',
    'sub',
    'super',
    'top',
    'text-top',
    'middle',
    'bottom',
    'text-bottom',
    'initial',
    'inherit',
    'unset',
  ]),
  style: PropTypes.object,
};

export default Icon;
