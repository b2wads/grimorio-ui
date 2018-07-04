import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
// styles
import styles from './panel.styl';

class Panel extends PureComponent {
  static defaultProps = {
    scroll: false,
    header: undefined,
    footer: undefined,
    footerAddon: undefined,
    children: undefined,
    className: undefined,
  };

  static propTypes = {
    scroll: PropTypes.bool,
    header: PropTypes.string,
    footer: PropTypes.string,
    footerAddon: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { children, scroll, header, footer, footerAddon, className, ...elementProps } = this.props;

    const fullClassName = classNames(className, styles.panel);

    if (!children) {
      return null;
    }

    return (
      <section className={fullClassName}>
        {header &&
          <header className={styles['panel-header']}>
            <h3>{header}</h3>
          </header>}
        {children &&
          <div
            className={classNames(styles['panel-content'], { [styles['panel-content--scroll']]: scroll })}
            {...elementProps}
          >
            {children}
          </div>}
        {footer &&
          <footer className={styles['panel-footer']}>
            <span className={styles['panel-footer-info']}>{footer}</span>
            <span className={styles['panel-footer-addon']}>{footerAddon}</span>
          </footer>}
      </section>
    );
  }
}

export default CSSModules(Panel, styles);
