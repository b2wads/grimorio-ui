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
    const { children, message, position, width, icon, className, ...elementProps } = this.props;

    const finalClass = classNames(className, {
      [styles.default]: true,
      [styles.block]: children,
    });

    const customStyle = {
      width,
    };

    return (
      <span {...elementProps} className={finalClass}>
        {children ? children : <Icon name={icon} size={19} />}
        <span style={customStyle} className={classNames(styles.dialog, { [styles[position]]: position })}>
          {message}
        </span>
      </span>
    );
  }
}

export default CSSModules(Tooltip, styles);
