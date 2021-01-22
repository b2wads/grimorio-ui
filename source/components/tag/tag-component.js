import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import styles from './tag.styl';

import Icon from '../icon';

class Tag extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary']),
    fixed: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    onClose: PropTypes.func,
  };

  static defaultProps = {
    color: 'primary',
    className: '',
    fixed: false,
  };

  render() {
    const { children, className, color, fixed, onClose, ...rest } = this.props;
    const fullClassName = cx(className, styles.tag, {
      [styles.fixed]: fixed,
      [styles[color]]: color,
    });
    return (
      <div className={fullClassName} {...rest}>
        {children}
        {!fixed && <Icon className={styles.icon} name="cancel" size={18} onClick={onClose} />}
      </div>
    );
  }
}

export default Tag;
