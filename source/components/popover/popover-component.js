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
    component: PropTypes.node.isRequired,
    position: PropTypes.oneOf(['bottomRight', 'bottomLeft', 'topRight', 'topLeft']),
  };
  static defaultProps = {
    onOpen: () => '',
    onClose: () => '',
    isOpen: false,
    position: 'bottomRight',
  };

  render() {
    const { children, component, isOpen, position } = this.props;
    return (
      <div className={styles.popoverContainer}>
        {component}
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
