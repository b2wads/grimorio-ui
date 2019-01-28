import React from 'react';
import CSSModules from 'react-css-modules';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './popover.styl';

class Popover extends React.PureComponent {
  static propTypes = {
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    isOpen: PropTypes.bool,
    actionComponent: PropTypes.node.isRequired,
    position: PropTypes.oneOf(['bottomRight', 'bottomLeft', 'topRight', 'topLeft']),
    className: PropTypes.string,
  };
  static defaultProps = {
    onOpen: () => '',
    onClose: () => '',
    isOpen: false,
    position: 'bottomRight',
  };

  render() {
    const { children, actionComponent, isOpen, position, className, ...rest } = this.props;
    return (
      <div className={cx([styles.popoverContainer, className])} {...rest}>
        {actionComponent}
        {isOpen &&
          <div
            className={cx(styles.popover, {
              [styles[position]]: position,
            })}
          >
            {children}
          </div>}
      </div>
    );
  }
}

export default CSSModules(Popover, styles);
