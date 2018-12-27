import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './icon.styl';

class Icon extends PureComponent {
  static defaultProps = {
    name: 'person', // https://material.io/tools/icons/?style=baseline
    size: 24,
    align: 'middle',
  };

  static propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    align: PropTypes.oneOf([
      'baseline',
      'length',
      'sub',
      'super',
      'top',
      'text-top',
      'middle',
      'bottom',
      'text-bottom',
      'initial',
      'inherit',
      'unset',
    ]),
    style: PropTypes.object,
  };

  render() {
    const { name, size, className, ...elementProps } = this.props;

    let custom = {
      color: this.props.color,
      verticalAlign: this.props.align,
    };

    if (size) {
      // Prevents scaling issue in IE
      custom.fontSize = `${size}px`;
    }

    return (
      <i style={custom} className={cx('material-icons', styles.icon, className)} {...elementProps}>
        {name}
      </i>
    );
  }
}

export default Icon;
