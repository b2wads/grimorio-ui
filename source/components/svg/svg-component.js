import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Svg extends PureComponent {
  constructor(props) {
    super(props);

    this.pathLoader = this.pathLoader.bind(this);
  }

  static defaultProps = {
    align: 'middle',
  };

  static propTypes = {
    src: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
    style: PropTypes.object,
  };

  pathLoader(src) {
    try {
      /* eslint-disable */
      return require('!!svg-react-loader!../../images/svg/'+ src +'.svg');
      /* eslint-disable */
    } catch (error) {
      return false;
    }
  }

  render() {
    let styles = {
      verticalAlign: this.props.align,
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
