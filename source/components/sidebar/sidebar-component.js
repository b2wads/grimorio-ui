import React, { useState, memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../icon';
import Accordion, { AccordionTitle, AccordionContent } from '../accordion';

import styles from './sidebar.styl';

export const Sidebar = ({
  schema,
  className,
  supportColor,
  contentColor,
  isFixed,
  onToggle,
  hasToggle,
  toggleIconColor,
  toggleGAConfig,
  isMobile,
  logo,
  logoSmall,
  logoContainerColor,
  logoContainerGAConfig,
  onClickItem,
  onLogoClick,
  initialSection,
  initialItem,
  open: openProp,
}) => {
  const hasToggleGAConfig = Object.keys(toggleGAConfig || {}).length !== 0;
  const hasLogoContainerGAConfig = Object.keys(logoContainerGAConfig || {}).length !== 0;

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
      if (!openNav) {
        handleToggle();
      }
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

  const renderMenuSimple = ({ className, name, icon, link, action, id, sectionId = null, type = 'list', GAConfig }) => {
    const hasGaConfig = Object.keys(GAConfig || {}).length !== 0;
    return (
      <li
        title={name}
        className={cx(className, {
          [styles.listItem]: type === 'list',
          [styles.nestedItem]: type === 'nested',
          [styles[`support_${supportColor}`]]: supportColor,
          [styles[`content_${contentColor}`]]: contentColor,
          [styles.isClosed]: !openNav,
          [styles.isActive]: getActiveItem(id),
          [styles.sectionActive]: getActiveSection(sectionId),
          gatrack: hasGaConfig,
        })}
        onClick={onItemClick(id, link, action, sectionId)}
        data-testid={id}
        data-testidgen={sectionId ? 'submenu-item' : 'menu-item'}
        key={id}
        data-gacategory={hasGaConfig ? GAConfig.category : ''}
        data-gaaction={hasGaConfig ? GAConfig.action : ''}
        data-galabel={hasGaConfig ? GAConfig.label : ''}
      >
        {icon && <Icon size={16} name={icon} className={styles.iconLeft} />}
        {name}
      </li>
    );
  };

  const renderMenuWithAccordion = ({ className, icon, name, submenu, id, GAConfig }, index) => {
    const hasGaConfig = Object.keys(GAConfig || {}).length !== 0;
    return (
      <li
        className={cx(className, styles.accordeonListItem, {
          [styles[supportColor]]: supportColor,
          [styles.isActive]: getActiveSection(id),
          gatrack: hasGaConfig,
        })}
        data-testid={id}
        data-testidgen="menu-item"
        key={id}
        data-gacategory={hasGaConfig ? GAConfig.category : ''}
        data-gaaction={hasGaConfig ? GAConfig.action : ''}
        data-galabel={hasGaConfig ? GAConfig.label : ''}
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
    <Fragment>
      <div className={allClassNames}>
        {hasToggle &&
          <button
            className={cx(styles.toggle, {
              gatrack: hasToggleGAConfig,
            })}
            type="button"
            onClick={handleToggle}
            data-gacategory={hasToggleGAConfig ? toggleGAConfig.category : ''}
            data-gaaction={hasToggleGAConfig ? toggleGAConfig.action : ''}
            data-galabel={hasToggleGAConfig ? toggleGAConfig.label : ''}
          >
            <Icon className={styles.toggleIcon} name="menu" color={toggleIconColor} />
          </button>}

        {!isMobile &&
          <div
            onClick={onLogoClick}
            className={cx(styles.logotype, {
              gatrack: hasLogoContainerGAConfig,
              [styles[logoContainerColor]]: logoContainerColor,
            })}
            data-gacategory={hasLogoContainerGAConfig ? logoContainerGAConfig.category : ''}
            data-gaaction={hasLogoContainerGAConfig ? logoContainerGAConfig.action : ''}
            data-galabel={hasLogoContainerGAConfig ? logoContainerGAConfig.label : ''}
          >
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
    </Fragment>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  contentColor: PropTypes.oneOf(['default', 'primary', 'secondary']),
  supportColor: PropTypes.oneOf(['primary', 'secondary']),
  hasToggle: PropTypes.bool,
  toggleIconColor: PropTypes.string,
  toggleGAConfig: PropTypes.shape({
    category: PropTypes.string,
    action: PropTypes.string,
    label: PropTypes.string,
  }),
  onToggle: PropTypes.func,
  onLogoClick: PropTypes.func,
  isMobile: PropTypes.bool,
  open: PropTypes.bool,
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  logoSmall: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  logoContainerColor: PropTypes.oneOf(['default', 'primary', 'secondary']),
  logoContainerGAConfig: PropTypes.shape({
    category: PropTypes.string,
    action: PropTypes.string,
    label: PropTypes.string,
  }),
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
      GAConfig: PropTypes.shape({
        category: PropTypes.string,
        action: PropTypes.string,
        label: PropTypes.string,
      }),
    })
  ).isRequired,
};

Sidebar.defaultProps = {
  contentColor: 'default',
  supportColor: 'primary',
  logoContainerColor: 'default',
  hasToggle: true,
  open: null,
  isMobile: false,
  isFixed: true,
};

export default memo(Sidebar);
