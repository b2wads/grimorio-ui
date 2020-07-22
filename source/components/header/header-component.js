import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import cx from 'classnames';

import { omit } from '../../helpers';

import styles from './header.styl';
import Icon from '../icon';

class Header extends PureComponent {
  static propTypes = {
    isMobile: PropTypes.bool,
    onLogoClick: PropTypes.func,
  };

  static defaultProps = {
    isMobile: false,
  };

  renderButton() {
    return (
      <Fragment>
        <Icon className={styles.iconRight} name="arrow_drop_down" size="20" />
      </Fragment>
    );
  }

  renderLogoMobile() {
    const { logo, onLogoClick } = this.props;
    return (
      <div className={styles.logo} onClick={onLogoClick}>
        {logo}
      </div>
    );
  }

  renderContent() {
    const { isMobile } = this.props;
    return (
      <Fragment>
        {isMobile ? this.renderLogoMobile() : null}
      </Fragment>
    );
  }

  render() {
    const { className, isMobile, children, ...elementProps } = this.props;
    const fullClassName = cx(className, styles.header, {
      [styles.isMobile]: isMobile,
    });

    return (
      <header className={fullClassName} {...omit(elementProps, ['onLogoClick'])}>
        {children || this.renderContent()}
      </header>
    );
  }
}

export default CSSModules(Header, styles);
