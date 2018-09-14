import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './modal.styl';

class Modal extends PureComponent {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return <div>Modal</div>;
  }
}

export default CSSModules(Modal, styles);
