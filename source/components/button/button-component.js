import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import Loader from '../loader';
import Icon from '../icon';

// styles
import styles from './button.styl';

function Button({
  color,
  modifier,
  size,
  disabled,
  active,
  type,
  className,
  block,
  iconLeft,
  iconRight,
  loading,
  onClick,
  children,
  ...elementProps
}) {
  function getLoaderColor() {
    if (/^outline/.test(modifier) || ['clean', 'transparent'].includes(color)) {
      return 'default';
    } else {
      return 'secondary';
    }
  }

  const fullClassName = classNames(className, {
    [styles[color]]: color,
    [styles[modifier]]: modifier,
    [styles.isActive]: active,
    [styles[size]]: size,
    [styles.block]: block,
    [styles.isLoading]: loading,
  });

  if (!children) {
    return null;
  }

  return (
    <button {...elementProps} type={type} className={fullClassName} onClick={onClick} disabled={loading || disabled}>
      {iconLeft && <Icon className={styles.iconLeft} size={15} name={iconLeft} />}
      {children}
      {loading && <Loader className={styles.btnLoad} size="15px" style={getLoaderColor()} />}
      {iconRight && <Icon className={styles.iconRight} size={15} name={iconRight} />}
    </button>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  block: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  color: PropTypes.oneOf(['primary', 'secondary', 'variant', 'clean', 'transparent']),
  modifier: PropTypes.oneOf(['inverted', 'outline', 'outline-light']),
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'none']),
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  loading: PropTypes.bool,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  color: 'primary',
  size: 'medium',
  type: 'button',
  children: false,
  className: undefined,
  active: false,
};

export default Button;
