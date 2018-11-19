import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './header.styl';
import Button from '../button';
import Icon from '../icon';
import Svg from '../svg';
import Select from '../select';

class Header extends PureComponent {
  constructor() {
    super();
    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  static propTypes = {
    user: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        icon: PropTypes.string.isRequired,
      })
    ).isRequired,
    onSelect: PropTypes.func,
    onLogout: PropTypes.func.isRequired,
    isMobile: PropTypes.bool,
    onLogoClick: PropTypes.func,
  };

  static defaultProps = {
    isMobile: false,
  };

  renderButton() {
    const { user } = this.props;

    return (
      <React.Fragment>
        <Icon className={styles.iconLeft} name="person" size="18" />
        {user}
        <Icon className={styles.iconRight} name="arrow_drop_down" size="20" />
      </React.Fragment>
    );
  }

  handleLogoClick() {
    this.props.onLogoClick();
  }

  render() {
    const { onLogout, items, onSelect, className, user, isMobile, ...elementProps } = this.props;
    const fullClassName = classNames(className, styles.header, {
      [styles.isMobile]: isMobile,
    });

    return (
      <header className={fullClassName} {...elementProps}>
        {!isMobile &&
          <Button className={styles.headerUser} style="clean" modifier="inverted" size="small">
            {items
              ? <Select
                  type="menu"
                  position="under"
                  menuButton={this.renderButton()}
                  onSelect={onSelect}
                  items={items}
                />
              : <span> <Icon className={styles.iconLeft} name="person" size="18" /> {user} </span>}
          </Button>}

        {isMobile &&
          <Svg className={styles.logo} onClick={this.handleLogoClick} width={188} height={58} src="logo/afiliados" />}

        <Button className={styles.headerLogout} style="clean" modifier="inverted" size="small" onClick={onLogout}>
          {!isMobile && 'Logout'}
          <Icon className={styles.iconRight} size="18" name="exit_to_app" />
        </Button>
      </header>
    );
  }
}

export default CSSModules(Header, styles);
