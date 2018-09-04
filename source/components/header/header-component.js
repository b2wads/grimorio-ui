import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './header.styl';
import Button from '../button';
import Icon from '../icon';
import Select from '../select';

class Header extends PureComponent {
  static propTypes = {
    user: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
        icon: PropTypes.string.isRequired,
      })
    ).isRequired,
    onSelect: PropTypes.func,
    onLogout: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  renderButton() {
    const { user } = this.props;

    return (
      <React.Fragment>
        <Icon className={styles.iconLeft} name="person" size="18" />
        {user}
        <Icon className={styles.iconRight} name="arrow_drop_down" size="20" />
      </React.Fragment>
    );
  }

  render() {
    const { onLogout, items, onSelect, className, ...elementProps } = this.props;
    const fullClassName = classNames(className, styles.header);

    return (
      <header className={fullClassName} {...elementProps}>
        <Button className={styles.headerUser} style="clean" modifier="inverted" size="small">
          <Select type="menu" menuButton={this.renderButton()} onSelect={onSelect} items={items} />
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
