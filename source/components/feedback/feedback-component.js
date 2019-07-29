import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './feedback.styl';

class Feedback extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    sideComponent: PropTypes.element,
    isMobile: PropTypes.bool,
  };

  render() {
    const { title } = this.props;

    return <h1 className={styles.title}>{title}</h1>;
  }
}

export default CSSModules(Feedback, styles);
