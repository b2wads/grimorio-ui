import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CSSModules from 'react-css-modules';
import Icon from '../icon';
import styles from './feedback.styl';
import Button from '../button';

class Feedback extends Component {
  static propTypes = {
    message: PropTypes.element,
    type: PropTypes.string,
    isMobile: PropTypes.bool,
  };

  static defaultProps = {
    onDismiss: () => '',
    isMobile: false,
    isOpen: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      currentCount: 5,
      stopInterval: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.timer = this.timer.bind(this);
  }

  handleClick() {
    const { onDismiss } = this.props;
    onDismiss();
  }

  componentWillMount() {
    const stopInterval = setInterval(this.timer, 1000);
    this.setState({ stopInterval: stopInterval });
  }

  timer() {
    this.setState({ currentCount: this.state.currentCount - 1 });
    if (this.state.currentCount === 0) {
      this.setState({ isOpen: false });
      clearInterval(this.state.stopInterval);
      this.handleClick();
    }
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
      [styles.defaultPosition]: isMobile !== true,
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
