import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';

import moment from 'moment';
import isInclusivelyAfterDay from 'react-dates/lib/utils/isInclusivelyAfterDay';
import Calendar from './calendar-component';


const stories = storiesOf('Calendar', module);

stories.add('Range date', withState({ startDate: undefined, endDate: undefined })(({ store }) => {
  const handleChange = dates => {
    store.set(dates);
  }

  return (
    <Calendar
      onChange={(dates) => handleChange(dates)}
      startDate={store.state.startDate}
      endDate={store.state.endDate}
      isRangeDate
    />
  );
}));

stories.add('Single Date', withState({ singleDate: undefined })(({ store }) => {
  const handleChange = ({ date }) => {
    store.set({ singleDate: date });
  }
  return (
    <Calendar
      onChange={dates => handleChange(dates)}
      date={store.state.singleDate}
    />
  );
}));

stories.add('Block days', withState({ singleDate: undefined })(({ store }) => {
  const handleChange = ({ date }) => {
    store.set({ singleDate: date });
  }
  return (
    <Calendar
      date={store.state.singleDate}
      onChange={dates => handleChange(dates)}
      isOutsideRange={day => isInclusivelyAfterDay(day, moment().add(1, 'day'))}
    />
  );
}));

stories.add('Starting with values', withState({ startDate: moment().subtract(7, 'days'), endDate: moment() })(({ store }) => {
  const handleChange = dates => {
    store.set(dates);
  }
  return (
    <Calendar
      startDate={store.state.startDate}
      endDate={store.state.endDate}
      onChange={dates => handleChange(dates)}
      isRangeDate
    />
  );
}));
