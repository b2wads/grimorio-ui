import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './tooltip.styl';

// import Panel from '../panel';

class Tooltip extends PureComponent {
  static propTypes = {
    direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    align: PropTypes.oneOf(['left', 'center', 'bottom']),
    message: PropTypes.string,
    width: PropTypes.string,
  };

  static defaultProps = {
    direction: 'top',
    align: 'center',
    message: '',
    width: '150',
    height: '50',
  };

  render() {
    const { children, message, direction, align, className, ...elementProps } = this.props;

    const finalClass = classNames(className, {
      [styles.default]: true,
      [styles[`${direction}-${align}`]]: align,
    });

    return (
      <span {...elementProps} className={finalClass} data-ttmessage={message}>
        {children}
      </span>
    );
  }
}

export default CSSModules(Tooltip, styles);
