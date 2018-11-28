import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../../icon';
import Button from '../../button';
import Select, { SelectOption } from '../../select';

import styles from '../table-panel.styl';

import { getPageRange } from '../../../helpers';

class Pager extends PureComponent {
  renderPerPage(limit, onLimitChange, limitList) {
    return (
      <div className={styles.perpage}>
        <Select
          sortItems={false}
          className={styles.select}
          onSelect={({ value }) => onLimitChange(value)}
          defaultValue={limit}
        >
          {limitList.map(limitVal => (
            <SelectOption value={limitVal}>
              {`${limitVal} por página`}
            </SelectOption>
          ))}
        </Select>
      </div>
    );
  }

  renderBtn(type, number = false, currentPage = 1) {
    const { onClickNext, onClickPrev, onClickFirst, onClickLast, onClickPage, offset, length, count } = this.props;
    const className = type === 'prev' ? styles.pagerLeft : styles.pager;
    const btn = {
      first: {
        icon: 'first_page',
        disabled: offset === 0,
        onClick: onClickFirst,
      },
      prev: {
        icon: 'navigate_before',
        disabled: offset === 0,
        onClick: onClickPrev,
      },
      next: {
        icon: 'navigate_next',
        disabled: offset + length === count,
        onClick: onClickNext,
      },
      last: {
        icon: 'last_page',
        disabled: offset + length === count,
        onClick: onClickLast,
      },
      goto: {
        onClick: () => onClickPage(number),
        disabled: false,
      },
    };

    const goToStyles = cx(styles.btn, {
      [styles.number]: type === 'goto',
      [styles.isActive]: currentPage === number,
    });

    return (
      <Button
        className={goToStyles}
        style="transparent"
        size="none"
        disabled={btn[type].disabled}
        onClick={btn[type].onClick}
      >
        {number
          ? number
          : <Icon name={btn[type].icon} className={cx(className, { [styles.isDisabled]: btn[type].disabled })} />}
      </Button>
    );
  }

  render() {
    const { length, count, offset, limit, perpage, hasFirstLast, hasPagination, onLimitChange, limitList } = this.props;
    if (count === undefined || !limit === undefined || perpage === undefined) {
      return null;
    }

    const { range, currentPage } = getPageRange({ count, offset, limit });

    return (
      <Fragment>
        {perpage && this.renderPerPage(limit, onLimitChange, limitList)}

        <div className={styles.showing}>
          {offset} - {offset + length} de {count}
        </div>

        <div className={styles.nav}>
          {hasFirstLast && this.renderBtn('first')}
          {this.renderBtn('prev')}
          {hasPagination &&
            <div className={styles.pagesWrap}>
              {range.map(number => this.renderBtn('goto', number, currentPage))}
            </div>}
          {this.renderBtn('next')}
          {hasFirstLast && this.renderBtn('last')}
        </div>
      </Fragment>
    );
  }
}

Option.propTypes = {
  offset: PropTypes.string,
};

export default Pager;
