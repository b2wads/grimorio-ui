import React from 'react';
import moment from 'moment';

import DatePicker from './date-picker-component';

export default {
  title: 'DatePicker',
  component: DatePicker,
};

const action = (name) => (...params) => {
  console.log(name, params);
};

export const Normal = () => {
  return (
    <div>
      <DatePicker
        isRangeDate
        onChange={action('onChange: dates object')}
        isOutsideRange={() => false}
      />
    </div>
  );
};

export const SingleDate = () => {
  return (
    <div>
      <DatePicker monthsToShow={1} onChange={action('onChange: dates object')} />
    </div>
  );
};

export const Mobile = () => {
  return (
    <div>
      <DatePicker isRangeDate isMobile onChange={action('onChange: dates object')} />
    </div>
  );
};

export const DefaultValues = () => {
  return (
    <div>
      <DatePicker
        isRangeDate
        defaultStartDate={moment().subtract(7, 'days')}
        defaultEndDate={moment()}
        onChange={action('onChange: dates object')}
      />

      <br />
      <br />

      <DatePicker
        defaultSingleDate={moment().subtract(7, 'days')}
        monthsToShow={1}
        initialMonth={moment()}
        onChange={action('onChange: dates object')}
      />
    </div>
  );
};

export const Align = () => {
  return (
    <div>
      <DatePicker
        isRangeDate
        align="left"
        label="Align Calendar Left"
        onChange={action('onChange: dates object')}
      />

      <br />
      <br />

      <DatePicker
        isRangeDate
        align="right"
        label="Align Calendar Right"
        onChange={action('onChange: dates object')}
      />
    </div>
  );
};
