import React, { PureComponent } from 'react';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../icon';

import styles from './date-picker.styl';

class DatePicker extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      startDate: props.defaultStartDate || null,
      endDate: props.defaultEndDate || null,
      focusedInput: null,
    };

    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.verifyClickOutside = this.verifyClickOutside.bind(this);
    moment.locale('pt-br');
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    defaultStartDate: PropTypes.instanceOf(moment),
    defaultEndDate: PropTypes.instanceOf(moment),
    label: PropTypes.string,
  };

  static defaultProps = {
    onChange: () => {},
    label: 'Data',
  };

  componentWillMount() {
    document.addEventListener('click', this.verifyClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.verifyClickOutside, false);
  }

  verifyClickOutside(e) {
    if (this.calendarWrap && !this.calendarWrap.contains(e.target)) {
      this.setState({ focusedInput: null });
    }
  }

  toggleCalendar() {
    this.setState({ focusedInput: this.state.focusedInput ? null : 'startDate' });
  }

  hasDates() {
    const { startDate, endDate } = this.state;
    return startDate && endDate;
  }

  changeDate({ startDate, endDate }) {
    this.props.onChange({ startDate, endDate });
    this.setState({ startDate, endDate });
  }

  render() {
    const { startDate, endDate, focusedInput } = this.state;
    const { className, ...rest } = this.props;
    const labelClasses = classNames(styles.label, {
      [styles.isActive]: this.hasDates() || focusedInput,
    });

    const calendarClasses = classNames(styles.calendar, {
      [styles.isActive]: focusedInput,
    });

    return (
      <div className={classNames(styles.wrap, className)} ref={el => (this.calendarWrap = el)} {...rest}>
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
            numberOfMonths={2}
          />
        </div>
      </div>
    );
  }
}

export default CSSModules(DatePicker, styles);
