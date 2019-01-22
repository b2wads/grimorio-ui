import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import cx from 'classnames';

import styles from './tag.styl';

import Icon from '../icon';

class Tag extends PureComponent {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary']),
    closable: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  };

  static defaultProps = {
    color: 'primary',
    className: '',
    closable: true,
  };

  render() {
    const { children, className, color, closable } = this.props;
    const fullClassName = cx(className, styles.tag, {
      [styles.closable]: closable,
      [styles[color]]: color,
    });
    return (
      <div className={fullClassName}>
        {children}
        {closable && <Icon className={styles.icon} name="close" size={14} />}
      </div>
    );
  }
}

export default CSSModules(Tag, styles);
