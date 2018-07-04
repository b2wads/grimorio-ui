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
  };

  static propTypes = {
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    style: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger', 'transparent']),
    size: PropTypes.oneOf(['small', 'medium']),
    onClick: PropTypes.func,
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
  };

  render() {
    const { style, size, disabled, onClick, children, type, className, ...elementProps } = this.props;

    const fullClassName = classNames(className, {
      [`${styles[style]}`]: style,
      [`${styles[size]}`]: size,
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
