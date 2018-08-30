import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';

import FormControl from './form-control';
import FormLabel from './form-label';

import Select from '../../select';

// styles
import styles from './form-control-label.styl';

class FormControlLabel extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      active: this.hasValue(props) ? true : false,
    };

    this.handleLabel = this.handleLabel.bind(this);
  }

  static propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    activeLabel: PropTypes.bool,
  };

  static defaultProps = {
    activeLabel: null,
  };

  static contextTypes = {
    $formGroup: PropTypes.object,
  };

  hasValue(props) {
    return (
      (props.value !== undefined && props.value !== null && props.value !== '') ||
      (props.defaultValue !== undefined && props.defaultValue !== null && props.defaultValue !== '')
    );
  }

  handleLabel(event) {
    if (event && event.target.value === '') {
      this.setState({ active: !this.state.active });
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.hasValue(prevProps) && this.hasValue(this.props)) {
      this.setState({ active: true });
    }
  }

  render() {
    const { label, placeholder, activeLabel, onChange, type, children, ...rest } = this.props;

    // context
    const formGroup = this.context.$formGroup;
    const validationState = (formGroup && formGroup.validationState) || undefined;

    const labelClasses = classNames(styles.label, {
      [styles.isActive]: activeLabel === null ? this.state.active : activeLabel,
      [styles[`has-${validationState}`]]: validationState,
    });

    const inputClasses = classNames(styles.formControl, {
      [styles[`has-${validationState}`]]: validationState,
    });

    if (type === 'select') {
      return (
        <Select label={label} onSelect={onChange} {...rest}>
          {children}
        </Select>
      );
    } else {
      return (
        <div className={styles.labelWrapper}>
          <FormLabel className={labelClasses} onClick={this.handleLabel}>{label}</FormLabel>
          <FormControl
            placeholder={this.state.active ? placeholder : ''}
            inputClassName={inputClasses}
            onBlur={this.handleLabel}
            onFocus={this.handleLabel}
            {...rest}
          />
        </div>
      );
    }
  }
}

FormControlLabel.Option = Select.Option;

export default CSSModules(FormControlLabel, styles);
