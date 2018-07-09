import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
// style
import styles from '../placeholder.styl';

class TextRow extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    lineSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.object,
    maxHeight: PropTypes.any,
  };

  static defaultProps = {
    lineSpacing: '0.7em',
  };

  render() {
    const { className, maxHeight, lineSpacing, style } = this.props;

    const defaultStyles = {
      maxHeight,
      marginTop: lineSpacing,
    };

    const fullClass = [styles.text, className].filter(c => c).join(' ');

    return <div className={fullClass} style={{ ...defaultStyles, ...style }} />;
  }
}

export default CSSModules(TextRow, styles);
