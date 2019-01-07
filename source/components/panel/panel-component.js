import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import cx from 'classnames';

import Svg from '../svg';
import Loader from '../loader';

import styles from './panel.styl';

class Panel extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      open: props.open,
      height: null,
    };

    this.toggleTitle = this.toggleTitle.bind(this);
  }

  static propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large', 'no-padding']),
    brand: PropTypes.oneOf([null, 'acom', 'suba', 'shop', 'soub']),
    title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.element]),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    contentClassName: PropTypes.string,
    footer: PropTypes.element,
    footerClassName: PropTypes.string,
    loading: PropTypes.bool,
    open: PropTypes.bool,
  };

  static defaultProps = {
    brand: null,
    title: false,
    size: 'medium',
    loading: false,
    open: true,
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
    const className = cx(styles.footer, footerClassName, {
      [styles[size]]: size,
      [styles.isClosed]: !this.state.open,
    });

    if (footer) {
      return (
        <footer className={className}>
          {footer}
        </footer>
      );
    }
  }

  toggleTitle() {
    this.setState({
      open: !this.state.open,
      height: this.content.scrollHeight,
    });
  }

  componentDidMount() {
    this.state.height === null &&
      this.setState({
        height: this.content.scrollHeight,
      });
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

    const fullClassName = cx(className, {
      [styles.default]: true,
    });

    const wrapperClass = cx(styles.wrapper, {
      [styles[size]]: size,
      [styles.isBrand]: brand,
    });

    const contentClass = cx(styles.content, contentClassName, {
      [styles.isBrand]: brand,
      [styles.isClosed]: !this.state.open,
    });

    let style = {
      maxHeight: this.state.open ? this.state.height : `0px`,
    };

    return (
      <article {...rest} className={fullClassName}>
        <div className={wrapperClass}>
          {(title || brand) && this.renderHeader(brand, title)}
          {loading && <Loader size="32px" className={styles.loader} />}
          {!loading &&
            <div ref={content => (this.content = content)} className={contentClass} style={style}>
              {children}
            </div>}
        </div>
        {this.renderFooter(footer, size, footerClassName)}
      </article>
    );
  }
}

export default CSSModules(Panel, styles);
