import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';

import styles from '../datetime-picker.styl';

class DateTimePickerYears extends PureComponent {
  constructor(props) {
    super(props);

    this.renderYears = this.renderYears.bind(this);
    this.updateSelectedYear = this.updateSelectedYear.bind(this);
    this.renderYear = this.renderYear.bind(this);
    this.alwaysValidDate = this.alwaysValidDate.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  static propTypes = {
    renderYear: PropTypes.node,
    selectedDate: PropTypes.any,
    isValidDate: PropTypes.any,
    viewDate: PropTypes.any,
    updateOn: PropTypes.any,
    setDate: PropTypes.any,
    updateSelectedDate: PropTypes.any,
    handleClickOutside: PropTypes.any,
    subtractTime: PropTypes.any,
    addTime: PropTypes.any,
    showView: PropTypes.any,
  };

  renderYears(year) {
    let years = [];
    let i = -1;
    let rows = [];
    let renderer = this.props.renderYear || this.renderYear;
    let { selectedDate } = this.props;
    let isValid = this.props.isValidDate || this.alwaysValidDate;
    let classes;
    let props;
    let currentYear;
    let isDisabled;
    let noOfDaysInYear;
    let daysInYear;
    let validDay;
    // Month and date are irrelevant here because
    // we're only interested in the year
    let irrelevantMonth = 0;
    let irrelevantDate = 1;

    year--;
    while (i < 11) {
      classes = styles.rdtYear;
      currentYear = this.props.viewDate.clone().set({ year: year, month: irrelevantMonth, date: irrelevantDate });

      // Not sure what 'rdtOld' is for, commenting out for now as it's not working properly
      // if ( i === -1 | i === 10 )
      // classes += ' rdtOld';

      noOfDaysInYear = currentYear.endOf('year').format('DDD');
      daysInYear = Array.from({ length: noOfDaysInYear }, function(e, i) {
        return i + 1;
      });

      validDay = daysInYear.find(function(d) {
        let day = currentYear.clone().dayOfYear(d);
        return isValid(day);
      });

      isDisabled = validDay === undefined;

      if (isDisabled) {
        classes += ` ${styles.rdtDisabled}`;
      }

      if (selectedDate && selectedDate.year() === year) {
        classes += ` ${styles.rdtActive}`;
      }

      props = {
        key: year,
        'data-value': year,
        className: classes,
      };

      if (!isDisabled) {
        props.onClick = this.props.updateOn === 'years' ? this.updateSelectedYear : this.props.setDate('year');
      }
      years.push(renderer(props, year, selectedDate && selectedDate.clone()));

      if (years.length === 4) {
        rows.push(<tr key={i}>{years}</tr>);
        years = [];
      }

      year++;
      i++;
    }

    return rows;
  }

  updateSelectedYear(event) {
    this.props.updateSelectedDate(event);
  }

  renderYear(props, year) {
    return <td {...props}>{year}</td>;
  }

  alwaysValidDate() {
    return 1;
  }

  handleClickOutside() {
    this.props.handleClickOutside();
  }

  render() {
    let year = parseInt(this.props.viewDate.year() / 10, 10) * 10;

    return (
      <div className={styles.rdtYears}>
        <table key="a">
          <thead>
            <tr>
              <th key="prev" className={styles.rdtPrev}>
                <span onClick={this.props.subtractTime(10, 'years')}>‹</span>
              </th>
              <th key="year" className={styles.rdtSwitch} onClick={this.props.showView('years')} colSpan="2">
                {`${year}-${year + 9}`}
              </th>
              <th key="next" className={styles.rdtNext}>
                <span onClick={this.props.addTime(10, 'years')}>›</span>
              </th>
            </tr>
          </thead>
        </table>
        <table key="years">
          <tbody>
            {this.renderYears(year)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default onClickOutside(DateTimePickerYears);
