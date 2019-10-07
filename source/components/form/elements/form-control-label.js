import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';

import FormControl from './form-control';
import FormLabel from './form-label';

import Select from '../../select';
import Icon from '../../icon';

// styles
import styles from './form-control-label.styl';

class FormControlLabel extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      focused: false,
      active: this.verifyPropsValue(props),
    };

    this.onFocusLabel = this.onFocusLabel.bind(this);
    this.onBlurLabel = this.onBlurLabel.bind(this);
  }

  static propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    activeLabel: PropTypes.bool,
    onBlur: PropTypes.func,
  };

  static defaultProps = {
    activeLabel: null,
  };

  static contextTypes = {
    $formGroup: PropTypes.object,
  };

  verifyPropsValue(props) {
    return this.hasValue(props.value) || this.hasValue(props.defaultValue);
  }

  hasValue(value) {
    return value !== undefined && value !== null && value !== '';
  }

  onBlurLabel(event) {
    const value = event && event.target.value;
    this.setState({ active: this.hasValue(value), focused: false });

    this.props.onBlur && this.props.onBlur(event);
  }

  onFocusLabel(event) {
    this.setState({ active: true, focused: true });
    this.props.onFocus && this.props.onFocus(event);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value && !this.state.focused) {
      this.setState({ active: this.hasValue(this.props.value) });
    }
  }

  render() {
    const {
      label,
      placeholder,
      activeLabel,
      onChange,
      type,
      children,
      iconRight,
      iconRightClick,
      iconLeft,
      iconLeftClick,
      colorIconRight,
      ...rest
    } = this.props;

    // context
    const formGroup = this.context.$formGroup;
    const validationState = (formGroup && formGroup.validationState) || undefined;

    const labelWrapperClasses = classNames(styles.labelWrapper, {
      [styles['has-iconRight']]: iconRight,
      [styles['has-iconLeft']]: iconLeft,
    });

    const labelClasses = classNames(styles.label, {
      [styles.isActive]: activeLabel === null ? this.state.active : activeLabel,
      [styles[`has-${validationState}`]]: validationState,
      [styles.isOutline]: this.props.outline,
    });

    const inputClasses = classNames(styles.formControl, {
      [styles[`has-${validationState}`]]: validationState,
    });

    const iconRightClasses = classNames(styles.iconRight, {
      [styles.isClickable]: iconRightClick,
    });

    const iconLeftClasses = classNames(styles.iconLeft, {
      [styles.isClickable]: iconLeftClick,
    });

    if (type === 'select') {
      return (
        <Select className={inputClasses} label={label} onSelect={onChange} {...rest}>
          {children}
        </Select>
      );
    } else {
      return (
        <div className={labelWrapperClasses}>
          <FormLabel className={labelClasses}>{label}</FormLabel>
          {iconLeft && <Icon className={iconLeftClasses} name={iconLeft} size={18} onClick={iconLeftClick} />}
          <FormControl
            placeholder={this.state.active ? placeholder : ''}
            inputClassName={inputClasses}
            onChange={onChange}
            type={type}
            {...rest}
            onFocus={this.onFocusLabel}
            onBlur={this.onBlurLabel}
          />
          {iconRight &&
            <Icon
              className={iconRightClasses}
              color={colorIconRight}
              name={iconRight}
              size={18}
              onClick={iconRightClick}
            />}
        </div>
      );
    }
  }
}

export default CSSModules(FormControlLabel, styles);
