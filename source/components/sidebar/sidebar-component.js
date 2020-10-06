import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../icon';
import Menu, { MenuItem } from '../menu';
import Accordion, { AccordionTitle, AccordionContent } from '../accordion';

import styles from './sidebar.styl';

const Sidebar = ({
  schema,
  className,
  onToggle,
  hasToggle,
  isMobile,
  logo,
  logoSmall,
  onClickItem,
  onLogoClick,
  initialSubmenu,
  initialItem,
  open: openProp,
}) => {
  const [open, setOpen] = useState(true);
  const [currentSubmenu, setCurrentSubmenu] = useState(initialSubmenu);
  const [currentItem, setCurrentItem] = useState(initialItem);

  const openNav = openProp !== null ? openProp : open;

  const handleToggle = () => {
    openProp === null ? setOpen(!open) : onToggle();
    openNav && setCurrentSubmenu(null);
  };

  const toggleSubmenu = id => {
    return () => {
      const openedSubmenu = currentSubmenu === id ? null : id;
      setCurrentSubmenu(openedSubmenu);
    };
  };

  const getActiveSubmenu = id => currentSubmenu === id;
  const getActiveItem = id => currentItem === id;

  const onItemClick = (id, link, submenuId) => {
    return () => {
      setCurrentItem(id);
      setCurrentSubmenu(submenuId);
      onClickItem && onClickItem(link);
    };
  };

  const renderMenuWithAccordion = ({ icon, name, submenu, id }, index) => {
    return (
      <MenuItem active={getActiveSubmenu(id)}>
        <AccordionTitle data-testid={id} active={getActiveSubmenu(id)} index={index} onClick={toggleSubmenu(id)} icon={icon}>
          {name}
        </AccordionTitle>
        <AccordionContent active={getActiveSubmenu(id)}>
          <Menu>
            {submenu.map(subitem => (
              <MenuItem data-testid={subitem.id} active={getActiveItem(subitem.id)} link={subitem.link} handleClick={onItemClick(subitem.id, subitem.link, id)}>
                {subitem.name}
              </MenuItem>
            ))}
          </Menu>
        </AccordionContent>
      </MenuItem>
    );
  }

  const renderMenuSimple = ({ name, icon, link, id }) => {
    return (
      <MenuItem
        title={name}
        active={getActiveItem(id)}
        isNotAccordion
        icon={icon}
        link={link}
        handleClick={onItemClick(id, link, null)}
        data-testid={id}
      >
        {name}
      </MenuItem>
    );
  };

  const allClassNames = classNames(styles.sidebar, className, {
    [styles.closed]: !openNav,
    [styles.isMobile]: isMobile,
    [styles.isMobileOpen]: isMobile && openNav,
  });

  return (
    <>
      <div className={allClassNames}>
        {hasToggle &&
          <button className={styles.toggle} type="button" onClick={handleToggle}>
            <Icon className={styles.toggleIcon} name="menu" />
          </button>}

        {!isMobile &&
          <div onClick={onLogoClick} className={styles.logotype}>
            {openNav ? logo : logoSmall}
          </div>}

        <nav className={styles.content}>
          <span className={classNames(styles.contentTitle, { [styles.isNavClosed]: !openNav })}>Menu</span>
          <Accordion type="accordionMenu" exclusive={false} as={Menu} open={openNav}>
            {schema.map(
              (item, index) => (item.submenu ? renderMenuWithAccordion(item, index) : renderMenuSimple(item, index))
            )}
          </Accordion>
        </nav>
      </div>

      {isMobile &&
        <div onClick={handleToggle} className={classNames(styles.overlay, { [styles.isOpen]: openNav })} />}
    </>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  hasToggle: PropTypes.bool,
  onToggle: PropTypes.func,
  onLogoClick: PropTypes.func,
  isMobile: PropTypes.bool,
  open: PropTypes.bool,
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  logoSmall: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClickItem: PropTypes.func,
  initialSubmenu: PropTypes.string,
  initialItem: PropTypes.string,
  schema: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidebar.defaultProps = {
  hasToggle: true,
  open: null,
  isMobile: false,
};

export default memo(Sidebar);
