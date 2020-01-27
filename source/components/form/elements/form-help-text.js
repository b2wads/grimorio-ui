import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
// styles
import styles from '../form.styl';

import { withContext } from '../form-context';

const HelpText = ({ children, className, context }) => {
  const { validationState } = context.formGroup;

  const classes = classNames(className, styles['help-text'], {
    [styles[`has-${validationState}`]]: validationState,
  });

  if (!children) {
    return null;
  }

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

HelpText.defaultProps = {
  children: false,
  className: undefined,
};

HelpText.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default withContext(CSSModules(HelpText, styles));
