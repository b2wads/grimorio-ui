import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';

import styles from '../datetime-picker.styl';

const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

class DateTimePickerMonths extends PureComponent {
  constructor(props) {
    super(props);

    this.renderMonths = this.renderMonths.bind(this);
    this.updateSelectedMonth = this.updateSelectedMonth.bind(this);
    this.renderMonth = this.renderMonth.bind(this);
    this.alwaysValidDate = this.alwaysValidDate.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  static propTypes = {
    selectedDate: PropTypes.any,
    viewDate: PropTypes.any,
    renderMonth: PropTypes.any,
    isValidDate: PropTypes.any,
    updateOn: PropTypes.any,
    updateSelectedDate: PropTypes.any,
    handleClickOutside: PropTypes.any,
    subtractTime: PropTypes.any,
    showView: PropTypes.any,
    addTime: PropTypes.any,
    setDate: PropTypes.any,
  };

  renderMonths() {
    let date = this.props.selectedDate;
    let month = this.props.viewDate.month();
    let year = this.props.viewDate.year();
    let rows = [];
    let i = 0;
    let months = [];
    let renderer = this.props.renderMonth || this.renderMonth;
    let isValid = this.props.isValidDate || this.alwaysValidDate;
    let classes;
    let props;
    let currentMonth;
    let isDisabled;
    let noOfDaysInMonth;
    let daysInMonth;
    let validDay;
    // Date is irrelevant because we're only interested in month
    let irrelevantDate = 1;

    while (i < 12) {
      classes = styles.rdtMonth;
      currentMonth = this.props.viewDate.clone().set({ year: year, month: i, date: irrelevantDate });

      noOfDaysInMonth = currentMonth.endOf('month').format('D');
      daysInMonth = Array.from({ length: noOfDaysInMonth }, function(e, i) {
        return i + 1;
      });

      validDay = daysInMonth.find(function(d) {
        let day = currentMonth.clone().set('date', d);
        return isValid(day);
      });

      isDisabled = validDay === undefined;

      if (isDisabled) {
        classes += ` ${styles.rdtDisabled}`;
      }

      if (date && i === month && year === date.year()) {
        classes += ` ${styles.rdtActive}`;
      }

      props = {
        key: i,
        'data-value': i,
        className: classes,
      };

      if (!isDisabled) {
        props.onClick = this.props.updateOn === 'months' ? this.updateSelectedMonth : this.props.setDate('month');
      }

      months.push(renderer(props, i, year, date && date.clone()));

      if (months.length === 4) {
        rows.push(<tr key={`${month}_${rows.length}`}>{months}</tr>);
        months = [];
      }

      i++;
    }

    return rows;
  }

  updateSelectedMonth(event) {
    this.props.updateSelectedDate(event);
  }

  renderMonth(props, month) {
    let localMoment = this.props.viewDate;
    let monthStr = localMoment.localeData().monthsShort(localMoment.month(month));
    let strLength = 3;
    // Because some months are up to 5 characters long, we want to
    // use a fixed string length for consistency
    let monthStrFixedLength = monthStr.substring(0, strLength);

    return <td {...props}>{capitalize(monthStrFixedLength)}</td>;
  }

  alwaysValidDate() {
    return 1;
  }

  handleClickOutside() {
    this.props.handleClickOutside();
  }

  render() {
    return (
      <div className={styles.rdtMonths}>
        <table key="a">
          <thead>
            <tr>
              <th key="prev" className={styles.rdtPrev}>
                <span onClick={this.props.subtractTime(1, 'years')}>‹</span>
              </th>
              <th
                key="year"
                className={styles.rdtSwitch}
                onClick={this.props.showView('years')}
                colSpan="2"
                data-value={this.props.viewDate.year()}
              >
                {this.props.viewDate.year()}
              </th>
              <th key="next" className={styles.rdtNext}>
                <span onClick={this.props.addTime(1, 'years')}>›</span>
              </th>
            </tr>
          </thead>
        </table>
        <table key="months">
          <tbody key="b">
            {this.renderMonths()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default onClickOutside(DateTimePickerMonths);
