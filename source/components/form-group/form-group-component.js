import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';

import { property } from '../../helpers';
// styles
import styles from './form-group.styl';

const { randomId } = property;

class FormGroup extends PureComponent {
  static defaultProps = {
    controlId: '',
    style: undefined,
    validationState: undefined,
    withoutTopLabel: false,
  };

  static propTypes = {
    controlId: PropTypes.string,
    style: PropTypes.oneOf(['checkbox', 'radio']),
    validationState: PropTypes.oneOf(['success', 'warning', 'error']),
    withoutTopLabel: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static childContextTypes = {
    $formGroup: PropTypes.object.isRequired,
  };

  getChildContext() {
    const { controlId, validationState } = this.props;
    const id = controlId ? controlId : randomId();

    return {
      $formGroup: {
        controlId: id,
        validationState,
      },
    };
  }

  render() {
    const { validationState, children, className, style, withoutTopLabel } = this.props;

    const validationStateClass = `has-${validationState}`;

    const formGroupClass = classNames(className, styles['form-group'], {
      [styles[validationStateClass]]: validationState,
      [styles['form-group--checkbox']]: style === 'checkbox',
      [styles['form-group--radio']]: style === 'radio',
      [styles['form-group--withoutTopLabel']]: withoutTopLabel,
    });

    return (
      <div className={formGroupClass}>
        {children}
      </div>
    );
  }
}

export default CSSModules(FormGroup, styles);
