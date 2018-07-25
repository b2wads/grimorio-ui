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
    onSubmit: false,
    styleType: 'form',
    className: undefined,
  };

  static propTypes = {
    onSubmit: PropTypes.func,
    styleType: PropTypes.oneOf(['form', 'horizontal', 'inline']),
    className: PropTypes.string,
  };

  static childContextTypes = {
    $form: PropTypes.object.isRequired,
  };

  getChildContext() {
    const { styleType } = this.props;

    return {
      $form: { styleType },
    };
  }

  render() {
    const { styleType, onSubmit, className, ...elementProps } = this.props;

    return (
      <form
        {...elementProps}
        ref={c => {
          this.form = c;
        }}
        onSubmit={onSubmit}
        className={classNames(className, styles[styleType])}
      />
    );
  }
}

export default CSSModules(Form, styles);
