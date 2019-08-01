import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CSSModules from 'react-css-modules';
import Icon from '../icon';
import styles from './feedback.styl';
import Button from '../button';

class Feedback extends PureComponent {
  static propTypes = {
    message: PropTypes.element,
    type: PropTypes.string,
    isMobile: PropTypes.bool,
  };

  static defaultProps = {
    onDismiss: () => '',
    isMobile: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onDismiss } = this.props;
    onDismiss();
  }

  render() {
    const { message, type, isMobile, isOpen } = this.props;

    const typeFeedback = cx(styles.default, {
      [styles.success]: type === 'success',
      [styles.fail]: type === 'fail',
      [styles.noneFeedback]: isOpen === false,
    });
    const iconType = cx({
      [styles.icon]: type === 'success',
      [styles.iconError]: type === 'fail',
    });

    const positionFeedback = cx({
      [styles.isMobile]: isMobile === true,
      [styles.defaultPosition]: isMobile !== true && isOpen === true,
    });
    const nameIcon = type === 'success' ? 'check' : 'error';

    return (
      <Fragment>
        {this.state.isOpen === true &&
          <div className={positionFeedback}>
            <div className={typeFeedback}>
              <Icon className={iconType} size="20" name={nameIcon} />
              <span className={styles.message}>{message}</span>
              <Button className={styles.buttonClick} onClick={this.handleClick}>
                <Icon className={styles.iconCleanError} size="22" name="clear" />
              </Button>
            </div>
          </div>}
      </Fragment>
    );
  }
}

export default CSSModules(Feedback, styles);
