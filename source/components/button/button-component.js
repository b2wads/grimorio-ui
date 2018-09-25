import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
// styles
import styles from './button.styl';

class Button extends PureComponent {
  static defaultProps = {
    disabled: false,
    style: 'primary',
    size: 'medium',
    type: 'button',
    children: false,
    className: undefined,
    active: false,
  };

  static propTypes = {
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    block: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    style: PropTypes.oneOf(['primary', 'secondary', 'clean', 'transparent']),
    modifier: PropTypes.oneOf(['inverted']),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'none']),
    onClick: PropTypes.func,
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
  };

  // TO-DO Button with loader

  render() {
    const {
      style,
      modifier,
      size,
      disabled,
      active,
      onClick,
      children,
      type,
      className,
      block,
      ...elementProps
    } = this.props;

    const fullClassName = classNames(className, {
      [styles[style]]: style,
      [styles[modifier]]: modifier,
      [styles.isActive]: active,
      [styles[size]]: size,
      [styles.block]: block,
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
