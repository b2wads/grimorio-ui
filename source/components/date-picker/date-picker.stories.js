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

stories.addWithInfo('Range date', () => {
  return (
    <div>
      <DatePicker
        isRangeDate
        onChange={({ startDate, endDate }) => printDates(startDate, endDate)}
      />
    </div>
  );
});

stories.addWithInfo('Single Date', () => {
  return (
    <div>
      <DatePicker
        monthsToShow={1}
        onChange={(dates) => console.log('single date:', dates)}
      />
    </div>
  );
});

stories.addWithInfo('Mobile', () => {
  return (
    <div>
      <DatePicker
        isRangeDate
        isMobile
        onChange={({ startDate, endDate }) => printDates(startDate, endDate)}
      />
    </div>
  );
});


stories.addWithInfo('Default Values', () => {
  return (
    <div>
      <DatePicker
        isRangeDate
        defaultStartDate={moment().subtract(7, 'days')}
        defaultEndDate={moment()}
        onChange={({ startDate, endDate }) => printDates(startDate, endDate)}
      />

      <br/>
      <br/>

      <DatePicker
        defaultSingleDate={moment().subtract(7, 'days')}
        monthsToShow={1}
        initialMonth={moment()}
        onChange={(dates) => console.log('single date:', dates)}
      />
    </div>
  );
});

stories.addWithInfo('Align', () => {
  return (
    <div>
      <DatePicker
        isRangeDate
        align="left"
        label="Align Calendar Left"
        onChange={({ startDate, endDate }) => printDates(startDate, endDate)}
      />

      <br/>
      <br/>

      <DatePicker
        isRangeDate
        align="right"
        label="Align Calendar Right"
        onChange={({ startDate, endDate }) => printDates(startDate, endDate)}
      />
    </div>
  );
});
