import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// styles
import styles from './accordion.styl';

import AccordionPanel from './elements/accordion-panel';

import { uniqueId, omit } from '../../helpers';

function Accordion({
  children,
  className,
  defaultActiveIndex,
  theme,
  type,
  panels,
  open,
  exclusive,
  as,
  onTitleClick,
  ...rest
}) {
  const [activeIndex, setActiveIndex] = useState(exclusive ? -1 : []);

  useEffect(
    () => {
      setActiveIndex(exclusive ? -1 : []);
    },
    [exclusive]
  );

  function isIndexActive(index) {
    return exclusive ? activeIndex === index : activeIndex.includes(index);
  }

  function computeNewIndex(index) {
    if (exclusive) return index === activeIndex ? -1 : index;

    return activeIndex.includes(index) ? activeIndex.filter(item => item !== index) : [...activeIndex, index];
  }

  function handleTitleClick(e, titleProps) {
    const { index } = titleProps;

    setActiveIndex(computeNewIndex(index));
    if (typeof onTitleClick === 'function') onTitleClick(e, titleProps);
  }

  function renderPanels(panels) {
    return panels.map((panel, index) => (
      <AccordionPanel
        key={uniqueId()}
        active={isIndexActive(index)}
        index={index}
        onTitleClick={handleTitleClick}
        content={panel}
      />
    ));
  }

  const classes = classNames(styles.accordion, className, {
    [styles[type]]: type,
    [styles[theme]]: theme,
    [styles.closed]: open === false,
  });

  const ElementType = as ? as : 'ul';

  return (
    <ElementType className={classes} {...omit(rest, ['exclusive'])}>
      {children ? children : renderPanels(panels)}
    </ElementType>
  );
}

Accordion.defaultProps = {
  theme: 'default',
  exclusive: true,
  panels: [],
};

Accordion.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultActiveIndex: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  theme: PropTypes.oneOf(['default', 'dark']),
  type: PropTypes.oneOf(['default', 'accordionMenu']),
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.any,
      content: PropTypes.any,
    })
  ),
  open: PropTypes.bool,
  exclusive: PropTypes.bool,
  onTitleClick: PropTypes.func,
};

export default Accordion;
