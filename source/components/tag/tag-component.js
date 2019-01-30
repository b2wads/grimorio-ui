import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import cx from 'classnames';

import styles from './tag.styl';

import Icon from '../icon';

class Tag extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary']),
    fixed: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  };

  static defaultProps = {
    color: 'primary',
    className: '',
    fixed: false,
  };

  render() {
    const { children, className, color, fixed, ...rest } = this.props;
    const fullClassName = cx(className, styles.tag, {
      [styles.fixed]: fixed,
      [styles[color]]: color,
    });
    return (
      <div className={fullClassName} {...rest}>
        {children}
        {!fixed && <Icon className={styles.icon} name="close" size={14} />}
      </div>
    );
  }
}

export default CSSModules(Tag, styles);
