import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './tooltip.styl';
import Icon from '../icon';

class Tooltip extends PureComponent {
  static propTypes = {
    direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    message: PropTypes.string,
    width: PropTypes.string,
  };

  static defaultProps = {
    position: 'top',
    message: '',
    width: 'auto',
    icon: 'info',
  };

  render() {
    const { children, message, position, width, icon, className, style, ...elementProps } = this.props;

    const finalClass = classNames(className, {
      [styles.default]: true,
      [styles[position]]: position,
      [styles.block]: children,
    });

    const customStyle = {
      ...style,
      width,
    };

    return (
      <span {...elementProps} style={customStyle} className={finalClass} data-ttmessage={message}>
        {children ? children : <Icon name={icon} size={22} />}
      </span>
    );
  }
}

export default CSSModules(Tooltip, styles);
