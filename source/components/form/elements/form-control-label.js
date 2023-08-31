import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FormControl from './form-control';
import FormLabel from './form-label';

import Select from '../../select';
import Icon from '../../icon';

import { withContext } from '../form-context';

// styles
import styles from '../form.styl';

class FormControlLabel extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      hovered: false,
      focused: false,
      active: this.verifyPropsValue(props),
      isAutofilled: false,
    };

    this.onFocusLabel = this.onFocusLabel.bind(this);
    this.onHoverLabel = this.onHoverLabel.bind(this);
    this.onBlurLabel = this.onBlurLabel.bind(this);
    this.checkIsAutofilled = this.checkIsAutofilled.bind(this);
  }

  static propTypes = {
    label: PropTypes.string,
    labelHighLight: PropTypes.bool,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    activeLabel: PropTypes.bool,
    onBlur: PropTypes.func,
  };

  static defaultProps = {
    labelHighLight: true,
    activeLabel: null,
  };

  checkIsAutofilled(isAutofilled) {
    this.setState({ isAutofilled });
  }

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

  onHoverLabel(event) {
    this.setState({ hovered: !this.state.hovered });
    this.props.onHover && this.props.onHover(event);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ isAutofilled: false });
      if (!this.state.focused) this.setState({ active: this.hasValue(this.props.value) });
    }
  }

  render() {
    const {
      label,
      labelHighLight,
      placeholder,
      activeLabel,
      onChange,
      type,
      children,
      iconRight,
      iconRightClick,
      iconLeft,
      iconLeftClick,
      context,
      disabled,
      ...rest
    } = this.props;

    // context
    const { validationState } = context.formGroup;

    const labelWrapperClasses = classNames(styles.labelWrapper, {
      [styles['has-iconRight']]: iconRight,
      [styles['has-iconLeft']]: iconLeft,
    });

    const labelClasses = classNames(styles.controlledLabel, {
      [styles.isActive]: activeLabel === null ? this.state.active : activeLabel,
      [styles.labelHighLight]: this.state.focused || labelHighLight,
      [styles.isHovered]: this.state.hovered,
      [styles.isAutofilled]: this.state.isAutofilled,
      [styles[`has-${validationState}`]]: validationState,
      [styles.isOutline]: this.props.outline,
      [styles.disabled]: disabled,
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
          {typeof iconLeft === 'string'
            ? <Icon className={iconLeftClasses} name={iconLeft} size={18} onClick={iconLeftClick} />
            : <div className={iconLeftClasses}>{iconLeft}</div>}
          <FormControl
            placeholder={this.state.active ? placeholder : ''}
            inputClassName={inputClasses}
            onChange={onChange}
            type={type}
            {...rest}
            onFocus={this.onFocusLabel}
            onHover={this.onHoverLabel}
            onBlur={this.onBlurLabel}
            checkIsAutofilled={this.checkIsAutofilled}
            disabled={disabled}
          />
          {typeof iconRight === 'string'
            ? <Icon className={iconRightClasses} name={iconRight} size={18} onClick={iconRightClick} />
            : <div className={iconRightClasses}>{iconRight}</div>}
        </div>
      );
    }
  }
}

export default withContext(FormControlLabel);
