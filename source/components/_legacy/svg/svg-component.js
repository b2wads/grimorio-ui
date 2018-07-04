import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Svg extends PureComponent {
  constructor(props) {
    super(props);

    this.pathLoader = this.pathLoader.bind(this);
  }

  static defaultProps = {
    src: 'logo/example',
  };

  static propTypes = {
    src: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.object,
  };

  pathLoader(src) {
    if (src) {
      try {
        /* eslint-disable */
        return require('!!babel-loader!svg-react-loader!../../images/svg/'+ src +'.svg');
        /* eslint-enable */
      } catch (e) {
        return false;
      }
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
