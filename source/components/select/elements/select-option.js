import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../icon';

import styles from '../select.styl';

class SelectOption extends PureComponent {
  render() {
    const { value, icon, onSelect, selected, children, noCurrentValue } = this.props;
    return (
      <Fragment>
        {!noCurrentValue &&
          <li
            className={classNames(styles.option, { [styles.isSelected]: selected })}
            onClick={onSelect({ name: children, value })}
          >
            {icon && <Icon className={styles.optionIcon} size="18" name={icon} />}
            <span className={styles.optionContent}>{children}</span>
          </li>}
      </Fragment>
    );
  }
}

SelectOption.propTypes = {
  value: PropTypes.string,
  icon: PropTypes.string,
  onSelect: PropTypes.func,
  selected: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  noCurrentValue: PropTypes.bool,
};

export default SelectOption;
