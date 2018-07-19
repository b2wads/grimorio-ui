import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Icon from '../icon';

import styles from './sidebar.styl';

class Sidebar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { open: true };
    this.handleToggle = this.handleToggle.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.element.isRequired,
  };

  handleToggle(e) {
    this.setState({ open: !this.state.open }, () => {
      this.props.onClick(e, this.state.open);
    });
  }

  getIconName() {
    return this.state.open ? 'keyboard_arrow_left' : 'keyboard_arrow_right';
  }

  render() {
    const { children, className, onClick } = this.props;
    const classes = classNames(styles.sidebar, className, {
      [styles.closed]: this.state.open === false,
    });

    return (
      <div className={classes}>
        {onClick &&
          <button className={styles.toggle} type="button" onClick={this.handleToggle}>
            <Icon className={styles.toggleIcon} name={this.getIconName()} />
          </button>}
        {children}
      </div>
    );
  }
}

export default CSSModules(Sidebar, styles);
