import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './header.styl';
import Button from '../button';
import Icon from '../icon';

class Header extends PureComponent {
  static propTypes = {
    user: PropTypes.string.isRequired,
    onLogout: PropTypes.func.isRequired,
    select: PropTypes.element,
  };
  static defaultProps = {};

  renderSelect(select) {
    if (select) {
      return (
        <React.Fragment>
          <Icon className={styles.iconRight} name="keyboard_arrow_down" size="18" />
          <span>Select</span>
        </React.Fragment>
      );
    }
  }

  render() {
    const { user, onLogout, select, className, ...elementProps } = this.props;
    const fullClassName = classNames(className, styles.header);
    return (
      <header className={fullClassName} {...elementProps}>
        <Button className={styles.headerUser} style="clean" modifier="inverted" size="small">
          <Icon className={styles.iconLeft} name="person" size="18" />
          {user}
          {this.renderSelect(select)}
        </Button>

        <Button className={styles.headerLogout} style="clean" modifier="inverted" size="small" onClick={onLogout}>
          Logout
          <Icon className={styles.iconRight} size="18" name="exit_to_app" />
        </Button>
      </header>
    );
  }
}

export default CSSModules(Header, styles);
