import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
// style
import styles from '../placeholder.styl';

class RoundShape extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };

  render() {
    const { className, style } = this.props;
    const fullClass = [styles.round, className].filter(c => c).join(' ');

    return <div className={fullClass} style={{ ...style }} />;
  }
}

export default CSSModules(RoundShape, styles);
