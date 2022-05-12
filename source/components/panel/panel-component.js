import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import Icon from '../icon';
import Loader from '../loader';

import styles from './panel.styl';

function Panel({
  highlight,
  size,
  title,
  titleClassName,
  titleBorder,
  titleSideComponent,
  children,
  contentClassName,
  footer,
  footerClassName,
  loading,
  accordion,
  open,
  className,
  noPadding,
  header,
  brand,
  onAccordionClick,
  ...rest
}) {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(
    () => {
      setIsOpen(open);
    },
    [open]
  );

  function toggleTitle() {
    setIsOpen(prev => !prev);

    onAccordionClick && onAccordionClick();
  }
  function renderIcon(open) {
    return (
      <Icon onClick={toggleTitle} className={styles.arrow} name={open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} />
    );
  }

  function renderHeader() {
    return (
      <header
        className={cx(styles.header, styles.titleWrap, {
          [styles.isAccordion]: accordion,
          [styles.titleBorder]: titleBorder && isOpen,
          [styles[`border_${titleBorder}`]]: titleBorder,
          [styles[size]]: size,
          [styles.isClosed]: !isOpen,
        })}
      >
        <span className={cx(styles.title, titleClassName)}>
          {title}
          {titleSideComponent}
        </span>
        {accordion && renderIcon(isOpen)}
      </header>
    );
  }

  function renderFooter(footer, size, footerClassName) {
    const className = cx(styles.footer, footerClassName, {
      [styles[size]]: size && isOpen,
      [styles.isClosed]: !isOpen,
    });

    if (footer) {
      return (
        <footer className={className}>
          {footer}
        </footer>
      );
    }
  }

  const fullClassName = cx(className, {
    [styles.default]: true,
    [styles[highlight]]: highlight,
  });

  const contentClass = cx(styles.content, contentClassName, {
    [styles[size]]: size && isOpen,
    [styles.isBrand]: brand,
    [styles.noPadding]: noPadding,
    [styles.isClosed]: !isOpen,
  });

  return (
    <article {...rest} className={fullClassName}>
      {(title || header) && renderHeader()}

      <div className={contentClass}>
        {loading && <Loader size="32px" className={styles.loader} />}
        {!loading && children}
      </div>

      {renderFooter(footer, size, footerClassName)}
    </article>
  );
}

Panel.propTypes = {
  highlight: PropTypes.oneOf(['shadow', 'line']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'no-padding']),
  title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.element]),
  titleClassName: PropTypes.string,
  titleBorder: PropTypes.oneOf(['primary', 'secondary', 'support']),
  titleSideComponent: PropTypes.element,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  contentClassName: PropTypes.string,
  footer: PropTypes.element,
  footerClassName: PropTypes.string,
  loading: PropTypes.bool,
  accordion: PropTypes.bool,
  open: PropTypes.bool,
  noPadding: PropTypes.bool,
  header: PropTypes.bool,
  brand: PropTypes.bool,
  onAccordionClick: PropTypes.func,
};

Panel.defaultProps = {
  title: false,
  size: 'medium',
  loading: false,
  accordion: false,
  open: true,
  highlight: 'shadow',
};

export default Panel;
