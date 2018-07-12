import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
// styles
import styles from '../accordion.styl';

import AccordionTitle from './accordion-title';
import AccordionContent from './accordion-content';

class AccordionPanel extends PureComponent {
  static propTypes = {
    active: PropTypes.bool,
    content: PropTypes.object,
    index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onTitleClick: PropTypes.func,
    title: PropTypes.node,
  };

  render() {
    const { active, content, index, onTitleClick, children } = this.props;

    if (children) return children;

    return (
      <li>
        <AccordionTitle
          active={active}
          index={index}
          key="title"
          onClick={onTitleClick}
          icon={content.icon}
          content={content.title}
        />
        <AccordionContent active={active} key="content" content={content.content} />
      </li>
    );
  }
}

export default CSSModules(AccordionPanel, styles);
