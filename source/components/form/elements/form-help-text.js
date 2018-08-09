import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
// styles
import styles from './form-help-text.styl';

class HelpText extends Component {
  constructor(props, context) {
    super(props, context);
  }

  static defaultProps = {
    children: false,
    className: undefined,
  };

  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static contextTypes = {
    $formGroup: PropTypes.object,
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  render() {
    const { children, className, ...elementProps } = this.props;

    // context
    const formGroup = this.context.$formGroup;
    const validationState = (formGroup && formGroup.validationState) || undefined;

    const classes = classNames(
      styles['help-text'],
      {
        [styles[`has-${validationState}`]]: validationState,
      },
      className
    );

    if (!children) {
      return null;
    }

    return (
      <span {...elementProps} className={classes}>
        {children}
      </span>
    );
  }
}

export default CSSModules(HelpText, styles);
