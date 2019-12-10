import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import cx from 'classnames';

import { omit } from '../../helpers';

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
    highlight: PropTypes.oneOf(['shadow', 'line']),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'no-padding']),
    title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.element]),
    titleClassName: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    contentClassName: PropTypes.string,
    footer: PropTypes.element,
    footerClassName: PropTypes.string,
    loading: PropTypes.bool,
    accordion: PropTypes.bool,
    open: PropTypes.bool,
    noPadding: PropTypes.bool,
    onAccordionClick: PropTypes.func,
    titleBorder: PropTypes.bool,
  };

  static defaultProps = {
    title: false,
    size: 'medium',
    loading: false,
    accordion: false,
    open: true,
    highlight: 'shadow',
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

  renderHeader() {
    const { open } = this.state;
    const { title, titleClassName, accordion, titleBorder, size } = this.props;

    return (
      <header
        className={cx(styles.header, styles.titleWrap, {
          [styles.isAccordion]: accordion,
          [styles.titleBorder]: titleBorder,
          [styles[size]]: size,
        })}
      >
        <span className={cx(styles.title, titleClassName)}>{title}</span>
        {accordion && this.renderIcon(open)}
      </header>
    );
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
      header,
      children,
      className,
      brand,
      noPadding,
      size,
      footer,
      contentClassName,
      footerClassName,
      loading,
      accordion,
      highlight,
      ...rest
    } = this.props;

    const fullClassName = cx(className, {
      [styles.default]: true,
      [styles[highlight]]: highlight,
    });

    // const wrapperClass = cx(styles.wrapper, {
    //   [styles[size]]: size,
    //   [styles.isClosed]: !this.state.open,
    // });

    const contentClass = cx(styles.content, contentClassName, {
      [styles[size]]: size,
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
      <article {...omit(rest, ['central'])} className={fullClassName}>
        {(title || header) && this.renderHeader()}

        {/* <div className={wrapperClass}>
          {!loading &&

        </div> */}

        <div ref={content => (this.content = content)} className={contentClass} style={style}>
          {loading && <Loader size="32px" className={styles.loader} />}
          {!loading && children}
        </div>

        {this.renderFooter(footer, size, footerClassName)}
      </article>
    );
  }
}

export default CSSModules(Panel, styles);
