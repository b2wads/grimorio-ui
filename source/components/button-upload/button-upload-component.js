import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import { omit } from '../../helpers';

import Button from '../button';
import Icon from '../icon';

// styles
import styles from './button-upload.styl';

class ButtonUpload extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: props.defaultFiles || [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    btnText: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    limit: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    defaultFiles: PropTypes.array,
    formatWhiteList: PropTypes.array,
    accept: PropTypes.string,
    maxFileSize: PropTypes.number, // bytes
  };

  static defaultProps = {
    btnText: 'Upload',
    disabled: false,
    limit: false,
    loading: false,
    formatWhiteList: ['.png', '.jpg', '.jpeg', '.pdf'],
    maxFileSize: 3000000, // 3MB
  };

  convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  returnData(error) {
    Promise.all(this.state.list.map(el => this.convertToBase64(el))).then(data => {
      this.props.onChange(data, this.state.list, error);
    });
  }

  fileValidation(file) {
    const { formatWhiteList, maxFileSize } = this.props;
    const extension = file.name.split('.').pop();
    const validation = {
      validFormat: formatWhiteList.includes(`.${extension}`),
      validSize: file.size <= maxFileSize,
      hasNoRepeat: !this.state.list.filter(currentFile => currentFile.name === file.name).length,
    };

    return {
      ...validation,
      valid: validation.validFormat && validation.validSize && validation.hasNoRepeat,
    };
  }

  handleChange(event) {
    const { files } = event.target;
    let fileArr = [...files];
    let fileError = {};

    if (this.props.limit) {
      const spaceLeft = this.props.limit - this.state.list.length;
      fileArr = fileArr.splice(0, spaceLeft);
    }

    fileArr = fileArr.filter(file => {
      const { valid, validFormat, validSize } = this.fileValidation(file);
      const err = !valid ? { [file.name]: [] } : {};
      !validFormat && err[file.name].push('invalid format');
      !validSize && err[file.name].push('too big');

      fileError = {
        ...fileError,
        ...err,
      };

      return valid;
    });

    this.setState({ list: [...this.state.list, ...fileArr] }, () => {
      this.returnData(fileError);
    });
  }

  removeImage(index) {
    const list = this.state.list.filter((_, i) => i !== index);
    return () => {
      this.setState({ list }, () => {
        this.returnData();
      });
    };
  }

  renderTags() {
    return this.state.list.map((el, index) => (
      <div key={el.name} className={styles.tags}>
        {el.name}
        <Icon onClick={this.removeImage(index)} size="20" name="close" />
      </div>
    ));
  }

  render() {
    const { disabled, btnText, limit, loading, accept, formatWhiteList, ...rest } = this.props;
    const hasMaxFiles = this.state.list.length === limit;

    return (
      <div {...omit(rest, ['onChange', 'maxFileSize'])}>
        <Button loading={loading} disabled={disabled || hasMaxFiles} iconLeft="publish" className={styles.button}>
          {btnText}
          <input
            className={styles.file}
            type="file"
            onChange={this.handleChange}
            disabled={disabled || hasMaxFiles}
            multiple
            accept={accept || formatWhiteList.join(', ')}
            key={this.state.list.length}
          />
        </Button>

        <div className={styles.holdTags}>
          {this.renderTags()}
        </div>
      </div>
    );
  }
}

export default CSSModules(ButtonUpload, styles);
