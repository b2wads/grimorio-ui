import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import DayPickerRangeController from 'react-dates/lib/components/DayPickerRangeController';

import styles from './calendar.styl';

class Calendar extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      focusedInput: 'startDate',
    };

    this.changeDate = this.changeDate.bind(this);
    this.isOutsideRange = this.isOutsideRange.bind(this);
    this.outsideClick = this.outsideClick.bind(this);
  }

  static defaultProps = {
    onChange: () => {},
    label: 'Data',
    align: 'left',
    monthsToShow: 2,
    range: 2,
    initialMonth: moment().subtract(1, 'month'),
    disabled: false,
    isMobile: false,
    isRangeDate: false,
    isOutsideRange: () => false,
  };

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    defaultStartDate: PropTypes.instanceOf(moment),
    defaultEndDate: PropTypes.instanceOf(moment),
    defaultSingleDate: PropTypes.instanceOf(moment),
    label: PropTypes.string,
    align: PropTypes.oneOf(['left', 'right']),
    monthsToShow: PropTypes.number,
    initialMonth: PropTypes.instanceOf(moment),
    isMobile: PropTypes.bool,
    locale: PropTypes.string,
    isRangeDate: PropTypes.bool,
  };

  changeDate({ startDate, endDate }) {
    const newState = {};
    let dateValues = {
      startDate,
      endDate: null,
    };

    if (this.state.focusedInput === 'endDate' && endDate) {
      dateValues.endDate = endDate;
      newState.focusedInput = 'startDate';
    }

    if (!this.props.isRangeDate) {
      dateValues = {
        date: startDate,
      };
      newState.focusedInput = 'startDate';
    }
    this.props.onChange(dateValues);
    this.setState({ ...newState });
  }
  isOutsideRange(day) {
    const { range, startDate } = this.props;
    const { focusedInput } = this.state;
    let endIsOutside = false;

    if (focusedInput === 'endDate') {
      endIsOutside = day.isAfter(moment(startDate).add(range, 'months'));
    }

    return endIsOutside || this.props.isOutsideRange(day);
  }
  outsideClick() {
    const { startDate, endDate, isRangeDate } = this.props;
    let resetDates = {};

    if (!startDate && isRangeDate) {
      resetDates = { startDate: null, endDate: null };
    } else if (!endDate && isRangeDate) {
      resetDates = { startDate, endDate: startDate };
    }
    this.setState({ focusedInput: 'startDate' });
    this.props.onChange(resetDates);
    this.props.onOutsideClick();
  }
  render() {
    const { monthsToShow, isMobile, onOutsideClick, startDate, endDate, date, initialMonth } = this.props;

    return (
      <DayPickerRangeController
        startDate={startDate || date}
        endDate={endDate}
        onDatesChange={({ startDate, endDate }) => this.changeDate({ startDate, endDate })}
        focusedInput={this.state.focusedInput}
        onFocusChange={focusedInput => this.setState({ focusedInput })}
        hideKeyboardShortcutsPanel
        numberOfMonths={isMobile ? 1 : monthsToShow}
        isOutsideRange={this.isOutsideRange}
        onOutsideClick={onOutsideClick && this.outsideClick}
        minimumNights={0}
        initialVisibleMonth={() => initialMonth}
      />
    );
  }
}

export default CSSModules(Calendar, styles);
