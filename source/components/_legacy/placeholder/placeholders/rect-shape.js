import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
// style
import styles from '../placeholder.styl';

class RectShape extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };

  render() {
    const { className, style } = this.props;
    const fullClass = [styles.rect, className].filter(c => c).join(' ');

    return <div className={fullClass} style={{ ...style }} />;
  }
}

export default CSSModules(RectShape, styles);
