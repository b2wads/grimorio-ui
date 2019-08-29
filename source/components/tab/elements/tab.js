import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from '../tab.styl';

class Tab extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
  };

  render() {
    console.log('x', this.props);
    return <li onClick={this.props.onClick}>{this.props.children}</li>;
  }
}

export default CSSModules(Tab, styles);
