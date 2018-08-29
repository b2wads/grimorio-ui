import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../../icon';

import styles from '../select.styl';

const Option = ({ value, icon, onSelect, selected, children }) => {
  return (
    <li
      className={classNames(styles.option, { [styles.isSelected]: selected })}
      onClick={onSelect({ name: children, value })}
    >
      {icon && <Icon size="16" name={icon} />}
      {children}
    </li>
  );
};

Option.propTypes = {
  value: PropTypes.string,
  icon: PropTypes.string,
  onSelect: PropTypes.func,
  selected: PropTypes.bool,
  children: PropTypes.element,
};

export default Option;
