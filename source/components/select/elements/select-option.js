import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../icon';

import styles from '../select.styl';

class SelectOption extends PureComponent {
  render() {
    const { value, icon, onSelect, selected, children } = this.props;
    return (
      <li
        className={classNames(styles.option, { [styles.isSelected]: selected })}
        onClick={onSelect({ name: children, value })}
      >
        {icon && <Icon className={styles.optionIcon} size="18" name={icon} />}
        {children}
      </li>
    );
  }
}

Option.propTypes = {
  value: PropTypes.string,
  icon: PropTypes.string,
  onSelect: PropTypes.func,
  selected: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default SelectOption;
