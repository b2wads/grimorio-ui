import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
// styles
import styles from './grid.styl';

class Grid extends PureComponent {
  static defaultProps = {
    fluid: false,
  };

  static propTypes = {
    fluid: PropTypes.bool,
    children: PropTypes.node,
  };

  render() {
    const { fluid, ...rest } = this.props;

    const fullClass = classNames({
      [styles['container-fluid']]: fluid,
      [styles['container']]: !fluid,
    });

    return (
      <div {...rest} className={fullClass}>
        {this.props.children}
      </div>
    );
  }
}

export default CSSModules(Grid, styles);
