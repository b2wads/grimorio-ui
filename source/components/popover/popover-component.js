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
  };
  static defaultProps = {
    onOpen: () => '',
    onClose: () => '',
    isOpen: false,
  };

  render() {
    const { children, component, isOpen } = this.props;
    return (
      <div className={cx(styles.popoverContainer)}>
        {component}
        {isOpen &&
          <div className={cx(styles.popover)}>
            {children}
          </div>}
      </div>
    );
  }
}

export default CSSModules(Popover, styles);
