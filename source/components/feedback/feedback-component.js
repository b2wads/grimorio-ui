import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Icon from '../icon';
import styles from './feedback.styl';

class Feedback extends PureComponent {
  static propTypes = {
    message: PropTypes.element,
    type: PropTypes.string,
    isMobile: PropTypes.bool,
  };

  render() {
    const { message, type } = this.props;

    return (
      <Fragment>
        {type === 'success' &&
          <div className={styles.success}>
            <Icon className={styles.icon} size="20" name="check" />
            <span className={styles.message}>{message}</span>
            <Icon className={styles.iconClear} name="clear" />
          </div>}
        {type === 'fail' &&
          <div className={styles.fail}>
            <Icon className={styles.iconError} size="22" name="error" />
            <span className={styles.message}>{message}</span>
            <Icon className={styles.iconCleanError} name="clear" />
          </div>}
      </Fragment>
    );
  }
}

export default CSSModules(Feedback, styles);
