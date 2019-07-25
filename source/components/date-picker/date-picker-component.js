import React, { PureComponent } from 'react';
import moment from 'moment';
import isInclusivelyAfterDay from 'react-dates/lib/utils/isInclusivelyAfterDay';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../icon';
import Calendar from '../calendar';

import styles from './date-picker.styl';

class DatePicker extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      startDate: props.defaultStartDate || props.defaultSingleDate || null,
      endDate: props.defaultEndDate || null,
      date: props.defaultSingleDate || null,
      showCalendar: false,
    };

    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.outsideClick = this.outsideClick.bind(this);

    moment.locale('pt-br');
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    defaultStartDate: PropTypes.instanceOf(moment),
    defaultEndDate: PropTypes.instanceOf(moment),
    defaultSingleDate: PropTypes.instanceOf(moment),
    label: PropTypes.string,
    align: PropTypes.oneOf(['left', 'right']),
    isRangeDate: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    onChange: () => {},
    label: 'Data',
    align: 'left',
    disabled: false,
    isMobile: false,
    isRangeDate: false,
  };

  outsideClick() {
    this.setState({ showCalendar: false });
  }

  toggleCalendar() {
    this.setState({ showCalendar: !this.state.showCalendar });
  }

  hasDates() {
    const { startDate, endDate, date } = this.state;

    if (this.props.isRangeDate) {
      return startDate && endDate;
    }

    return !!date;
  }

  renderDates(startDate, endDate, date) {
    if (this.props.isRangeDate) {
      return `${moment(startDate).format('DD/MM/YYYY')} - ${moment(endDate).format('DD/MM/YYYY')}`;
    }

    return `${moment(date).format('DD/MM/YYYY')}`;
  }

  changeDate(dateValues) {
    this.setState(dateValues);
    const { startDate, endDate } = dateValues;
    const { isRangeDate } = this.props;

    if (isRangeDate && startDate && endDate) {
      this.toggleCalendar();
    }
    if (!isRangeDate) {
      this.toggleCalendar();
    }
    this.props.onChange(dateValues);
  }

  render() {
    const { startDate, endDate, date, showCalendar } = this.state;
    const { className, align, isMobile, disabled, isRangeDate, ...rest } = this.props;
    const labelClasses = cx(styles.label, {
      [styles.isActive]: this.hasDates() || showCalendar,
    });

    const calendarClasses = cx(styles.calendar, {
      [styles.isActive]: showCalendar,
      [styles[align]]: align,
      [styles.isMobile]: isMobile,
    });

    return (
      <div className={cx(styles.wrap, className)} {...rest}>
        <div className={styles.labelWrapper}>
          <span className={labelClasses}>{this.props.label}</span>
          <fieldset className={styles.input} onClick={this.toggleCalendar} disabled={disabled}>
            <Icon className={styles.calendarIcon} name="today" size={20} />
            <span className={styles.inputContent}>
              {this.hasDates() && this.renderDates(startDate, endDate, date)}
            </span>
            <Icon className={styles.arrow} name="arrow_drop_down" size={20} />
          </fieldset>
        </div>
        <div className={calendarClasses}>
          <Calendar
            {...this.props}
            startDate={startDate || date}
            endDate={endDate}
            onOutsideClick={this.outsideClick}
            onChange={dates => this.changeDate(dates)}
            isOutsideRange={day => isInclusivelyAfterDay(day, moment().add(1, 'day'))}
            isRangeDate={isRangeDate}
          />
        </div>

        {isMobile && <div className={cx(styles.overlay, { [styles.isOpen]: showCalendar })} />}
      </div>
    );
  }
}

export default CSSModules(DatePicker, styles);
