import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { property } from '../../../helpers';
// styles
import styles from '../form.styl';

import { Provider } from '../form-context';

const { randomId } = property;

function FormGroup(props) {
  const [formGroup, setFormGroup] = useState({
    controlId: props.controlId,
    validationState: props.validationState,
  });

  useEffect(
    () => {
      if (props.validationState !== formGroup.validationState) {
        setFormGroup(prevFormGroup => ({
          ...prevFormGroup,
          validationState: props.validationState,
        }));
      }
    },
    [props.validationState]
  );

  const { validationState, children, className } = props;

  const validationStateClass = `has-${validationState}`;

  const formGroupClass = classNames(className, styles['form-group'], styles['form-group--horizontal'], {
    [styles[validationStateClass]]: validationState,
  });

  return (
    <Provider value={{ formGroup }}>
      <div className={formGroupClass}>
        {children}
      </div>
    </Provider>
  );
}

FormGroup.defaultProps = {
  controlId: randomId(),
  validationState: undefined,
};

FormGroup.propTypes = {
  controlId: PropTypes.string,
  validationState: PropTypes.oneOf(['success', 'warning', 'error']),
  children: PropTypes.node,
  className: PropTypes.string,
};

export default FormGroup;
