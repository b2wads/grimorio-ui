import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Svg from '../svg';
import Loader from '../loader';

import styles from './panel.styl';

class Panel extends PureComponent {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large', 'no-padding']),
    brand: PropTypes.oneOf([null, 'acom', 'suba', 'shop', 'soub']),
    title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.element]),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    contentClassName: PropTypes.string,
    footer: PropTypes.element,
    footerClassName: PropTypes.string,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    brand: null,
    title: false,
    size: 'medium',
    loading: false,
  };

  renderHeader(brand, title) {
    if (brand) {
      return (
        <header className={styles[brand]}>
          <Svg className={styles.brandLogo} src={`logo/${brand}-full`} />
        </header>
      );
    } else {
      return (
        <header className={styles.title}>
          {title}
        </header>
      );
    }
  }

  renderFooter(footer, size, footerClassName) {
    if (footer) {
      return (
        <footer className={classNames(styles.footer, { [styles[size]]: size }, footerClassName)}>
          {footer}
        </footer>
      );
    }
  }

  render() {
    const {
      title,
      children,
      className,
      brand,
      size,
      footer,
      contentClassName,
      footerClassName,
      loading,
      ...rest
    } = this.props;

    const fullClassName = classNames(className, {
      [styles.default]: true,
    });

    const wrapperClass = classNames(styles.wrapper, {
      [styles[size]]: size,
      [styles.isBrand]: brand,
    });

    return (
      <article {...rest} className={fullClassName}>
        <div className={wrapperClass}>
          {(title || brand) && this.renderHeader(brand, title)}
          {loading && <Loader size="32px" className={styles.loader} />}
          {!loading &&
            <div className={classNames(styles.content, contentClassName, { [styles.isBrand]: brand })}>
              {children}
            </div>}
        </div>
        {this.renderFooter(footer, size, footerClassName)}
      </article>
    );
  }
}

export default CSSModules(Panel, styles);
