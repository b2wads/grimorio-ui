import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../icon';
import styles from './feedback.styl';
import Button from '../button';

const animationTimespan = 500;

export const Feedback = ({
  message,
  className,
  type = 'success',
  isOpen = true,
  isMobile = false,
  timeToClose = 5000,
  onDismiss = () => {},
}) => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(isOpen);
  const [isAboutToClose, setIsAboutToClose] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsAboutToClose(true), timeToClose + animationTimespan);

    // para considerar o tempo de entrada e saida, multiplica-se por 2 o tempo
    setTimeout(handleEndTimer, timeToClose + 2 * animationTimespan);
  }, []);

  function handleEndTimer() {
    setIsFeedbackOpen(false);
    onDismiss();
  }

  function handleClose() {
    setIsAboutToClose(true);

    setTimeout(handleEndTimer, animationTimespan);
  }

  const typeFeedback = cx(styles.default, {
    [styles[type]]: type,
  });

  const iconType = cx({
    [styles.icon]: type === 'success',
    [styles.iconError]: type === 'fail',
  });

  const positionFeedback = cx(className, {
    [styles.isAboutToClose]: isAboutToClose,
    [styles.mobilePosition]: isMobile,
    [styles.defaultPosition]: !isMobile,
  });
  const nameIcon = type === 'success' ? 'check' : 'error';

  return (
    <Fragment>
      {isFeedbackOpen === true &&
        <div className={positionFeedback}>
          <div className={typeFeedback}>
            <Icon className={iconType} size={26} name={nameIcon} />
            <span className={styles.message}>{message}</span>
            <Button className={styles.buttonClick} onClick={handleClose}>
              <Icon className={styles.iconCleanError} size="20" name="clear" />
            </Button>
          </div>
        </div>}
    </Fragment>
  );
};

Feedback.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(['success', 'fail']),
  isOpen: PropTypes.bool,
  isMobile: PropTypes.bool,
  timeToClose: PropTypes.number,
  onDismiss: PropTypes.func,
};

Feedback.defaultProps = {
  onDismiss: () => {},
  type: 'success',
  isOpen: true,
  isMobile: false,
  timeToClose: 5000,
};
export default Feedback;
