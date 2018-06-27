import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
// styles
import styles from './button.styl';

class Button extends PureComponent {
  static defaultProps = {
    active: false,
    disabled: false,
    block: false,
    outline: false,
    rounded: false,
    circle: false,
    loading: false,
    style: 'default',
    size: 'medium',
    type: 'button',
    children: false,
    className: undefined,
  };

  static propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    circle: PropTypes.bool,
    loading: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    style: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger', 'transparent']),
    size: PropTypes.oneOf(['mini', 'small', 'medium', 'large', 'none']),
    onClick: PropTypes.func,
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
  };

  render() {
    const {
      active,
      outline,
      rounded,
      circle,
      block,
      style,
      size,
      disabled,
      loading,
      onClick,
      children,
      type,
      className,
      ...elementProps
    } = this.props;

    const fullClassName = classNames(className, {
      [`${styles[style]}`]: style,
      [`${styles[size]}`]: size,
      [`${styles.block}`]: block,
      [`${styles.outline}`]: outline,
      [`${styles.rounded}`]: rounded,
      [`${styles.circle}`]: circle,
      [`${styles.active}`]: active,
      [`${styles.loading}`]: loading,
    });

    if (!children) {
      return null;
    }

    return (
      <button {...elementProps} type={type} className={fullClassName} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }
}

export default CSSModules(Button, styles);
