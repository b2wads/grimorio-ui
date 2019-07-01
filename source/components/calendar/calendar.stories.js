import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import moment from 'moment';
import Calendar from './calendar-component';

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
