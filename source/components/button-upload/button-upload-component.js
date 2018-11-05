import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Button from '../button';
import Icon from '../icon';

// styles
import styles from './button-upload.styl';

class ButtonUpload extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

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
      this.props.onChange(data);
    });
  }

  handleChange(el) {
    this.setState({ list: [...this.state.list, el] }, () => {
      this.returnData();
    });
  }

  removeImage(index) {
    this.setState({ list: this.state.list.filter((_, i) => i !== index) }, () => {
      this.returnData();
    });
  }

  render() {
    const { disabled } = this.props;

    return (
      <div>
        <Button className="primary">
          <Icon size="20" name="publish" />
          Upload
          <input
            type="file"
            onChange={e => this.handleChange(e.target.files[0])}
            disabled={disabled}
            accept="image/png"
          />
        </Button>
        <div className={styles.holdTags}>
          {this.state.list.map((el, index) => (
            <div key={el.name} className={styles.tags}>
              {el.name}
              <Icon onClick={e => this.removeImage(index)} size="20" name="close" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CSSModules(ButtonUpload, styles);
