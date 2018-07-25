import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from '../sidebar.styl';

class SidebarContent extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    const { children, className } = this.props;
    const classes = classNames(styles.content, className);

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}

export default CSSModules(SidebarContent, styles);
