import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Icon from '../icon';
import Svg from '../svg';

import styles from './sidebar.styl';

class Sidebar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { open: true, openMobile: false };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func,
    onLogoClick: PropTypes.func,
    isMobile: PropTypes.bool,
    open: PropTypes.bool,
    openMobile: PropTypes.bool,
  };

  static defaultProps = {
    open: null,
    openMobile: null,
    isMobile: false,
  };

  handleToggle(e) {
    const { isMobile } = this.props;
    const { open, openMobile } = this.state;
    const changeOpen = isMobile ? { openMobile: !openMobile } : { open: !open };

    this.setState(changeOpen, () => {
      this.props.onClick(e, { open: this.state.open, openMobile: !this.state.openMobile });
    });
  }

  handleLogoClick(e) {
    this.props.onLogoClick();
  }

  render() {
    const { children, className, onClick, open, openMobile, isAdmin, isMobile } = this.props;
    const openNav = open === null ? this.state.open : open;
    const openNavMobile = openMobile === null ? this.state.openMobile : openMobile;
    const classes = classNames(styles.sidebar, className, {
      [styles.closed]: openNav === false,
      [styles.isMobile]: isMobile,
      [styles.isMobileOpen]: openNavMobile,
    });

    return (
      <div className={classes}>
        {onClick &&
          <button className={styles.toggle} type="button" onClick={this.handleToggle}>
            <Icon className={styles.toggleIcon} name="menu" />
          </button>}
        {!isMobile &&
          <div className={styles.logotype}>
            {openNav
              ? <Svg
                  onClick={this.handleLogoClick}
                  width={188}
                  height={58}
                  src={isAdmin ? 'logo/afiliados-admin' : 'logo/afiliados'}
                />
              : <Svg onClick={this.handleLogoClick} width={24} src="logo/afiliados-icon" />}
          </div>}

        <nav className={styles.content}>
          <span className={classNames(styles.contentTitle, { [styles.isNavClosed]: openNav === false })}>
            Menu
          </span>
          {children}
        </nav>
      </div>
    );
  }
}

export default CSSModules(Sidebar, styles);
