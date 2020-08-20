import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Icon from '../icon';
import Menu, { MenuItem } from './elements/menu';
import Accordion, { AccordionTitle, AccordionContent } from '../accordion';

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
    items: PropTypes.array,
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

  render() {
    const { store, className, onClick, open, openMobile, isMobile, logo, logoSmall } = this.props;
    const openNav = open === null ? this.state.open : open;
    const openNavMobile = openMobile === null ? this.state.openMobile : openMobile;
    const classes = classNames(styles.sidebar, className, {
      [styles.closed]: openNav === false,
      [styles.isMobile]: isMobile,
      [styles.isMobileOpen]: openNavMobile,
    });

    const handleClick = (e, titleProps) => {
      const { index } = titleProps;
      const { active } = store.state;
      const newIndex = active === index ? -1 : index;

      store.set({ active: newIndex });
    };
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
            <span className={classNames(styles.contentTitle, { [styles.isNavClosed]: openNav === false })}>
              Menu
            </span>
            <Accordion type="accordionMenu" exclusive={false} as={Menu}>
              <MenuItem title="Dashboard" active={true} isNotAccordion icon="dashboard">
                Dashboard
              </MenuItem>
              <MenuItem>
                <AccordionTitle index={1} onClick={handleClick} icon="shop">
                  Promoções
                </AccordionTitle>
                <AccordionContent>
                  <Menu>
                    <MenuItem active={true} link="/default"> Default</MenuItem>
                    <MenuItem link="/ecommerce">eCommerce</MenuItem>
                    <MenuItem link="/news-portal">News Portal</MenuItem>
                  </Menu>
                </AccordionContent>
              </MenuItem>
              <MenuItem>
                <AccordionTitle index={2} onClick={handleClick} icon="insert_chart">
                  Charts
                </AccordionTitle>
                <AccordionContent>
                  <Menu>
                    <MenuItem link="/test">Test</MenuItem>
                  </Menu>
                </AccordionContent>
              </MenuItem>
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
