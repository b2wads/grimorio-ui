import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import cx from 'classnames';

import Icon from '../icon';
import Loader from '../loader';

import styles from './panel.styl';

class Panel extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      open: props.open,
    };

    this.toggleTitle = this.toggleTitle.bind(this);
  }

  static propTypes = {
    highlight: PropTypes.oneOf(['shadow', 'line']),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'no-padding']),
    title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.element]),
    titleClassName: PropTypes.string,
    titleBorder: PropTypes.bool,
    titleSideComponent: PropTypes.element,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    contentClassName: PropTypes.string,
    footer: PropTypes.element,
    footerClassName: PropTypes.string,
    loading: PropTypes.bool,
    accordion: PropTypes.bool,
    open: PropTypes.bool,
    noPadding: PropTypes.bool,
    onAccordionClick: PropTypes.func,
  };

  static defaultProps = {
    title: false,
    size: 'medium',
    loading: false,
    accordion: false,
    open: true,
    highlight: 'shadow',
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

  renderHeader() {
    const { open } = this.state;
    const { title, titleClassName, accordion, titleBorder, size, titleSideComponent } = this.props;

    return (
      <header
        className={cx(styles.header, styles.titleWrap, {
          [styles.isAccordion]: accordion,
          [styles.titleBorder]: titleBorder && open,
          [styles[size]]: size,
          [styles.isClosed]: !open,
        })}
      >
        <span className={cx(styles.title, titleClassName)}>
          {title}
          {titleSideComponent}
        </span>
        {accordion && this.renderIcon(open)}
      </header>
    );
  }

  renderFooter(footer, size, footerClassName) {
    const className = cx(styles.footer, footerClassName, {
      [styles[size]]: size && this.state.open,
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
    });

    onAccordionClick && onAccordionClick();
  }

  render() {
    const { open } = this.state;
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
      highlight,
      ...rest
    } = this.props;

    const fullClassName = cx(className, {
      [styles.default]: true,
      [styles[highlight]]: highlight,
    });

    const contentClass = cx(styles.content, contentClassName, {
      [styles[size]]: size && open,
      [styles.isBrand]: brand,
      [styles.noPadding]: noPadding,
      [styles.isClosed]: !open,
    });

    return (
      <article {...rest} className={fullClassName}>
        {(title || header) && this.renderHeader()}

        <div className={contentClass}>
          {loading && <Loader size="32px" className={styles.loader} />}
          {!loading && children}
        </div>

        {this.renderFooter(footer, size, footerClassName)}
      </article>
    );
  }
}

export default CSSModules(Panel, styles);
