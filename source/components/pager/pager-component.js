import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { uniqueId } from '../../helpers';

import Icon from '../icon';
import Button from '../button';
import Select, { SelectOption } from '../select';

import styles from './pager.styl';

class Pager extends PureComponent {
  renderPerPage(limit, onLimitChange, limitList, isMobile) {
    return (
      <div className={cx(styles.perpage, { [styles.isMobile]: isMobile })}>
        <Select
          sortItems={false}
          className={styles.select}
          onSelect={({ value }) => onLimitChange(value)}
          defaultValue={limit}
          position="bottom"
        >
          {limitList &&
            limitList.map(limitVal => (
              <SelectOption value={limitVal} key={uniqueId()}>
                {`${limitVal} por página`}
              </SelectOption>
            ))}
        </Select>
      </div>
    );
  }

  mapPaginationObject(start, end, currentPage) {
    const range = [];

    for (let i = start; i < end + 1; ++i) {
      range.push(i);
    }

    return {
      range,
      currentPage,
    };
  }

  getPageRange({ offset, limit, count }) {
    const currentPage = Math.ceil(offset / limit) + 1;
    const maxPages = Math.ceil(count / limit);
    let start = 1;
    let end = 10;

    if (maxPages <= 10) {
      // less than 10 total pages, then show all
      start = 1;
      end = maxPages;

      return this.mapPaginationObject(start, end, currentPage);
    }

    // more than 10 total pages
    if (currentPage <= 6) {
      start = 1;
      end = 10;
    } else if (currentPage + 4 >= maxPages) {
      start = maxPages - 9;
      end = maxPages;
    } else {
      start = currentPage - 5;
      end = currentPage + 4;
    }

    return this.mapPaginationObject(start, end, currentPage);
  }

  renderPaginationBtn(type, number = false, currentPage = 1) {
    const { onClickPagination, offset, limit, count } = this.props;

    const className = type === 'prev' ? styles.pagerLeft : styles.pager;
    const btn = {
      first: {
        icon: 'first_page',
        disabled: offset === 0,
        onClick: () => onClickPagination('first'),
      },
      prev: {
        icon: 'navigate_before',
        disabled: offset === 0,
        onClick: () => onClickPagination('prev'),
      },
      next: {
        icon: 'navigate_next',
        disabled: offset + limit >= count,
        onClick: () => onClickPagination('next'),
      },
      last: {
        icon: 'last_page',
        disabled: offset + limit >= count,
        onClick: () => onClickPagination('last'),
      },
      goto: {
        onClick: () => onClickPagination('number', number),
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
        color="transparent"
        size="none"
        disabled={btn[type].disabled}
        onClick={btn[type].onClick}
        name={type}
        key={uniqueId()}
      >
        {number
          ? number
          : <Icon name={btn[type].icon} className={cx(className, { [styles.isDisabled]: btn[type].disabled })} />}
      </Button>
    );
  }

  render() {
    const {
      count,
      offset,
      limit,
      hasPerpage,
      hasFirstLast,
      hasPagination,
      onLimitChange,
      limitList,
      isMobile,
    } = this.props;

    if (count === undefined || limit === undefined || offset === undefined) {
      return null;
    }

    const { range, currentPage } = this.getPageRange({ count, offset, limit });
    const pagerWrap = cx(styles.holdPager, { [styles.holdPagerMobile]: isMobile });
    const maxPageItems = offset + limit;

    return (
      <div className={pagerWrap}>
        {hasPerpage && this.renderPerPage(limit, onLimitChange, limitList, isMobile)}

        <div className={cx(styles.showing, { [styles.isMobile]: isMobile })}>
          {offset} - {maxPageItems > count ? count : maxPageItems} de {count}
        </div>

        <div className={cx(styles.nav, { [styles.isMobile]: isMobile })}>
          {hasFirstLast && this.renderPaginationBtn('first')}
          {this.renderPaginationBtn('prev')}
          {hasPagination &&
            <div className={styles.pagesWrap}>
              {range.map(number => this.renderPaginationBtn('goto', number, currentPage))}
            </div>}
          {this.renderPaginationBtn('next')}
          {hasFirstLast && this.renderPaginationBtn('last')}
        </div>
      </div>
    );
  }
}

Pager.propTypes = {
  offset: PropTypes.number, // current position of pagination
  limit: PropTypes.number, // number of items perpage
  count: PropTypes.number, // total of items
  hasPerpage: PropTypes.bool, // has perpage select
  hasFirstLast: PropTypes.bool, // has first and last navigators
  hasPagination: PropTypes.bool, // has list of pages navigator
  onLimitChange: PropTypes.func, // called when changing limit
  onClickPagination: PropTypes.func, // called when changing pages (first-last included)
  limitList: PropTypes.array, // list of limit presets
  isMobile: PropTypes.bool,
};

export default Pager;
