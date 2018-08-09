import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
// styles
import styles from './form-actions.styl';

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

  static contextTypes = {
    $form: PropTypes.object,
  };

  render() {
    const { children, className, ...elementProps } = this.props;

    // context
    const form = this.context.$form;
    const formStyleType = (form && form.styleType) || undefined;

    const fullClassName = classNames(className, styles['form-group-actions'], {
      [styles['form-group-actions--horizontal']]: formStyleType === 'horizontal',
    });

    return (
      <div className={fullClassName} {...elementProps}>
        {children}
      </div>
    );
  }
}

export default CSSModules(FormActions, styles);
