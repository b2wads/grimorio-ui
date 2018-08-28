import React from 'react';
import classNames from 'classnames';

import styles from '../select.styl';

const Option = ({ value, onSelect, selected, children }) => {
  return (
    <li
      className={classNames(styles.option, { [styles.isSelected]: selected })}
      onClick={onSelect({ name: children, value })}
    >
      {children}
    </li>
  );
};

export default Option;
