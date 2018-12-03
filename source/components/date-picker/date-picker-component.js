import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import DayPickerRangeController from 'react-dates/lib/components/DayPickerRangeController';
import isInclusivelyAfterDay from 'react-dates/lib/utils/isInclusivelyAfterDay';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../icon';

import styles from './date-picker.styl';

class DatePicker extends Component {
  constructor(props) {
    super();
    this.state = {
      startDate: props.defaultStartDate || null,
      endDate: props.defaultEndDate || null,
      focusedInput: null,
    };

    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.outsiteClick = this.outsiteClick.bind(this);
    this.isOutsideRange = this.isOutsideRange.bind(this);
    this.initialMonth = this.initialMonth.bind(this);

    moment.locale('pt-br');
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    defaultStartDate: PropTypes.instanceOf(moment),
    defaultEndDate: PropTypes.instanceOf(moment),
    label: PropTypes.string,
    align: PropTypes.oneOf(['left', 'right']),
    monthsToShow: PropTypes.number,
    initialMonth: PropTypes.instanceOf(moment),
    isMobile: PropTypes.bool,
    range: PropTypes.number,
  };

  static defaultProps = {
    onChange: () => {},
    label: 'Data',
    align: 'left',
    monthsToShow: 2,
    range: 2,
    initialMonth: moment().subtract(1, 'month'),
    isMobile: false,
  };

  shouldComponenteUpdate() {
    return false;
  }

  outsiteClick() {
    const { startDate, endDate } = this.state;
    let resetDates = {};

    if (!startDate) {
      resetDates = { startDate: null, endDate: null };
    } else if (!endDate) {
      resetDates = { startDate, endDate: startDate };
      this.props.onChange(resetDates);
    }

    this.setState({ focusedInput: null, ...resetDates });
  }

  toggleCalendar() {
    this.setState({ focusedInput: this.state.focusedInput ? null : 'startDate' });
  }

  hasDates() {
    const { startDate, endDate } = this.state;
    return startDate && endDate;
  }

  changeDate({ startDate, endDate }) {
    let valueEndDate = null;

    if (this.state.focusedInput === 'endDate') {
      valueEndDate = endDate;
    }

    this.props.onChange({ startDate, endDate: valueEndDate });
    this.setState({ startDate, endDate: valueEndDate });
  }

  initialMonth() {
    return this.props.initialMonth;
  }

  isOutsideRange(day) {
    const { range } = this.props;
    let endIsOutside = false;

    if (this.state.focusedInput === 'endDate') {
      endIsOutside = day.isAfter(moment(this.state.startDate).add(range, 'months'));
    }

    return endIsOutside || isInclusivelyAfterDay(day, moment().add(1, 'day'));
  }

  render() {
    const { startDate, endDate, focusedInput } = this.state;
    const { className, align, monthsToShow, isMobile, ...rest } = this.props;
    const labelClasses = cx(styles.label, {
      [styles.isActive]: this.hasDates() || focusedInput,
    });

    const calendarClasses = cx(styles.calendar, {
      [styles.isActive]: focusedInput,
      [styles[align]]: align,
      [styles.isMobile]: isMobile,
    });

    return (
      <div className={cx(styles.wrap, className)} {...rest}>
        <div className={styles.labelWrapper}>
          <span className={labelClasses}>{this.props.label}</span>
          <div onClick={this.toggleCalendar} className={styles.input}>
            <Icon className={styles.calendarIcon} name="today" size={20} />
            <span className={styles.inputContent}>
              {this.hasDates() && `${moment(startDate).format('DD/MM/YYYY')} - ${moment(endDate).format('DD/MM/YYYY')}`}
            </span>
            <Icon className={styles.arrow} name="arrow_drop_down" size={20} />
          </div>
        </div>

        <div className={calendarClasses}>
          <DayPickerRangeController
            startDate={startDate}
            endDate={endDate}
            onDatesChange={({ startDate, endDate }) => this.changeDate({ startDate, endDate })}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            hideKeyboardShortcutsPanel
            numberOfMonths={isMobile ? 1 : monthsToShow}
            onOutsideClick={this.outsiteClick}
            isOutsideRange={this.isOutsideRange}
            minimumNights={0}
            initialVisibleMonth={this.initialMonth}
          />
        </div>

        {isMobile && <div className={cx(styles.overlay, { [styles.isOpen]: focusedInput })} />}
      </div>
    );
  }
}

export default CSSModules(DatePicker, styles);
