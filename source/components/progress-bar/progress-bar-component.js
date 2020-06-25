import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './progress-bar.styl';

class ProgressBar extends PureComponent {
  static propTypes = {
    progress: PropTypes.number,
    className: PropTypes.string,
    theme: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error'])
  };
  static defaultProps = {
    progress: 50,
    className: 'my-progress',
    theme: 'primary'
  };

  render() {
    return <div>ProgressBar</div>;
    // exemplo como chamar
    //<ProgressBar progress={50} className="my-progress" theme="primary" />
  }
}

export default CSSModules(ProgressBar, styles);
