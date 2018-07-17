import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
// styles
import styles from './accordion.styl';

import AccordionPanel from './elements/accordion-panel';

class Accordion extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: props.exclusive ? -1 : [],
    };

    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  static defaultProps = {
    theme: 'default',
    exclusive: true,
    panels: [],
  };

  static propTypes = {
    children: PropTypes.node,
    activeIndex: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
    className: PropTypes.string,
    defaultActiveIndex: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    onTitleClick: PropTypes.func,
    exclusive: PropTypes.bool,
    type: PropTypes.oneOf(['accordionMenu']),
    theme: PropTypes.oneOf(['default', 'dark']),
    panels: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.any,
        content: PropTypes.any,
      })
    ),
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.exclusive !== nextProps.exclusive) {
      this.setState({ activeIndex: nextProps.exclusive ? -1 : [] });
    }
  }

  isIndexActive(index) {
    const { exclusive } = this.props;
    const { activeIndex } = this.state;

    return exclusive ? activeIndex === index : activeIndex.includes(index);
  }

  computeNewIndex(index) {
    const { exclusive } = this.props;
    const { activeIndex } = this.state;

    if (exclusive) return index === activeIndex ? -1 : index;

    return activeIndex.includes(index) ? activeIndex.filter(item => item !== index) : [...activeIndex, index];
  }

  handleTitleClick(e, titleProps) {
    const { index } = titleProps;

    this.setState({ activeIndex: this.computeNewIndex(index) });
    if (this.props.onTitleClick) this.props.onTitleClick(e, titleProps);
  }

  renderPanels(panels) {
    return panels.map((panel, index) => (
      <AccordionPanel
        active={this.isIndexActive(index)}
        index={index}
        onTitleClick={this.handleTitleClick}
        content={panel}
      />
    ));
  }

  render() {
    const { className, panels, children, as, ...rest } = this.props;

    const classes = classNames(styles.accordion, className, {
      [styles[this.props.type]]: this.props.type,
      [styles[this.props.theme]]: this.props.theme,
    });

    const ElementType = as ? as : 'ul';

    return (
      <ElementType className={classes} {...rest}>
        {children ? children : this.renderPanels(panels)}
      </ElementType>
    );
  }
}

export default CSSModules(Accordion, styles);
