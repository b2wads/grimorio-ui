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
    style: 'form',
    className: undefined,
  };

  static propTypes = {
    onSubmit: PropTypes.func,
    style: PropTypes.oneOf(['form', 'horizontal', 'inline']),
    className: PropTypes.string,
  };

  render() {
    const { style, onSubmit, className, ...elementProps } = this.props;

    return (
      <form
        {...elementProps}
        ref={c => {
          this.form = c;
        }}
        onSubmit={onSubmit}
        className={classNames(className, styles[style])}
      />
    );
  }
}

export default CSSModules(Form, styles);
