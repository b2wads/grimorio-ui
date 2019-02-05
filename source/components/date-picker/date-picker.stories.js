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

stories.addWithInfo('Normal', () => {
  return (
    <div>
      <DatePicker
        onChange={({ startDate, endDate }) => printDates(startDate, endDate)}
      />
    </div>
  );
});

stories.addWithInfo('Single Day', () => {
  return (
    <div>
      <DatePicker
        singleDay
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
        defaultStartDate={moment().subtract(7, 'days')}
        defaultEndDate={moment()}
        onChange={({ startDate, endDate }) => printDates(startDate, endDate)}
      />

      <br/>
      <br/>

      <DatePicker
        defaultSingleDay={moment().subtract(7, 'days')}
        singleDay
        monthsToShow={1}
        onChange={(dates) => console.log('single date:', dates)}
      />
    </div>
  );
});

stories.addWithInfo('Align', () => {
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
