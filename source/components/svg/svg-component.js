import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { dict } from 'tcomb';
// import Icon from '!svg-react-loader?name=Icon!../../../node_modules/material-design-icons/alert/svg/design/ic_add_alert_24px.svg';

class Svg extends PureComponent {
  constructor(props) {
    super(props);

    this.pathLoader = this.pathLoader.bind(this);
  }

  static defaultProps = {
    src: 'person',
    type: 'icon',
    width: 24,
    height: 24,
  };

  static propTypes = {
    src: PropTypes.string,
    type: PropTypes.oneOf(['icon', 'other']),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.object,
  };

  loadIcon(src) {
    const req = require.context(
      '!svg-react-loader!../../../node_modules/material-design-icons/',
      true,
      /\/production\/ic_.{0,}_48px\.svg$/
    );

    return req(req.keys().filter(paths => paths.includes(`${src}_48px`))[0]);
  }

  pathLoader(src) {
    try {
      if (this.props.type === 'icon') {
        return this.loadIcon(src);
      } else {
        /* eslint-disable */
        return require('!!babel-loader!svg-react-loader!../../images/svg/'+ src +'.svg');
        /* eslint-disable */
      }
    } catch (error) {
      return false;
    }
  }

  render() {
    let styles = {
      verticalAlign: 'middle',
    };

    if (this.props.width) {
      // CSS instead of the width attr to support non-pixel units
      styles.width = this.props.width;
    }

    if (this.props.height) {
      // Prevents scaling issue in IE
      styles.height = this.props.height;
    }

    const { src, ...elementProps } = this.props;
    const Component = this.pathLoader(src);

    if (!Component) {
      return null;
    }

    return <Component style={styles} {...elementProps} />;
  }
}

export default Svg;
