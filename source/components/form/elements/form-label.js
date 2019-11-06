import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
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

  static contextTypes = {
    $form: PropTypes.object,
    $formGroup: PropTypes.object,
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  render() {
    const { addon, children, className, ...elementProps } = this.props;

    // context
    const form = this.context.$form;
    const formStyleType = (form && form.styleType) || undefined;
    const formGroup = this.context.$formGroup;
    const controlId = (formGroup && formGroup.controlId) || undefined;
    const validationState = (formGroup && formGroup.validationState) || undefined;
    const isCheckboxOrRadio = (formGroup && formGroup.isCheckboxOrRadio) || undefined;

    const classes = classNames(className, styles.label, {
      [styles.isHorizontal]: formStyleType === 'horizontal',
      [styles[`has-${validationState}`]]: validationState,
      [styles.isCheckboxOrRadio]: isCheckboxOrRadio,
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

export default CSSModules(FormLabel, styles);
