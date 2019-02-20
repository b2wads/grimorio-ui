import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
// components
import Icon from '../../icon';
import { fieldsValidation } from '../../../helpers/validation';
import { ommit } from '../../../helpers';

import Select from '../../select';

// styles
import styles from './form-control.styl';

class FormControl extends PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: props.value,
    };

    this.type = this.props.type;
    this.hasTypeProperty = this.type !== 'select' && this.type !== 'textarea';

    this.componentRender = this.componentRender.bind(this);
  }

  static defaultProps = {
    disabled: false,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    feedback: false,
    type: 'text',
    outline: false,
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onMask: PropTypes.func,
    disabled: PropTypes.bool,
    getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    checked: PropTypes.bool,
    feedback: PropTypes.bool,
    outline: PropTypes.bool,
    type: PropTypes.oneOf([
      'text',
      'password',
      'textarea',
      'radio',
      'checkbox',
      'file',
      'hidden',
      'search',
      'email',
      'range',
      'number',
      'month',
      'tel',
      'time',
      'url',
      'week',
      'date',
      'datetime',
      'color',
      'select',
    ]),
  };

  static contextTypes = {
    $form: PropTypes.object,
    $formGroup: PropTypes.object,
  };

  static feedbackRender(validationState, feedback, addonAfter) {
    if ((!validationState && !feedback && addonAfter) || !feedback || !validationState) {
      return null;
    }

    let iconName;

    switch (validationState) {
      case 'success':
        iconName = 'check';
        break;
      case 'warning':
        iconName = 'warning';
        break;
      case 'error':
        iconName = 'close';
        break;
    }

    return (
      <span className={styles['form-feedback']}>
        <Icon name={iconName} />
      </span>
    );
  }

  valueModifier(event, onMask, onChange, validate, onValidate) {
    const { value } = event.target;

    const validation = () => {
      if (validate && onValidate) {
        onValidate(fieldsValidation(this.state.value, this.props.validate));
      }
    };

    this.setState({ value: onMask ? onMask(value) : value }, validation());

    if (onChange) {
      onChange(event);
    }
  }

  componentRender(controlId, type) {
    const Component = this.hasTypeProperty ? 'input' : type;
    const {
      getRef,
      onChange,
      onFocus,
      onBlur,
      disabled,
      children,
      name,
      id,
      onMask,
      placeholder,
      inputClassName,
      validate,
      onValidate,
      outline,
      ...rest
    } = this.props;

    const form = this.context.$form;
    const formStyleType = (form && form.styleType) || undefined;
    const isClassDefault = ['radio', 'checkbox', 'textarea'].indexOf(type) < 0;
    const componentClass = classNames(
      {
        [styles['form-field']]: isClassDefault,
        [styles['form-field--radio']]: type === 'radio',
        [styles['form-field--checkbox']]: type === 'checkbox',
        [styles['form-field--textarea']]: type === 'textarea',
        [styles['form-field--select']]: type === 'select',
        [styles['form-field--horizontal']]: formStyleType === 'horizontal',
        [styles['form-field--outline']]: outline,
      },
      inputClassName
    );

    const handleChange = onMask || validate
      ? e => this.valueModifier(e, onMask, onChange, validate, onValidate)
      : onChange;

    if (type === 'select') {
      return (
        <Select
          className={componentClass}
          disabled={disabled}
          placeholder={placeholder}
          onSelect={handleChange}
          {...ommit(rest, ['feedback', 'className'])}
        >
          {children}
        </Select>
      );
    } else if (['radio', 'checkbox'].indexOf(type) !== -1) {
      return (
        <div className={componentClass}>
          <Component
            type={type}
            ref={getRef}
            placeholder={placeholder}
            id={id}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            name={name}
            value={this.state.value}
            {...ommit(rest, ['className'])}
          />
          <label
            className={classNames(styles.fakeInput, {
              [styles.isDisabled]: disabled,
              [styles.isActive]: this.props.checked,
            })}
            htmlFor={id}
          >
            {type === 'checkbox' &&
              <Icon
                size={16}
                className={classNames(styles.checkIcon, { [styles.isChecked]: this.props.checked })}
                name="check"
              />}
          </label>
        </div>
      );
    } else {
      return (
        <Component
          type={type}
          ref={getRef}
          className={componentClass}
          placeholder={placeholder}
          id={controlId}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          name={name}
          value={this.state.value}
          {...ommit(rest, ['className'])}
        >
          {children}
        </Component>
      );
    }
  }

  render() {
    const { type, addonBefore, addonAfter, feedback, className } = this.props;
    // context
    const form = this.context.$form;
    const formStyleType = (form && form.styleType) || undefined;
    const formGroup = this.context.$formGroup;
    const controlId = (formGroup && formGroup.controlId) || undefined;
    const validationState = (formGroup && formGroup.validationState) || undefined;
    const isCheckboxOrRadio = (formGroup && formGroup.isCheckboxOrRadio) || undefined;

    // styles
    const addonClass = classNames(className, styles['form-addon'], styles['form-field-wrapper'], {
      [styles['form-addon--withItens']]: addonBefore || addonAfter || feedback,
      [styles['form-addon--horizontal']]: formStyleType === 'horizontal',
      [styles[`has-${validationState}`]]: validationState,
      [styles.isCheckboxOrRadio]: isCheckboxOrRadio,
    });

    // internal components
    const generateFeedback = FormControl.feedbackRender(validationState, feedback, addonAfter);

    // component
    const generateComponent = this.componentRender(controlId, type);

    return (
      <div className={addonClass}>
        {generateComponent}
        {generateFeedback}
      </div>
    );
  }
}

export default CSSModules(FormControl, styles);
