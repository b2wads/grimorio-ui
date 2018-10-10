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

stories.addWithInfo('Default Values', () => {
  return (
    <div>
      <DatePicker
        defaultStartDate={moment()}
        defaultEndDate={moment().add('7', 'd')}
        onChange={({ startDate, endDate }) => printDates(startDate, endDate)} />
    </div>
  );
});
