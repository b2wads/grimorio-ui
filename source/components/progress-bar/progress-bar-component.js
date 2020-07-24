import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './progress-bar.styl';

class ProgressBar extends PureComponent {
  static propTypes = {
    progress: PropTypes.number,
    theme: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error']),
  };

  static defaultProps = {
    progress: 0,
    theme: 'primary',
  };

  render() {
    const { progress, className, theme } = this.props;
    const progressClass = classNames(styles.progressBar, {
      [styles[theme]]: theme,
    });

    const progressWrap = classNames(styles.progressWrap, className);
    const progressStyle = { width: `${progress}%` };

    return (
      <div className={progressWrap}>
        <span style={progressStyle} className={progressClass} />
      </div>
    );
  }
}

export default CSSModules(ProgressBar, styles);
