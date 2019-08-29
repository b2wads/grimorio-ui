import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
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
      editValue: props.value,
      validationStatus: null,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.changeFieldValue = this.changeFieldValue.bind(this);
  }

  static propTypes = {
    value: PropTypes.string,
    validation: PropTypes.func,
    errorMessage: PropTypes.string,
    loading: PropTypes.bool,
    onSubmit: PropTypes.func,
    label: PropTypes.string,
    outline: PropTypes.bool,
    inputClassName: PropTypes.string,
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
    }

    if (validationStatus !== 'error') {
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
    const { label, value, outline, loading, inputClassName, errorMessage } = this.props;
    const { editValue, validationStatus } = this.state;
    return (
      <Fragment>
        <FormGroup key={validationStatus} validationState={validationStatus} className={styles.formGroup}>
          <FormControlLabel
            onChange={this.changeFieldValue}
            disabled={loading}
            outline={outline}
            label={label}
            type="text"
            value={this.isValid(editValue) ? editValue : value}
            inputClassName={cx(styles.input, inputClassName)}
          />
          {validationStatus === 'error' && errorMessage && <FormHelpText>{errorMessage}</FormHelpText>}
        </FormGroup>
        <Button className={cx(styles.submit, { [styles.isInputOutline]: outline })} size="none" onClick={this.onSubmit}>
          {!loading ? <Icon name="check" size={16} /> : <Loader size="20px" color="secondary" />}
        </Button>
      </Fragment>
    );
  }

  renderValue() {
    return (
      <Fragment>
        {this.props.value}
        <Button className={styles.edit} size="none" color="transparent" onClick={this.toggleEdit}>
          <Icon name="edit" size={16} />
        </Button>
      </Fragment>
    );
  }

  render() {
    const { isEditing } = this.state;
    return (
      <div className={cx(styles.wrap, { [styles.isEditing]: isEditing })}>
        {isEditing ? this.renderEdition() : this.renderValue()}
      </div>
    );
  }
}

export default CSSModules(EditableValue, styles);
