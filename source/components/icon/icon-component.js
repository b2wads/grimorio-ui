import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Icon extends PureComponent {
  constructor(props) {
    super(props);

    this.pathLoader = this.pathLoader.bind(this);
  }

  static defaultProps = {
    name: 'person', // https://material.io/tools/icons/?style=baseline
    size: 24,
    align: 'middle',
  };

  static propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    align: PropTypes.oneOf([
      'baseline',
      'length',
      'sub',
      'super',
      'top',
      'text-top',
      'middle',
      'bottom',
      'text-bottom',
      'initial',
      'inherit',
      'unset',
    ]),
    style: PropTypes.object,
  };

  pathLoader(name) {
    try {
      /* eslint-disable */
      return require('!!svg-react-loader!../../vendor/material-design-icons/ic_'+ name +'_24px.svg');
      /* eslint-disable */
    } catch (error) {
      return false;
    }
  }

  render() {
    const { name, size, ...elementProps } = this.props;
    const Component = this.pathLoader(name);

    let styles = {
      fill: this.props.color,
      verticalAlign: this.props.align,
    };

    if (size) {
      // Prevents scaling issue in IE
      styles.height = size;
      styles.width = size;
    }

    if (!Component) {
      return null;
    }

    return <Component style={styles} {...elementProps} />;
  }
}

export default Icon;
