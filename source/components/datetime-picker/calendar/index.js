import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DaysView from './days';
import MonthsView from './months';
import YearsView from './years';
import TimeView from './time';

class CalendarContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.viewComponents = {
      days: DaysView,
      months: MonthsView,
      years: YearsView,
      time: TimeView,
    };
  }

  static defaultProps = {
    view: 'days',
  };

  static propTypes = {
    view: PropTypes.string,
  };

  render() {
    const { view, ...viewProps } = this.props;
    const Component = this.viewComponents[view];

    return <Component {...viewProps} />;
  }
}

export default CalendarContainer;
