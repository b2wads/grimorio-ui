import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import DatetimePicker from './datetime-picker-component';

const stories = storiesOf('DatetimePicker', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
  <div>
    <DatetimePicker
      dateFormat={'DD/MM/YYYY'}
      timeFormat={'H:mm'}
      locale="pt-br"
      placeholder="Completo"
      closeOnSelect={true}
      name='startDate'
      defaultValue="12/12/2010"
      onChange={(name, value) => console.log(name, value)}
    />
    <br/>
    <DatetimePicker
      dateFormat={'DD/MM/YYYY'}
      timeFormat={false}
      locale="pt-br"
      placeholder="Apenas Data"
      closeOnSelect={true}
      name='endDate'
      defaultValue="12/12/2010"
      onChange={(name, value) => console.log(name, value)}
    />
    <br/>
    <DatetimePicker
      dateFormat={'MM/YYYY'}
      timeFormat={false}
      locale="pt-br"
      placeholder="Apenas mês e ano"
      viewMode="months"
      closeOnSelect={true}
    />
    <br/>
    <DatetimePicker
      dateFormat={'YYYY'}
      timeFormat={false}
      locale="pt-br"
      placeholder="Apenas ano"
      viewMode="years"
      closeOnSelect={true}
    />
    <br/>
    <DatetimePicker
      dateFormat={false}
      timeFormat={'H:mm'}
      locale="pt-br"
      placeholder="Apenas hora e minuto"
      viewMode="time"
      closeOnSelect={true}
      name='startHour'
      defaultValue="06:00"
      onChange={(name, value) => console.log(name, value)}
    />
  </div>
));

