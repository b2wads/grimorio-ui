import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';

import { withContext } from '../form-context';

// styles
import styles from '../form.styl';

class FormLabel extends Component {
  constructor(props, context) {
    super(props, context);
  }

  static defaultProps = {
    addon: undefined,
    children: undefined,
    className: undefined,
  };

  static propTypes = {
    addon: PropTypes.node,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { addon, children, className, context, ...elementProps } = this.props;

    // context
    const { validationState, controlId } = context.formGroup;

    const classes = classNames(className, styles.label, {
      [styles[`has-${validationState}`]]: validationState,
    });

    if (!addon && !children) {
      return null;
    }

    return (
      <label {...elementProps} className={classes} htmlFor={controlId}>
        {children}
        {addon && <span className={styles['label-addon']}>{addon}</span>}
      </label>
    );
  }
}

export default withContext(CSSModules(FormLabel, styles));
