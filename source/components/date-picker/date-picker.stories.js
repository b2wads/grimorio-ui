import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import moment from 'moment';

import DatePicker from './date-picker-component';

const stories = storiesOf('DatePicker', module);

stories.addDecorator(withKnobs);

const printDates = (startDate, endDate) => {
  console.log('dates:', moment(startDate).format(), moment(endDate).format());
};

stories.add('Normal', () => {
  return (
    <div>
      <DatePicker
        onChange={({ startDate, endDate }) => printDates(startDate, endDate)}
      />
    </div>
  );
});

stories.add('Single Date', () => {
  return (
    <div>
      <DatePicker
        isSingleDate
        monthsToShow={1}
        onChange={(dates) => console.log('single date:', dates)}
      />
    </div>
  );
});

stories.add('Mobile', () => {
  return (
    <div>
      <DatePicker
        isMobile
        onChange={({ startDate, endDate }) => printDates(startDate, endDate)}
      />
    </div>
  );
});


stories.add('Default Values', () => {
  return (
    <div>
      <DatePicker
        defaultStartDate={moment().subtract(7, 'days')}
        defaultEndDate={moment()}
        onChange={({ startDate, endDate }) => printDates(startDate, endDate)}
      />

      <br/>
      <br/>

      <DatePicker
        defaultSingleDate={moment().subtract(7, 'days')}
        isSingleDate
        monthsToShow={1}
        initialMonth={moment()}
        onChange={(dates) => console.log('single date:', dates)}
      />
    </div>
  );
});

stories.add('Align', () => {
  return (
    <div>
      <DatePicker
        align="left"
        label="Align Calendar Left"
        onChange={({ startDate, endDate }) => printDates(startDate, endDate)}
      />

      <br/>
      <br/>

      <DatePicker
        align="right"
        label="Align Calendar Right"
        onChange={({ startDate, endDate }) => printDates(startDate, endDate)}
      />
    </div>
  );
});
