import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

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
  };

  static defaultProps = {
    btnText: 'Upload',
    disabled: false,
    limit: false,
    loading: false,
  };

  convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  returnData() {
    Promise.all(this.state.list.map(el => this.convertToBase64(el))).then(data => {
      this.props.onChange(data, this.state.list);
    });
  }

  handleChange(event) {
    const { files } = event.target;
    let fileArr = [...files];

    if (this.props.limit) {
      const spaceLeft = this.props.limit - this.state.list.length;
      fileArr = fileArr.splice(0, spaceLeft);
    }

    this.setState({ list: [...this.state.list, ...fileArr] }, () => {
      this.returnData();
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
    const { disabled, btnText, limit, loading, ...rest } = this.props;
    const hasMaxFiles = this.state.list.length === limit;

    return (
      <div {...rest}>
        <Button loading={loading} disabled={disabled || hasMaxFiles} iconLeft="publish" className={styles.button}>
          {btnText}
          <input
            className={styles.file}
            type="file"
            onChange={this.handleChange}
            disabled={disabled || hasMaxFiles}
            multiple
            accept="image/png"
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
