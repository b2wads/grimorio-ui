import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './tooltip.styl';
import Icon from '../icon';

class Tooltip extends PureComponent {
  static propTypes = {
    direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    message: PropTypes.string.isRequired,
    width: PropTypes.string,
    size: PropTypes.number,
  };

  static defaultProps = {
    position: 'top',
    width: 'auto',
    icon: 'info',
  };

  render() {
    const { children, message, position, width, icon, className, size, ...elementProps } = this.props;

    const finalClass = classNames(className, styles.wrapper, {
      [styles.block]: children,
    });

    const customStyle = {
      width,
    };

    return (
      <span {...elementProps} className={finalClass}>
        {children ? children : <Icon name={icon} size={size || 19} />}
        <span style={customStyle} className={classNames(styles.dialog, { [styles[position]]: position })}>
          {message}
        </span>
      </span>
    );
  }
}

export default Tooltip;
