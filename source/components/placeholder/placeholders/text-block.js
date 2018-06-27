import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
// style
import styles from '../placeholder.styl';

import TextRow from './text-row';

const widths = [97, 100, 94, 90, 98, 95, 98, 40];

class TextBlock extends PureComponent {
  constructor(props) {
    super(props);

    this.getRowStyle = this.getRowStyle.bind(this);
    this.getRows = this.getRows.bind(this);
  }

  static propTypes = {
    rows: PropTypes.number.isRequired,
    lineSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.object,
    className: PropTypes.string,
  };

  getRowStyle(i) {
    const { rows } = this.props;

    return {
      maxHeight: `${100 / (rows * 2 - 1)}%`,
      width: `${widths[(i + widths.length) % widths.length]}%`,
    };
  }

  getRows() {
    const { rows, lineSpacing } = this.props;
    const range = Array.apply(null, { length: rows }); // eslint-disable-line prefer-spread
    return range.map((x, i) => <TextRow style={this.getRowStyle(i)} lineSpacing={i !== 0 ? lineSpacing : 0} key={x} />);
  }

  render() {
    const { style, className } = this.props;

    const fullClass = [styles.textBlock, className].filter(c => c).join(' ');

    return (
      <div className={fullClass} style={{ ...style }}>
        {this.getRows()}
      </div>
    );
  }
}

export default CSSModules(TextBlock, styles);
