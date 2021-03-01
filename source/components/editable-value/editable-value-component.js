import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import Icon from '../icon';
import Button from '../button';
import Loader from '../loader';
import { FormControlLabel, FormGroup, FormHelpText } from '../form';

import styles from './editable-value.styl';

class EditableValue extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      isEditing: null,
      editValue: null,
      innerValue: props.initialValue,
      validationStatus: null,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.changeFieldValue = this.changeFieldValue.bind(this);
  }

  static propTypes = {
    value: PropTypes.string,
    initialValue: PropTypes.string,
    validation: PropTypes.func,
    errorMessage: PropTypes.string,
    loading: PropTypes.bool,
    onSubmit: PropTypes.func,
    label: PropTypes.string,
    outline: PropTypes.bool,
    inputClassName: PropTypes.string,
    buttonClassName: PropTypes.string,
    iconClassName: PropTypes.string,
  };

  static defaultProps = {
    outline: false,
    loading: false,
  };

  validation() {
    const { editValue } = this.state;
    const isValid = this.props.validation ? this.props.validation(editValue) : true;

    if (!isValid) {
      return { validationStatus: 'error' };
    }

    return { validationStatus: null };
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing, validationStatus: null, editValue: null });
  }

  onSubmit() {
    const { editValue } = this.state;
    const { validationStatus } = this.validation(editValue);

    if (!this.isValid(editValue)) {
      this.toggleEdit();
    } else if (validationStatus !== 'error') {
      this.setState({ innerValue: editValue });
      this.props.onSubmit(editValue, this.toggleEdit);
    } else {
      this.setState({ validationStatus });
    }
  }

  changeFieldValue(evt) {
    this.setState({ editValue: evt.target.value });
  }

  isValid(value) {
    return value !== null && value !== undefined;
  }

  renderEdition() {
    const { label, value, outline, loading, inputClassName, buttonClassName, errorMessage } = this.props;
    const { editValue, innerValue, validationStatus } = this.state;
    const finalValue = value || innerValue;
    return (
      <Fragment>
        <FormGroup key={validationStatus} validationState={validationStatus} className={styles.formGroup}>
          <FormControlLabel
            onChange={this.changeFieldValue}
            disabled={loading}
            outline={outline}
            label={label}
            type="text"
            value={this.isValid(editValue) ? editValue : finalValue}
            inputClassName={cx(styles.input, inputClassName)}
          />
          {validationStatus === 'error' && errorMessage && <FormHelpText>{errorMessage}</FormHelpText>}
        </FormGroup>
        <Button className={cx(styles.submit, buttonClassName)} size="none" onClick={this.onSubmit}>
          {!loading ? <Icon name="check" size={16} /> : <Loader size="20px" color="secondary" />}
        </Button>
      </Fragment>
    );
  }

  renderValue() {
    const { value, iconClassName } = this.props;
    return (
      <Fragment>
        {value || this.state.innerValue}
        <Button className={cx(styles.edit, iconClassName)} size="none" color="transparent" onClick={this.toggleEdit}>
          <Icon name="edit" size={16} />
        </Button>
      </Fragment>
    );
  }

  render() {
    const { isEditing } = this.state;
    return (
      <div className={cx(styles.wrap, { [styles.isEditing]: isEditing }, this.props.className)}>
        {isEditing ? this.renderEdition() : this.renderValue()}
      </div>
    );
  }
}

export default EditableValue;
