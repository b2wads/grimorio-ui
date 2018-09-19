import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './loader.styl';

class Loader extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['default', 'full', 'full-page']),
  };
  static defaultProps = {};

  render() {
    const { type, className, ...rest } = this.props;
    const wrapClass = classNames(styles.wrap, className, {
      [styles.isFull]: type === 'full',
      [styles.isFullPage]: type === 'full-page',
    });

    return (
      <div className={wrapClass} {...rest}>
        <span className={styles.spinner} />
      </div>
    );
  }
}

export default CSSModules(Loader, styles);
