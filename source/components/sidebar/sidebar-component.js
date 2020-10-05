import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Icon from '../icon';
import Menu, { MenuItem } from '../menu';
import Accordion, { AccordionTitle, AccordionContent } from '../accordion';

import styles from './sidebar.styl';

class Sidebar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { open: true, openMobile: false, openedSubmenu: null };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
    this.getActive = this.getActive.bind(this);
    this.renderMenuWithAccordion = this.renderMenuWithAccordion.bind(this);
    this.renderMenuSimple = this.renderMenuSimple.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
    schema: PropTypes.element.isRequired,
    onClick: PropTypes.func,
    onLogoClick: PropTypes.func,
    isMobile: PropTypes.bool,
    open: PropTypes.bool,
    openMobile: PropTypes.bool,
    logo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    logoSmall: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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

  handleLogoClick() {
    this.props.onLogoClick();
  }

  toggleSubmenu(index) {
    const openedSubmenu = this.state.openedSubmenu === index ? null : index;
    this.setState({ openedSubmenu });
  }

  getActive(index) {
    return index === this.state.openedSubmenu;
  }

  renderMenuWithAccordion({ icon, name, submenu }, index) {
    const { onClickItem } = this.props;
    return (
      <MenuItem active={this.getActive(index)}>
        <AccordionTitle
          active={this.getActive(index)}
          index={index}
          onClick={() => this.toggleSubmenu(index)}
          icon={icon}
        >
          {name}
        </AccordionTitle>
        <AccordionContent active={this.getActive(index)}>
          <Menu>
            {submenu.map(subitem => (
              <MenuItem active={subitem.isActive} link={subitem.link} handleClick={onClickItem}>
                {subitem.name}
              </MenuItem>
            ))}
          </Menu>
        </AccordionContent>
      </MenuItem>
    );
  }

  renderMenuSimple({ name, isActive, icon, link }, index) {
    const { onClickItem } = this.props;
    return (
      <MenuItem title={name} active={isActive} isNotAccordion icon={icon} link={link} handleClick={onClickItem}>
        {name}
      </MenuItem>
    );
  }

  render() {
    const { schema, className, onClick, open, openMobile, isMobile, logo, logoSmall } = this.props;
    const openNav = open === null ? this.state.open : open;
    const openNavMobile = openMobile === null ? this.state.openMobile : openMobile;
    const classes = classNames(styles.sidebar, className, {
      [styles.closed]: openNav === false,
      [styles.isMobile]: isMobile,
      [styles.isMobileOpen]: openNavMobile,
    });

    return (
      <Fragment>
        <div className={classes}>
          {onClick &&
            <button className={styles.toggle} type="button" onClick={this.handleToggle}>
              <Icon className={styles.toggleIcon} name="menu" />
            </button>}
          {!isMobile &&
            <div onClick={this.handleLogoClick} className={styles.logotype}>
              {openNav ? logo : logoSmall}
            </div>}

          <nav className={styles.content}>
            <span className={classNames(styles.contentTitle, { [styles.isNavClosed]: openNav === false })}>Menu</span>
            <Accordion type="accordionMenu" exclusive={false} as={Menu} open={openNav}>
              {schema.map(
                (item, index) =>
                  item.submenu ? this.renderMenuWithAccordion(item, index) : this.renderMenuSimple(item, index)
              )}
            </Accordion>
          </nav>
        </div>
        {isMobile &&
          <div
            onClick={this.handleToggle}
            className={classNames(styles.overlay, { [styles.isOpen]: openNavMobile })}
          />}
      </Fragment>
    );
  }
}

export default CSSModules(Sidebar, styles);
