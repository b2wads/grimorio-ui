import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
// styles
import styles from './form-label.styl';

class FormLabel extends PureComponent {
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

  render() {
    const { addon, children, className, ...elementProps } = this.props;

    // context
    const form = this.context.$form;
    const formStyleType = (form && form.styleType) || undefined;
    const formGroup = this.context.$formGroup;
    const controlId = (formGroup && formGroup.controlId) || undefined;

    const fullClassName = classNames(className, styles.label, {
      [styles['label--horizontal']]: formStyleType === 'horizontal',
    });

    if (!addon && !children) {
      return null;
    }

    return (
      <label {...elementProps} className={fullClassName} htmlFor={controlId}>
        {children}
        {addon && <span className={styles['label-addon']}>{addon}</span>}
      </label>
    );
  }
}

export default CSSModules(FormLabel, styles);
