import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import * as placeholders from './placeholders';
// styles
import styles from './placeholder.styl';

class Placeholder extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ready: this.props.ready,
    };

    this.isReady = this.isReady.bind(this);
  }

  static propTypes = {
    reducerName: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    ready: PropTypes.bool.isRequired,
    firstLaunchOnly: PropTypes.bool,
    type: PropTypes.oneOf(['text', 'media', 'textRow', 'rect', 'round']),
    rows: PropTypes.number,
    color: PropTypes.string,
    customPlaceholder: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  };

  static defaultProps = {
    reducerName: 'list',
    type: 'text',
    color: '#cdcdcd',
  };

  componentWillReceiveProps(nextProps) {
    if (!this.state.ready) {
      this.setState({
        ready: nextProps.ready,
      });
    }
  }

  isReady() {
    return this.props.firstLaunchOnly ? this.state.ready : this.props.ready;
  }

  render() {
    if (this.isReady()) {
      return this.props.children;
    }

    const { type, customPlaceholder, ...rest } = this.props;

    if (customPlaceholder) {
      return customPlaceholder;
    }

    const Component = placeholders[type];

    return <Component {...rest} />;
  }
}

export default CSSModules(Placeholder, styles);
