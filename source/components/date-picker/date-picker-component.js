import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { DayPickerRangeController, isInclusivelyAfterDay } from 'react-dates';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
    moment.locale('pt-br');
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    defaultStartDate: PropTypes.instanceOf(moment),
    defaultEndDate: PropTypes.instanceOf(moment),
    label: PropTypes.string,
    align: PropTypes.oneOf(['left', 'right']),
    monthsToShow: PropTypes.number,
  };

  static defaultProps = {
    onChange: () => {},
    label: 'Data',
    align: 'left',
    monthsToShow: 2,
  };

  shouldComponenteUpdate() {
    return false;
  }

  outsiteClick() {
    let resetDates = {};
    if (!this.hasDates()) {
      resetDates = { startDate: null, endDate: null };
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
    return moment().subtract(1, 'month');
  }

  noNavButtons() {
    if (this.state.focusedInput === 'endDate') {
      return true;
    }

    return false;
  }

  isOutsideRange(day) {
    return isInclusivelyAfterDay(day, moment().add(1, 'day'));
  }

  render() {
    const { startDate, endDate, focusedInput } = this.state;
    const { className, align, monthsToShow, ...rest } = this.props;
    const labelClasses = classNames(styles.label, {
      [styles.isActive]: this.hasDates() || focusedInput,
    });

    const calendarClasses = classNames(styles.calendar, {
      [styles.isActive]: focusedInput,
      [styles[align]]: align,
    });

    return (
      <div className={classNames(styles.wrap, className)} {...rest}>
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
            numberOfMonths={monthsToShow}
            onOutsideClick={this.outsiteClick}
            noNavButtons={this.noNavButtons()}
            isOutsideRange={this.isOutsideRange}
            minimumNights={0}
            initialVisibleMonth={this.initialMonth}
          />
        </div>
      </div>
    );
  }
}

export default CSSModules(DatePicker, styles);
