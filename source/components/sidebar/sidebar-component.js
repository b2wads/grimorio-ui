import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../icon';
import Accordion, { AccordionTitle, AccordionContent } from '../accordion';

import styles from './sidebar.styl';

export const Sidebar = ({
  schema,
  className,
  isFixed,
  onToggle,
  hasToggle,
  isMobile,
  logo,
  logoSmall,
  onClickItem,
  onLogoClick,
  initialSection,
  initialItem,
  open: openProp,
}) => {
  const [open, setOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState(initialSection);
  const [currentItem, setCurrentItem] = useState(initialItem);

  const openNav = openProp !== null ? openProp : open;

  const handleToggle = () => {
    openProp === null ? setOpen(!open) : onToggle();
    openNav && setCurrentSection(null);
  };

  const toggleSection = id => {
    return () => {
      const openedSubmenu = currentSection === id ? null : id;
      setCurrentSection(openedSubmenu);
    };
  };

  const getActiveSection = id => currentSection === id;
  const getActiveItem = id => currentItem === id;

  const onItemClick = (id, link, action, submenuId) => {
    return () => {
      setCurrentItem(id);
      setCurrentSection(submenuId);
      link && onClickItem && onClickItem(link);
      action && action();
    };
  };

  const renderMenuSimple = ({ className, name, icon, link, action, id, sectionId = null, type = 'list' }) => {
    return (
      <li
        title={name}
        className={cx(className, {
          [styles.listItem]: type === 'list',
          [styles.nestedItem]: type === 'nested',
          [styles.isClosed]: !openNav,
          [styles.isActive]: getActiveItem(id),
          [styles.sectionActive]: getActiveSection(sectionId),
        })}
        onClick={onItemClick(id, link, action, sectionId)}
        data-testid={id}
        data-testidgen={sectionId ? 'submenu-item' : 'menu-item'}
        key={id}
      >
        {icon && <Icon size={16} name={icon} className={styles.iconLeft} />}
        {name}
      </li>
    );
  };

  const renderMenuWithAccordion = ({ className, icon, name, submenu, id }, index) => {
    return (
      <li
        className={cx(className, styles.accordeonListItem, {
          [styles.isActive]: getActiveSection(id),
          [styles.isClosed]: !openNav,
        })}
        data-testid={id}
        data-testidgen="menu-item"
        key={id}
      >
        <AccordionTitle
          data-testid={id}
          active={getActiveSection(id)}
          index={index}
          onClick={toggleSection(id)}
          icon={icon}
        >
          {name}
        </AccordionTitle>
        <AccordionContent active={getActiveSection(id)}>
          <ul className={styles.nestedMenu}>
            {submenu.map(subitem => renderMenuSimple({ ...subitem, sectionId: id, type: 'nested' }))}
          </ul>
        </AccordionContent>
      </li>
    );
  };

  const allClassNames = cx(styles.sidebar, className, {
    [styles.isFixed]: isFixed,
    [styles.closed]: !openNav,
    [styles.isMobile]: isMobile,
    [styles.isMobileOpen]: isMobile && openNav,
  });

  return (
    <React.Fragment>
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
          <span className={cx(styles.contentTitle, { [styles.isNavClosed]: !openNav })}>Menu</span>
          <Accordion type="accordionMenu" exclusive={false} as={'ul'} open={openNav}>
            {schema.map((item, index) => {
              if (item.render) {
                return item.render(item);
              }

              return item.submenu ? renderMenuWithAccordion(item, index) : renderMenuSimple(item, index);
            })}
          </Accordion>
        </nav>
      </div>

      {isMobile && <div onClick={handleToggle} className={cx(styles.overlay, { [styles.isOpen]: openNav })} />}
    </React.Fragment>
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
  initialSection: PropTypes.string,
  initialItem: PropTypes.string,
  schema: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
      action: PropTypes.func,
      icon: PropTypes.string,
      id: PropTypes.string,
      submenu: PropTypes.array,
      render: PropTypes.func,
      className: PropTypes.string,
    })
  ).isRequired,
};

Sidebar.defaultProps = {
  hasToggle: true,
  open: null,
  isMobile: false,
  isFixed: true,
};

export default memo(Sidebar);
