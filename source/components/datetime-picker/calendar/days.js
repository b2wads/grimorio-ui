import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import onClickOutside from 'react-onclickoutside';

import styles from '../datetime-picker.styl';

class DateTimePickerDays extends PureComponent {
  constructor(props) {
    super(props);

    this.getDaysOfWeek = this.getDaysOfWeek.bind(this);
    this.renderDays = this.renderDays.bind(this);
    this.updateSelectedDate = this.updateSelectedDate.bind(this);
    this.renderDay = this.renderDay.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.alwaysValidDate = this.alwaysValidDate.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  static propTypes = {
    timeFormat: PropTypes.any,
    selectedDate: PropTypes.any,
    viewDate: PropTypes.any,
    renderDay: PropTypes.any,
    isValidDate: PropTypes.any,
    updateOn: PropTypes.any,
    updateSelectedDate: PropTypes.any,
    handleClickOutside: PropTypes.any,
    subtractTime: PropTypes.any,
    showView: PropTypes.any,
    addTime: PropTypes.any,
  };

  getDaysOfWeek(locale) {
    let days = locale._weekdaysShort;
    let first = locale.firstDayOfWeek();
    let dow = [];
    let i = 0;

    days.forEach(function(day) {
      dow[(7 + i++ - first) % 7] = day;
    });

    return dow;
  }

  renderDays() {
    let date = this.props.viewDate;
    let selected = this.props.selectedDate && this.props.selectedDate.clone();
    let prevMonth = date.clone().subtract(1, 'months');
    let currentYear = date.year();
    let currentMonth = date.month();
    let weeks = [];
    let days = [];
    let renderer = this.props.renderDay || this.renderDay;
    let isValid = this.props.isValidDate || this.alwaysValidDate;
    let classes;
    let isDisabled;
    let dayProps;
    let currentDate;

    // Go to the last week of the previous month
    prevMonth.date(prevMonth.daysInMonth()).startOf('week');
    let lastDay = prevMonth.clone().add(42, 'd');

    while (prevMonth.isBefore(lastDay)) {
      classes = styles.rdtDay;
      currentDate = prevMonth.clone();

      if ((prevMonth.year() === currentYear && prevMonth.month() < currentMonth) || prevMonth.year() < currentYear) {
        classes += ` ${styles.rdtOld}`;
      } else if (
        (prevMonth.year() === currentYear && prevMonth.month() > currentMonth) ||
        prevMonth.year() > currentYear
      ) {
        classes += ` ${styles.rdtNew}`;
      }

      if (selected && prevMonth.isSame(selected, 'day')) {
        classes += ` ${styles.rdtActive}`;
      }

      if (prevMonth.isSame(moment(), 'day')) {
        classes += ` ${styles.rdtToday}`;
      }

      isDisabled = !isValid(currentDate, selected);
      if (isDisabled) {
        classes += ` ${styles.rdtDisabled}`;
      }

      dayProps = {
        key: prevMonth.format('M_D'),
        'data-value': prevMonth.date(),
        className: classes,
      };

      if (!isDisabled) {
        dayProps.onClick = this.updateSelectedDate;
      }

      days.push(renderer(dayProps, currentDate, selected));

      if (days.length === 7) {
        weeks.push(<tr key={prevMonth.format('M_D')}>{days}</tr>);
        days = [];
      }

      prevMonth.add(1, 'd');
    }

    return weeks;
  }

  updateSelectedDate(event) {
    this.props.updateSelectedDate(event, true);
  }

  renderDay(props, currentDate) {
    return <td {...props}>{currentDate.date()}</td>;
  }

  renderFooter() {
    if (!this.props.timeFormat) {
      return '';
    }

    let date = this.props.selectedDate || this.props.viewDate;

    return (
      <tfoot key="tf">
        <tr>
          <td onClick={this.props.showView('time')} colSpan="7" className={styles.rdtTimeToggle}>
            {date.format(this.props.timeFormat)}
          </td>
        </tr>
      </tfoot>
    );
  }

  alwaysValidDate() {
    return 1;
  }

  handleClickOutside() {
    this.props.handleClickOutside();
  }

  render() {
    const footer = this.renderFooter();
    const date = this.props.viewDate;

    const locale = date.localeData();

    return (
      <div className={styles.rdtDays}>
        <table>
          <thead key="th">
            <tr key="h">
              <th key="p" className={styles.rdtPrev}>
                <span onClick={this.props.subtractTime(1, 'months')}>‹</span>
              </th>
              <th
                key="s"
                className={styles.rdtSwitch}
                onClick={this.props.showView('months')}
                colSpan="5"
                data-value={this.props.viewDate.month()}
              >{`${locale.months(date)} ${date.year()}`}</th>
              <th key="n" className={styles.rdtNext}>
                <span onClick={this.props.addTime(1, 'months')}>›</span>
              </th>
            </tr>
            <tr key="d">
              {this.getDaysOfWeek(locale).map((day, index) => {
                return <th key={day} className={styles.dow}>{day}</th>;
              })}
            </tr>
          </thead>
          <tbody key="tb">{this.renderDays()}</tbody>
          {footer}
        </table>
      </div>
    );
  }
}

export default onClickOutside(DateTimePickerDays);
