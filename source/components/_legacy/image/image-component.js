import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
// styles
import styles from './image.styl';

class Image extends PureComponent {
  static defaultProps = {
    rounded: false,
    circle: false,
    thumbnail: false,
    size: 'medium',
    align: 'left',
    path: false,
    className: undefined,
  };

  static propTypes = {
    rounded: PropTypes.bool,
    circle: PropTypes.bool,
    thumbnail: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    align: PropTypes.oneOf(['left', 'center', 'right']),
    path: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  render() {
    const { rounded, circle, thumbnail, size, path, align, className, ...elementProps } = this.props;

    const fullClassName = classNames(className, {
      [styles[size]]: size,
      [styles.rounded]: rounded,
      [styles.circle]: circle,
      [styles.thumbnail]: thumbnail,
    });

    if (!path || path === '') {
      return null;
    }

    return (
      <figure className={styles[align]}>
        <img {...elementProps} src={path} className={fullClassName} />
      </figure>
    );
  }
}

export default CSSModules(Image, styles);
