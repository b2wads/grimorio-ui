import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import cx from 'classnames';

import Svg from '../svg';
import Icon from '../icon';
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
    titleClassName: PropTypes.string,
    loading: PropTypes.bool,
    accordion: PropTypes.bool,
    open: PropTypes.bool,
    noPadding: PropTypes.bool,
    onAccordionClick: PropTypes.func,
  };

  static defaultProps = {
    brand: null,
    title: false,
    size: 'medium',
    loading: false,
    accordion: false,
    open: true,
    sizeTitle: 21,
  };

  componentDidMount() {
    this.state.height === null &&
      this.setState({
        height: this.content ? this.content.scrollHeight : null,
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const height = this.content ? this.content.scrollHeight : null;

    if (this.props.open !== prevProps.open) {
      this.setState({ open: this.props.open });
    }

    if (prevState.height !== height) {
      this.setState({ height });
    }
  }

  renderIcon(open) {
    return (
      <Icon
        onClick={this.toggleTitle}
        className={styles.arrow}
        name={open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
      />
    );
  }

  renderHeader(brand, title, accordion, open, size, titleClassName) {
    if (brand) {
      return (
        <header className={styles[brand]}>
          <Svg className={styles.brandLogo} src={`logo/${brand}-full`} />
        </header>
      );
    } else {
      return (
        <header className={cx(styles.titleWrap, { [styles.isAccordion]: accordion })}>
          <span className={cx(styles.title, titleClassName)} style={{ fontSize: `${size}px` }}>{title}</span>
          {accordion && this.renderIcon(open)}
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
    const { onAccordionClick } = this.props;
    this.setState({
      open: !this.state.open,
      height: this.content ? this.content.scrollHeight : null,
    });

    onAccordionClick && onAccordionClick();
  }

  render() {
    const { open, height } = this.state;
    const {
      title,
      children,
      className,
      brand,
      noPadding,
      size,
      sizeTitle,
      footer,
      contentClassName,
      footerClassName,
      titleClassName,
      loading,
      accordion,
      ...rest
    } = this.props;

    const fullClassName = cx(className, {
      [styles.default]: true,
    });

    const wrapperClass = cx(styles.wrapper, {
      [styles[size]]: size,
      [styles.isBrand]: brand,
      [styles.noPadding]: noPadding,
    });

    const contentClass = cx(styles.content, contentClassName, {
      [styles.isBrand]: brand,
      [styles.noPadding]: noPadding,
      [styles.isClosed]: !open,
    });

    let style = {};

    if (accordion) {
      style = {
        maxHeight: open ? height : `0px`,
      };
    }

    return (
      <article {...rest} className={fullClassName}>
        <div className={wrapperClass}>
          {(title || brand) && this.renderHeader(brand, title, accordion, open, sizeTitle, titleClassName)}
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
