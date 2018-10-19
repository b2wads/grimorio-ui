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

    this.state = { open: true };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func,
    onLogoClick: PropTypes.func,
  };

  static defaultProps = {
    open: null,
  };

  handleToggle(e) {
    this.setState({ open: !this.state.open }, () => {
      this.props.onClick(e, this.state.open);
    });
  }

  handleLogoClick(e) {
    this.props.onLogoClick();
  }

  render() {
    const { children, className, onClick, open } = this.props;
    const openNav = open === null ? this.state.open : open;
    const classes = classNames(styles.sidebar, className, {
      [styles.closed]: openNav === false,
    });

    return (
      <div className={classes}>
        {onClick &&
          <button className={styles.toggle} type="button" onClick={this.handleToggle}>
            <Icon className={styles.toggleIcon} name="menu" />
          </button>}

        <div className={styles.logotype}>
          {openNav
            ? <Svg onClick={this.handleLogoClick} width={188} height={58} src="logo/afiliados" />
            : <Svg onClick={this.handleLogoClick} width={24} src="logo/afiliados-icon" />}
        </div>

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
