import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
// styles
import styles from './list.styl';

class List extends PureComponent {
  static defaultProps = {
    children: undefined,
    bordered: false,
    zebra: false,
    style: 'bordered',
    className: undefined,
  };

  static propTypes = {
    children: PropTypes.node,
    bordered: PropTypes.bool,
    zebra: PropTypes.bool,
    style: PropTypes.oneOf(['unstyled', 'decimal', 'disc', 'circle', 'zebra', 'bordered']),
    className: PropTypes.string,
  };

  render() {
    const { children, bordered, zebra, style, className, ...elementProps } = this.props;

    const fullClassName = classNames(className, {
      [styles[style]]: style,
      [styles[bordered]]: bordered,
      [styles[zebra]]: zebra,
    });

    return (
      <ul {...elementProps} className={fullClassName}>
        {children}
      </ul>
    );
  }
}

class ListItem extends PureComponent {
  static defaultProps = {
    children: undefined,
    className: undefined,
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { children, className, ...elementProps } = this.props;

    return (
      <li {...elementProps} className={classNames(styles['list-item'], className)}>
        {children}
      </li>
    );
  }
}

List.Item = ListItem;

export default CSSModules(List, styles);
