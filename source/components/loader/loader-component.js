import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './loader.styl';

class Loader extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['default', 'full', 'full-page']),
    color: PropTypes.oneOf(['primary', 'secondary']),
    background: PropTypes.oneOf(['white', 'black']),
  };

  static defaultProps = {
    type: 'default',
    color: 'primary',
    background: 'white',
  };

  render() {
    const { type, color, background, className, ...rest } = this.props;
    const wrapClass = classNames(styles.wrap, className, {
      [styles.isFull]: type === 'full',
      [styles.isFullPage]: type === 'full-page',
      [styles.isWhite]: background === 'white',
      [styles.isBlack]: background === 'black',
    });

    const spinnerClass = classNames(styles.spinner, {
      [styles[color]]: color,
    });

    return (
      <div className={wrapClass} {...rest}>
        <span className={spinnerClass} />
      </div>
    );
  }
}

export default CSSModules(Loader, styles);
