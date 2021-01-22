import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import { uniqueId } from '../../helpers';

import styles from './toggle.styl';

class Toggle extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    id: uniqueId('toggle'),
  };

  render() {
    const { id, checked, onChange, value, disabled, className, ...elementProps } = this.props;

    return (
      <label htmlFor={id} className={cx(styles.wrap, { [styles.isDisabled]: disabled }, className)} {...elementProps}>
        <input
          value={value}
          checked={checked}
          onChange={onChange}
          type="checkbox"
          id={id}
          className={styles.input}
          role="switch"
          disabled={disabled}
        />
        <span className={styles.knob} />
        <span className={styles.track} />
      </label>
    );
  }
}

export default Toggle;
