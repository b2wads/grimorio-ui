import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './progress-bar.styl';

const ProgressBar = ({ progress, className, theme }) => {
  const progressWrap = cx(styles.progressWrap, className);

  const progressClass = cx(styles.progressBar, {
    [styles[theme]]: theme,
  });

  const progressStyle = { width: `${progress}%` };

  return (
    <div className={progressWrap}>
      <span className={progressClass} style={progressStyle} />
    </div>
  );
};

ProgressBar.defaultProps = {
  progress: 0,
  theme: 'primary',
};

ProgressBar.propTypes = {
  progress: PropTypes.number,
  theme: PropTypes.oneOf(['primary', 'support', 'success', 'warning', 'error']),
};

export default memo(ProgressBar);
