import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Icon from '../icon';

import styles from './modal.styl';

class Modal extends PureComponent {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  static propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    showClose: PropTypes.bool,
    closeModal: PropTypes.func,
  };

  static defaultProps = {
    showClose: true,
  };

  closeModal() {
    this.props.closeModal && this.props.closeModal();
  }

  render() {
    const { open, children, showClose, className, ...rest } = this.props;
    const fullClassName = classNames(className, styles.modal, {
      [styles.isOpen]: open,
    });

    return (
      <div className={classNames(styles.wrap, { [styles.isOpen]: open })}>
        <div className={fullClassName} {...rest}>
          {showClose && <Icon onClick={this.closeModal} className={styles.close} size="20" name="close" />}
          <div className={styles.content}>{children}</div>
        </div>
        <div onClick={this.closeModal} className={classNames(styles.overlay, { [styles.isOpen]: open })} />
      </div>
    );
  }
}

export default CSSModules(Modal, styles);
