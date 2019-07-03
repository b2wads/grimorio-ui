import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import moment from 'moment';
import isInclusivelyAfterDay from 'react-dates/lib/utils/isInclusivelyAfterDay';
import Calendar from './calendar-component';
import Button from '../button/button-component';


const stories = storiesOf('Calendar', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => {
  return (
    <Calendar
      onChange={(dates) => console.log('single date:', dates)}
    />
  );
});

stories.addWithInfo('Single Date', () => {
  return (
    <Calendar
      onChange={(dates) => console.log('single date:', dates)}
      isSingleDate
    />
  );
});

stories.addWithInfo('Block days', () => {
  return (
    <Calendar
      onChange={(dates) => console.log('single date:', dates)}
      isSingleDate
      isOutsideRange={day => isInclusivelyAfterDay(day, moment().add(1, 'day'))}
    />
  );
});


stories.addWithInfo(
  'With default values', ``,
  withState({ startDate: moment().subtract(7, 'days'), endDate: moment() })
  (({ store }) => {
    const handleClick = () => {
      store.set({ startDate: moment().subtract(10, 'days'), endDate: moment().subtract(5, 'days') });
    }

    return (
      <div>
        <Calendar
          defaultStartDate={store.state.startDate}
          defaultEndDate={store.state.endDate}
          onChange={({ startDate, endDate }) => printDates(startDate, endDate)}
        />
        <Button onClick={handleClick}>
          Novos valores de data
    </Button>
      </div>
    )
  }
));
