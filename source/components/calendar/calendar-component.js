import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import moment from 'moment';
import DayPickerRangeController from 'react-dates/lib/components/DayPickerRangeController';
import isInclusivelyAfterDay from 'react-dates/lib/utils/isInclusivelyAfterDay';

import styles from './calendar.styl';

class Calendar extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      startDate: props.defaultStartDate || props.defaultSingleDate || null,
      endDate: props.defaultEndDate || null,
      singleDate: props.defaultSingleDate || null,
      focusedInput: 'startDate',
    };

    moment.locale('pt-br');
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
    isSingleDate: false,
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
  };

  changeDate({ startDate, endDate }) {
    let dateValues = {
      startDate,
      endDate: null,
    };

    if (this.state.focusedInput === 'endDate' && endDate) {
      dateValues.endDate = endDate;
      dateValues.focusedInput = 'startDate';
      this.props.onChange(dateValues);
    }

    if (this.props.isSingleDate) {
      dateValues = {
        focusedInput: 'startDate',
        startDate,
        singleDate: startDate,
      };
      this.props.onChange(dateValues);
    }

    this.setState(dateValues);
  }
  isOutsideRange(day) {
    const { range, isSingleDate } = this.props;
    let endIsOutside = false;

    if (this.state.focusedInput === 'endDate') {
      endIsOutside = day.isAfter(moment(this.state.startDate).add(range, 'months'));
    }

    if (isSingleDate) {
      return false;
    }

    return endIsOutside || isInclusivelyAfterDay(day, moment().add(1, 'day'));
  }
  outsideClick() {
    const { isSingleDate } = this.props;
    const { startDate, endDate } = this.state;
    let resetDates = {};

    if (!startDate && !isSingleDate) {
      resetDates = { startDate: null, endDate: null };
    } else if (!endDate && !isSingleDate) {
      resetDates = { startDate, endDate: startDate };
    }

    this.props.onChange(resetDates);
    this.setState({ ...resetDates });
    this.props.onOutsideClick();
  }
  render() {
    const { startDate, endDate } = this.state;
    const { monthsToShow, isMobile } = this.props;

    return (
      <DayPickerRangeController
        startDate={startDate}
        endDate={endDate}
        onDatesChange={({ startDate, endDate }) => this.changeDate({ startDate, endDate })}
        focusedInput={this.state.focusedInput}
        onFocusChange={focusedInput => this.setState({ focusedInput })}
        hideKeyboardShortcutsPanel
        numberOfMonths={isMobile ? 1 : monthsToShow}
        isOutsideRange={this.isOutsideRange}
        onOutsideClick={this.outsideClick}
        minimumNights={0}
        initialVisibleMonth={this.initialMonth}
      />
    );
  }
}

export default CSSModules(Calendar, styles);
