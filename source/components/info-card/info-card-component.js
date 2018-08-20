import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './info-card.styl';

class InfoCard extends PureComponent {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return <div>InfoCard</div>;
  }
}

export default CSSModules(InfoCard, styles);
