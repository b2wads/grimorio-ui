import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
// styles
import styles from './form-actions.styl';

class FormActions extends PureComponent {
  constructor(props) {
    super(props);
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
    const { children, className, ...elementProps } = this.props;

    const fullClassName = classNames(className, styles['form-group-actions']);

    return (
      <div className={fullClassName} {...elementProps}>
        {children}
      </div>
    );
  }
}

export default CSSModules(FormActions, styles);
