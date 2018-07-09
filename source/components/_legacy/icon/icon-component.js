import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Icon extends PureComponent {
  constructor(props) {
    super(props);

    this.IconPathLoader = this.IconPathLoader.bind(this);
  }

  static defaultProps = {
    size: 16,
    name: 'user',
  };

  static propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.object,
  };

  IconPathLoader(name) {
    if (name) {
      try {
        /* eslint-disable */
        return require('!!babel-loader!svg-react-loader!../../images/svg/icon/'+ name +'.svg');
        /* eslint-enable */
      } catch (e) {
        return false;
      }
    }
  }

  render() {
    let styles = {
      fill: this.props.color,
      verticalAlign: 'middle',
      width: this.props.size, // CSS instead of the width attr to support non-pixel units
      height: this.props.size, // Prevents scaling issue in IE
    };

    const { name, ...elementProps } = this.props;
    const Component = this.IconPathLoader(name);

    if (!Component) {
      return null;
    }

    return <Component style={styles} {...elementProps} />;
  }
}

export default Icon;
