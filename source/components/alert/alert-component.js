import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Icon from '../icon';
import Button from '../button';

import styles from './alert.styl';

class Alert extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['danger', 'warning', 'success', 'info']),
    content: PropTypes.string,
    title: PropTypes.string,
    action: PropTypes.bool,
    close: PropTypes.bool,
    actionText: PropTypes.string,
    onClick: PropTypes.func,
    overlay: PropTypes.bool,
  };

  static defaultProps = {
    type: 'info',
    action: true,
    close: false,
    overlay: false,
    actionText: 'Okay',
  };

  renderIcon(type) {
    const icons = {
      danger: 'warning',
      warning: 'error_outline',
      info: 'info',
      success: 'check',
    };

    return <Icon size="28px" name={icons[type]} />;
  }

  render() {
    const {
      type,
      title,
      content,
      children,
      action,
      close,
      actionText,
      overlay,
      onClick,
      className,
      ...rest
    } = this.props;

    const alertClassName = classNames(styles.alertWrap, className, {
      [styles[type]]: type,
      [styles.isOverlay]: overlay,
    });

    return (
      <Fragment>
        <div className={alertClassName} {...rest}>
          <div className={styles.icon}>{this.renderIcon(type)}</div>
          <div className={styles.content}>
            <div className={styles.text}>
              <h3 className={styles.title}>{title}</h3>
              {children ? children : content}
            </div>
            {action &&
              !close &&
              <Button className={styles.action} onClick={onClick}>
                {actionText}
              </Button>}
            {close && !action && <Icon name="close" className={styles.close} onClick={onClick} />}
          </div>
        </div>
        {overlay && <div className={styles.overlay} />}
      </Fragment>
    );
  }
}

export default CSSModules(Alert, styles);
