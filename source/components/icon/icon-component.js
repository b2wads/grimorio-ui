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
  };

  static propTypes = {
    name: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  loadIcon(src) {
    const req = require.context(
      '!svg-react-loader!../../../node_modules/material-design-icons/',
      true,
      /\/production\/ic_.{0,}_48px\.svg$/
    );

    return req(req.keys().filter(paths => paths.includes(`${src}_48px`))[0]);
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
      verticalAlign: 'middle',
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
