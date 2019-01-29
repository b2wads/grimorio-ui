import React from 'react';
import CSSModules from 'react-css-modules';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './popover.styl';

class Popover extends React.PureComponent {
  static propTypes = {
    onOpen: PropTypes.func,
    onDismiss: PropTypes.func,
    isOpen: PropTypes.bool,
    actionComponent: PropTypes.node.isRequired,
    position: PropTypes.oneOf(['bottomRight', 'bottomLeft', 'topRight', 'topLeft']),
    className: PropTypes.string,
  };
  static defaultProps = {
    onOpen: () => '',
    onDismiss: () => '',
    isOpen: false,
    position: 'bottomRight',
  };

  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    const { onDismiss, isOpen } = this.props;

    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && isOpen) {
      onDismiss();
    }
  }

  render() {
    const { children, actionComponent, isOpen, position, className, ...rest } = this.props;
    return (
      <div className={cx([styles.popoverContainer, className])} ref={this.setWrapperRef} {...rest}>
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
