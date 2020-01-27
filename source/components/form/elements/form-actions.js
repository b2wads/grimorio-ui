import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// styles
import styles from '../form.styl';

class FormActions extends PureComponent {
  constructor(props, context) {
    super(props, context);
  }

  static defaultProps = {
    children: undefined,
    className: undefined,
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { children, className } = this.props;
    const fullClassName = classNames(className, styles['form-group-actions']);

    return (
      <div className={fullClassName}>
        {children}
      </div>
    );
  }
}

export default FormActions;
