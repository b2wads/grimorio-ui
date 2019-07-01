import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import moment from 'moment';
import DayPickerRangeController from 'react-dates/lib/components/DayPickerRangeController';

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
    // TODO: verificar que, ao escolher uma data de fim anterior a de início, se comporta diferente do componente de datepicker
    let dateValues = {
      startDate,
      endDate: null,
    };

    if (this.state.focusedInput === 'endDate') {
      dateValues.endDate = endDate;
      dateValues.focusedInput = 'startDate';
    }

    if (this.props.isSingleDate) {
      dateValues = {
        focusedInput: 'startDate',
        startDate,
        endDate: null,
        singleDate: startDate,
      };
    }

    this.props.onChange(dateValues);
    this.setState(dateValues);
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
        onOutsideClick={this.outsiteClick}
        isOutsideRange={this.isOutsideRange}
        minimumNights={0}
        initialVisibleMonth={this.initialMonth}
      />
    );
  }
}

export default CSSModules(Calendar, styles);
