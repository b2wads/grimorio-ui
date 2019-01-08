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
    loading: PropTypes.bool,
    accordion: PropTypes.bool,
    open: PropTypes.bool,
    onAccordionClick: PropTypes.func,
  };

  static defaultProps = {
    brand: null,
    title: false,
    size: 'medium',
    loading: false,
    accordion: false,
    open: true,
  };

  componentDidUpdate(prevProps) {
    if (this.props.open !== prevProps.open) {
      this.setState({ open: this.props.open });
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

  renderHeader(brand, title, accordion, open) {
    if (brand) {
      return (
        <header className={styles[brand]}>
          <Svg className={styles.brandLogo} src={`logo/${brand}-full`} />
        </header>
      );
    } else {
      return (
        <header className={cx(styles.title, { [styles.isAccordion]: accordion })}>
          {title}
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
      height: this.content.scrollHeight,
    });

    onAccordionClick();
  }

  componentDidMount() {
    this.state.height === null &&
      this.setState({
        height: this.content.scrollHeight,
      });
  }

  render() {
    const { open, height } = this.state;
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
      accordion,
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
      [styles.isClosed]: !open,
    });

    let style = {
      maxHeight: open ? height : `0px`,
    };

    return (
      <article {...rest} className={fullClassName}>
        <div className={wrapperClass}>
          {(title || brand) && this.renderHeader(brand, title, accordion, open)}
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
