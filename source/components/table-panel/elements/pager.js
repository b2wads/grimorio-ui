import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../../icon';
import Button from '../../button';
import Select, { SelectOption } from '../../select';

import styles from '../table-panel.styl';

class Pager extends PureComponent {
  render() {
    const { length, count, offset, limit, onClickNext, onClickPrev, onLimitChange } = this.props;
    return (
      <Fragment>
        <div className={styles.perpage}>
          <Select className={styles.select} onSelect={({ value }) => onLimitChange(value)} defaultValue={limit}>
            <SelectOption value={10}>10 por página</SelectOption>
            <SelectOption value={25}>25 por página</SelectOption>
            <SelectOption value={50}>50 por página</SelectOption>
          </Select>
        </div>

        <div className={styles.showing}>
          {offset} - {offset + length} de {count}
        </div>

        <div className={styles.nav}>
          <Button
            className={styles.buttonPrev}
            style="transparent"
            size="none"
            disabled={offset === 0}
            onClick={onClickPrev}
          >
            <Icon
              className={classNames(styles.pagerLeft, { [styles.isDisabled]: offset === 0 })}
              name="navigate_before"
            />
          </Button>
          <Button
            className={styles.buttonNext}
            style="transparent"
            size="none"
            disabled={offset + length === count}
            onClick={onClickNext}
          >
            <Icon
              className={classNames(styles.pagerRight, { [styles.isDisabled]: offset + length === count })}
              name="navigate_next"
            />
          </Button>
        </div>
      </Fragment>
    );
  }
}

Option.propTypes = {
  offset: PropTypes.string,
};

export default Pager;
