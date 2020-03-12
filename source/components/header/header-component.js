import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import cx from 'classnames';

import { omit } from '../../helpers';

import styles from './header.styl';
import Button from '../button';
import Icon from '../icon';
import Select from '../select';

class Header extends PureComponent {
  static propTypes = {
    user: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        icon: PropTypes.string.isRequired,
      })
    ),
    onSelect: PropTypes.func,
    onLogout: PropTypes.func,
    isMobile: PropTypes.bool,
    onLogoClick: PropTypes.func,
  };

  static defaultProps = {
    isMobile: false,
  };

  renderButton() {
    const { user } = this.props;

    return (
      <Fragment>
        <Icon className={styles.iconLeft} name="person" size="18" />
        {user}
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

  renderDesktopLayout() {
    const { items, onSelect, user } = this.props;
    return (
      <Button className={styles.headerUser} color="clean" modifier="inverted" size="small">
        {items
          ? <Select type="menu" position="under" menuButton={this.renderButton()} onSelect={onSelect} items={items} />
          : <span> <Icon className={styles.iconLeft} name="person" size="18" /> {user} </span>}
      </Button>
    );
  }

  renderContent() {
    const { onLogout, isMobile } = this.props;
    return (
      <Fragment>
        {isMobile ? this.renderLogoMobile() : this.renderDesktopLayout()}

        <Button
          className={cx(styles.headerLogout, { [styles.isMobile]: isMobile })}
          color="clean"
          modifier="inverted"
          size="small"
          onClick={onLogout}
        >
          {!isMobile && 'Logout'}
          <Icon className={styles.iconRight} size="18" name="exit_to_app" />
        </Button>
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
