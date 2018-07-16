import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from '../sidebar.styl';

class SidebarLogotype extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    const { children, className } = this.props;
    const classes = classNames(styles.logotype, className);

    return (
      <div className={classes}>
        <div className={styles['logotype-image']}>
          {children}
        </div>
      </div>
    );
  }
}

export default CSSModules(SidebarLogotype, styles);
