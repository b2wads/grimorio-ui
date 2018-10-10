import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Icon from '../icon';
import Svg from '../svg';
import Button from '../button';

import styles from './modal.styl';

class Modal extends PureComponent {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    children: PropTypes.element,
    open: PropTypes.bool.isRequired,
    showClose: PropTypes.bool,
    type: PropTypes.oneOf(['custom', 'confirm', 'success', 'fail']),
    confirmInverted: PropTypes.bool,
    showButton: PropTypes.bool,
    message: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    confirmButtonText: PropTypes.string,
    cancelButtonText: PropTypes.string,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func,
  };

  static defaultProps = {
    showClose: true,
    type: 'custom',
    confirmInverted: false,
    showButton: false,
    confirmButtonText: 'Okay',
    cancelButtonText: 'Cancelar',
  };

  renderTypeModal(
    type,
    message,
    onConfirm,
    confirmButtonText,
    cancelButtonText,
    confirmInverted,
    showButton,
    children
  ) {
    switch (type) {
      case 'confirm':
        return this.renderConfirm(message, onConfirm, confirmButtonText, cancelButtonText, confirmInverted);
      case 'fail':
        return this.renderAlert('fail', message, confirmButtonText, showButton);
      case 'success':
        return this.renderAlert('success', message, confirmButtonText, showButton);
      default:
        return children;
    }
  }

  renderAlert(type, message, confirmButtonText, showButton) {
    const { onClose } = this.props;
    return (
      <div className={styles.base}>
        <div className={styles.imageWrap}>
          {type === 'success'
            ? <Svg src="success" width="70px" height="70px" />
            : <Svg src="fail" width="50px" height="50px" />}
        </div>

        <div className={styles.message}>
          {message}
        </div>

        {showButton &&
          <div className={styles.actions}>
            <Button onClick={onClose}>
              {confirmButtonText}
            </Button>
          </div>}
      </div>
    );
  }

  renderConfirm(message, onConfirm, confirmButtonText, cancelButtonText, confirmInverted) {
    const { onClose } = this.props;
    return (
      <div className={styles.base}>
        <div className={styles.imageWrap}>
          <Svg src="fail" width="50px" height="50px" />
        </div>

        <div className={styles.message}>
          {message}
        </div>

        <div className={classNames(styles.actions, { [styles.isReverse]: confirmInverted })}>
          <Button className={styles.button} style={!confirmInverted ? 'outline' : 'primary'} onClick={onClose}>
            {cancelButtonText}
          </Button>
          <Button className={styles.button} style={confirmInverted ? 'outline' : 'primary'} onClick={onConfirm}>
            {confirmButtonText}
          </Button>
        </div>
      </div>
    );
  }

  render() {
    const {
      open,
      type,
      message,
      onConfirm,
      onClose,
      confirmButtonText,
      cancelButtonText,
      confirmInverted,
      showButton,
      children,
      showClose,
      className,
      ...rest
    } = this.props;

    const fullClassName = classNames(className, styles.modal, {
      [styles.isOpen]: open,
    });

    return (
      <div className={classNames(styles.wrap, { [styles.isOpen]: open })}>
        <div className={fullClassName} {...rest}>
          {showClose && <Icon onClick={onClose} className={styles.close} size="20" name="close" />}
          <div className={styles.content}>
            {this.renderTypeModal(
              type,
              message,
              onConfirm,
              confirmButtonText,
              cancelButtonText,
              confirmInverted,
              showButton,
              children
            )}
          </div>
        </div>
        <div onClick={onClose} className={classNames(styles.overlay, { [styles.isOpen]: open })} />
      </div>
    );
  }
}

export default CSSModules(Modal, styles);
