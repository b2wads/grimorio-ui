import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
// components
import Icon from '../../icon';
import { fieldsValidation } from '../../../helpers/validation';
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
    addonBefore: false,
    addonAfter: false,
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
    addonAfter: PropTypes.node,
    addonBefore: PropTypes.node,
    feedback: PropTypes.bool,
    outline: PropTypes.bool,
    type: PropTypes.oneOf([
      'text',
      'password',
      'select',
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

  addonRender(type, children) {
    if (!type || !children) {
      return null;
    }

    const style = {};

    if (this.props.addonColor) {
      style.color = this.props.addonColor;
      style.fill = this.props.addonColor;
    }

    return (
      <span
        onClick={!this.props.disabled ? this.props.onFocus : ''}
        className={classNames(styles[`form-addon-${type}`], {
          [styles['form-addon--disabled']]: this.props.disabled,
        })}
        style={style}
      >
        {children}
      </span>
    );
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
    const isClassDefault = ['radio', 'checkbox', 'textarea', 'select'].indexOf(type) < 0;
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
    let tagType;
    // Has type property
    if (this.hasTypeProperty) {
      tagType = type;
    }

    let handleChange = onChange;
    if (onMask || validate) {
      handleChange = e => {
        this.setState({ value: onMask ? onMask(e.target.value) : e.target.value }, () => {
          if (validate && onValidate) {
            onValidate(fieldsValidation(this.state.value, this.props.validate));
          }
        });

        if (onChange) {
          onChange(e);
        }
      };
    }

    return (
      <Component
        type={tagType}
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
        {...rest}
      >
        {children}
      </Component>
    );
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
    const addonClass = classNames(className, styles['form-addon'], {
      [styles['form-addon--withItens']]: addonBefore || addonAfter || feedback,
      [styles['form-addon--horizontal']]: formStyleType === 'horizontal',
      [styles[`has-${validationState}`]]: validationState,
      [styles.isCheckboxOrRadio]: isCheckboxOrRadio,
    });
    // internal components
    const generateAddonBefore = this.addonRender('before', addonBefore);
    const generateAddonAfter = this.addonRender('after', addonAfter);
    const generateFeedback = FormControl.feedbackRender(validationState, feedback, addonAfter);
    // component
    const generateComponent = this.componentRender(controlId, type);

    return (
      <div className={addonClass}>
        {generateAddonBefore}
        {generateAddonAfter}
        {generateComponent}
        {generateFeedback}
      </div>
    );
  }
}

export default CSSModules(FormControl, styles);
