import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
// styles
import styles from './form.styl';

class Form extends PureComponent {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    className: undefined,
  };

  static propTypes = {
    onSubmit: PropTypes.func,
    className: PropTypes.string,
  };

  render() {
    const { onSubmit, className, ...elementProps } = this.props;

    return <form {...elementProps} onSubmit={onSubmit} className={classNames(className, styles.form)} />;
  }
}

export default CSSModules(Form, styles);
