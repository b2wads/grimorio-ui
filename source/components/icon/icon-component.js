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
    ]),
  };

  loadIcon(src) {
    const req = require.context(
      '!svg-react-loader!../../../node_modules/material-design-icons/',
      true,
      /\/production\/ic_.{0,}_24px\.svg$/
    );

    return req(req.keys().filter(paths => paths.includes(`ic_${src}_24px`))[0]);
  }

  pathLoader(name) {
    try {
      return this.loadIcon(name);
    } catch (error) {
      return false;
    }
  }

  render() {
    const { name, ...elementProps } = this.props;
    const Component = this.pathLoader(name);

    let styles = {
      verticalAlign: this.props.align,
    };

    if (this.props.size) {
      // Prevents scaling issue in IE
      styles.height = this.props.size;
      styles.width = this.props.size;
    }

    if (!Component) {
      return null;
    }

    return <Component style={styles} {...elementProps} />;
  }
}

export default Icon;
