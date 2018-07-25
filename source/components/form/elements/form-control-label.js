import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';

import FormControl from './form-control';
import FormLabel from './form-label';

// styles
import styles from './form-control-label.styl';

class FormControlLabel extends PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleLabel = this.handleLabel.bind(this);
    this.state = {
      active: false,
    };
  }

  static propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
  };

  handleLabel(event) {
    if (event && event.target.value === '') {
      this.setState({ active: !this.state.active });
    }
  }

  render() {
    const { label, placeholder } = this.props;

    const fullClassName = classNames(styles.label, {
      [styles.isActive]: this.state.active,
    });

    return (
      <div className={styles.labelWrapper}>
        <FormLabel className={fullClassName} onClick={this.handleLabel}>{label}</FormLabel>
        <FormControl
          placeholder={this.state.active ? placeholder : ''}
          inputClassName={styles.formControl}
          onBlur={this.handleLabel}
          onFocus={this.handleLabel}
        />
      </div>
    );
  }
}

export default CSSModules(FormControlLabel, styles);
