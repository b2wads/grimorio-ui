import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
// styles
import styles from './help-text.styl';

class HelpText extends PureComponent {
  static defaultProps = {
    children: false,
    className: undefined,
  };

  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  render() {
    const { children, className, ...elementProps } = this.props;

    if (!children) {
      return null;
    }

    return (
      <span {...elementProps} className={classNames(className, styles['help-text'])}>
        {children}
      </span>
    );
  }
}

export default CSSModules(HelpText, styles);
