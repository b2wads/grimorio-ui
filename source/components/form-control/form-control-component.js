import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
// components
import Icon from '../icon';
// styles
import styles from './form-control.styl';

class FormControl extends PureComponent {
  constructor(props, context) {
    super(props, context);

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
      style.backgroundColor = this.props.addonColor;
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
      value,
      onMask,
      placeholder,
      ...rest
    } = this.props;
    const isClassDefault = ['radio', 'checkbox', 'textarea', 'select'].indexOf(type) < 0;
    const componentClass = classNames({
      [styles['form-field']]: isClassDefault,
      [styles['form-field--radio']]: type === 'radio',
      [styles['form-field--checkbox']]: type === 'checkbox',
      [styles['form-field--textarea']]: type === 'textarea',
      [styles['form-field--select']]: type === 'select',
    });
    let tagType;
    // Has type property
    if (this.hasTypeProperty) {
      tagType = type;
    }

    let newValue;
    if (onMask) {
      newValue = onMask(value);
    } else {
      newValue = value;
    }

    return (
      <Component
        type={tagType}
        ref={getRef}
        className={componentClass}
        placeholder={placeholder}
        id={controlId}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        name={name}
        value={newValue}
        {...rest}
      >
        {children}
      </Component>
    );
  }

  render() {
    const { type, addonBefore, addonAfter, feedback, className } = this.props;
    // context
    const formGroup = this.context.$formGroup;
    const controlId = (formGroup && formGroup.controlId) || undefined;
    const validationState = formGroup && formGroup.validationState;
    // styles
    const addonClass = classNames(className, styles['form-addon'], {
      [styles['form-addon--withItens']]: addonBefore || addonAfter || feedback,
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
        {generateComponent}
        {generateAddonAfter}
        {generateFeedback}
      </div>
    );
  }
}

export default CSSModules(FormControl, styles);
