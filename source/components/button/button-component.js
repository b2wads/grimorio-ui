import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Loader from '../loader';
import Icon from '../icon';

// styles
import styles from './button.styl';

class Button extends PureComponent {
  static propTypes = {
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    block: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    color: PropTypes.oneOf(['primary', 'secondary', 'variant', 'clean', 'transparent']),
    modifier: PropTypes.oneOf(['inverted', 'outline']),
    size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'none']),
    onClick: PropTypes.func,
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    loading: PropTypes.bool,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    color: 'primary',
    size: 'medium',
    type: 'button',
    children: false,
    className: undefined,
    active: false,
  };

  getLoaderColor() {
    const { color, modifier } = this.props;
    if (modifier === 'outline' || ['clean', 'transparent'].includes(color)) {
      return 'primary';
    } else {
      return 'secondary';
    }
  }

  render() {
    const {
      color,
      modifier,
      size,
      disabled,
      active,
      onClick,
      children,
      type,
      className,
      block,
      iconLeft,
      iconRight,
      loading,
      ...elementProps
    } = this.props;

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
        {loading && <Loader className={styles.btnLoad} size="15px" color={this.getLoaderColor()} />}
        {iconRight && <Icon className={styles.iconRight} size={15} name={iconRight} />}
      </button>
    );
  }
}

export default CSSModules(Button, styles);
