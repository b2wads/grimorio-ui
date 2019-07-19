import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './side-modal.styl';

class SideModal extends PureComponent {
  static propTypes = {
    children: PropTypes.element,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    position: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
    width: PropTypes.string,
    height: PropTypes.string,
  };
  static defaultProps = {
    position: 'right',
  };
  getStyles() {
    const objSize = this.getCustomSizes();
    const objPosition = this.getCustomPositions();
    return { ...objSize, ...objPosition };
  }
  getCustomPositions() {
    const { width, height, position, open } = this.props;

    if (width) {
      return { width, [position]: open ? '0px' : `-${width}` };
    } else if (height) {
      return { height, [position]: open ? '0px' : `-${height}` };
    }

    return {};
  }
  getCustomSizes() {
    const { top, bottom } = this.props;

    if (top) {
      return { height: `calc(100vh - ${top}px)`, top: `${top}px` };
    } else if (bottom) {
      return { height: `calc(100vh - ${bottom}px)`, bottom: `${bottom}px` };
    }

    return {};
  }
  render() {
    const { open, onClose, children, position } = this.props;

    return (
      <div className={styles.wrap}>
        <div
          className={classNames(styles.content, styles[position], {
            [styles[`${position}-isOpen`]]: open,
          })}
          style={this.getStyles()}
        >
          <div className="content">
            {children}
          </div>
        </div>
        <div onClick={onClose} className={classNames(styles.overlay, { [styles.isOpen]: open })} />
      </div>
    );
  }
}

export default CSSModules(SideModal, styles);
