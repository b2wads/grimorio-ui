import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Icon from '../icon';
import Svg from '../svg';

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

  render() {
    const { children, className, onClick } = this.props;
    const classes = classNames(styles.sidebar, className, {
      [styles.closed]: this.state.open === false,
    });

    return (
      <div className={classes}>
        {onClick &&
          <button className={styles.toggle} type="button" onClick={this.handleToggle}>
            <Icon className={styles.toggleIcon} name="menu" />
          </button>}

        <div className={styles.logotype}>
          {this.state.open
            ? <Svg width={188} height={58} src="logo/afiliados" />
            : <Svg width={24} src="logo/afiliados-icon" />}
        </div>

        <nav className={styles.content}>
          <span className={classNames(styles.contentTitle, { [styles.isNavClosed]: this.state.open === false })}>
            Menu
          </span>
          {children}
        </nav>
      </div>
    );
  }
}

export default CSSModules(Sidebar, styles);
