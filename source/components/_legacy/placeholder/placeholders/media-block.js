import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import TextBlock from './text-block';
import RoundShape from './round-shape';
// style
import styles from '../placeholder.styl';

class MediaBlock extends PureComponent {
  static propTypes = {
    rows: PropTypes.number.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
  };

  render() {
    const { className, style, rows } = this.props;
    const fullClass = [styles.media, className].filter(c => c).join(' ');

    return (
      <div className={fullClass} style={{ ...style }}>
        <RoundShape className={styles['media-round']} />
        <TextBlock rows={rows} />
      </div>
    );
  }
}

export default CSSModules(MediaBlock, styles);
