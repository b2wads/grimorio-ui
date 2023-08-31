import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '../form.styl';

const FormActions = ({ children, className }) => {
  const fullClassName = classNames(className, styles['form-group-actions']);

  return (
    <div className={fullClassName}>
      {children}
    </div>
  );
};

FormActions.defaultProps = {
  children: undefined,
  className: undefined,
};

FormActions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default FormActions;
