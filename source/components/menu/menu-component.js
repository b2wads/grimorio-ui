import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import MenuItem from './elements/menu-item';

// styles
import styles from './menu.styl';

class Menu extends PureComponent {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    items: [],
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    items: PropTypes.array,
  };

  render() {
    const { className, items, children, ...rest } = this.props;

    const classes = classNames(styles.menu, className);

    return (
      <ul className={classes} {...rest}>
        {children ? children : items.map(item => <MenuItem icon={item.icon} content={item.name} items={item.items} />)}
      </ul>
    );
  }
}

export default CSSModules(Menu, styles);
