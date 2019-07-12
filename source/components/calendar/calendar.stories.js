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

stories.addWithInfo('Range date', withState({ startDate: undefined, endDate: undefined })(({ store }) => {
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

stories.addWithInfo('Single Date', withState({ singleDate: undefined })(({ store }) => {
  const handleChange = ({date}) => {
    store.set({ singleDate: date });
  }
  return (
    <Calendar
      onChange={dates => handleChange(dates)}
      date={store.state.singleDate}
    />
  );
}));

stories.addWithInfo('Block days', withState({ singleDate: undefined })(({ store }) => {
  const handleChange = ({date}) => {
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


stories.addWithInfo(
  'With default values', ``,
  withState({ startDate: moment().subtract(7, 'days'), endDate: moment() })
  (({ store }) => {
    const handleClick = () => {
      store.set({ startDate: moment().subtract(10, 'days'), endDate: moment().subtract(5, 'days') });
    }

    const handleChange = dates => {
      store.set(dates);
    }

    return (
      <div>
        <Calendar
          startDate={store.state.startDate}
          endDate={store.state.endDate}
          onChange={dates => handleChange(dates)}
          isRangeDate
        />
        <Button onClick={handleClick}>
          Novos valores de data
    </Button>
      </div>
    )
  }
));
