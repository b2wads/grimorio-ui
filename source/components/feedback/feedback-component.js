import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CSSModules from 'react-css-modules';
import Icon from '../icon';
import styles from './feedback.styl';
import Button from '../button';

class Feedback extends Component {
  static propTypes = {
    message: PropTypes.string,
    type: PropTypes.oneOf(['success', 'fail']),
    isMobile: PropTypes.bool,
    timeToClose: PropTypes.number,
  };

  static defaultProps = {
    onDismiss: () => '',
    isMobile: false,
    isOpen: true,
    timeToClose: 5000,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.timer = this.timer.bind(this);
  }

  handleClick() {
    this.props.onDismiss();
  }

  componentDidMount() {
    const { timeToClose } = this.props;
    setTimeout(this.timer, timeToClose);
  }

  timer() {
    this.setState({ isOpen: false });
    this.handleClick();
  }

  render() {
    const { message, type, isMobile, className } = this.props;

    const typeFeedback = cx(styles.default, {
      [styles[type]]: type,
    });

    const iconType = cx({
      [styles.icon]: type === 'success',
      [styles.iconError]: type === 'fail',
    });

    const positionFeedback = cx(className, {
      [styles.mobilePosition]: isMobile,
      [styles.defaultPosition]: !isMobile,
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
