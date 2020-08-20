import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import { uniqueId } from '../../../../helpers';

import MenuItem from './elements/menu-item';

// styles
import styles from './menu.styl';

class Menu extends PureComponent {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    theme: 'default',
    items: [],
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    items: PropTypes.array,
    type: PropTypes.oneOf(['accordionMenu']),
    theme: PropTypes.oneOf(['default', 'dark']),
  };

  render() {
    const { className, items, children, type, theme, open, ...rest } = this.props;
    const classes = classNames(styles.menu, className, {
      [styles[type]]: type,
      [styles[theme]]: theme,
      [styles.closed]: open === false,
    });

    return (
      <ul className={classes} {...rest}>
        {children
          ? children
          : items.map(item => (
              <MenuItem
                key={uniqueId()}
                icon={item.icon}
                content={item.name}
                link={item.link}
                items={item.items}
                active={item.active}
              />
            ))}
      </ul>
    );
  }
}

export default CSSModules(Menu, styles);
