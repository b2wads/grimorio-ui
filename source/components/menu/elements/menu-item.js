import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Menu from '../index';
import Icon from '../../icon';

// styles
import styles from '../menu.styl';

class MenuItem extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.string,
    key: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string,
    onClick: PropTypes.func,
  };

  handleClick(e) {
    const { handleClick, link } = this.props;
    if (handleClick) {
      handleClick(e, link);
    }
  }

  render() {
    const { active, className, content, icon, items, children } = this.props;
    const classes = classNames(styles.menuItem, className, {
      [`${styles.isActive}`]: active,
    });

    return (
      <li className={classes} onClick={this.handleClick}>
        {icon && <Icon size={16} name={icon} />}
        {children ? children : content}
        {items && <Menu items={items} />}
      </li>
    );
  }
}

export default CSSModules(MenuItem, styles);
