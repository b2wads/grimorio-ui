import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import moment from 'moment';

import LineGraph from './line-graph-component';

const stories = storiesOf('LineGraph', module);

stories.addDecorator(withKnobs);

const data = [
  {
    date: "2018-10-01",
    revenue: 180349.85,
    amount: 339
  },
  {
    date: "2018-10-02",
    revenue: 135829.48,
    amount: 501
  },
  {
    date: "2018-10-03",
    revenue: 136483.27,
    amount: 195
  },
  {
    date: "2018-10-04",
    revenue: 92894.83,
    amount: 195
  },
  {
    date: "2018-10-05",
    revenue: 31337.56,
    amount: 87
  },
  {
    date: "2018-10-06",
    revenue: 43051.41,
    amount: 30
  },
  {
    date: "2018-10-07",
    revenue: 34653.47,
    amount: 187
  },
  {
    date: "2018-10-08",
    revenue: 20168.31,
    amount: 127
  },
  {
    date: "2018-10-09",
    revenue: 7148.05,
    amount: 68
  },
  {
    date: "2018-10-10",
    revenue: 25422.48,
    amount: 231
  },
  {
    date: "2018-10-11",
    revenue: 32116.86,
    amount: 57
  },
  {
    date: "2018-10-12",
    revenue: 18591.25,
    amount: 21
  },
  {
    date: "2018-10-13",
    revenue: 13584.02,
    amount: 9
  },
  {
    date: "2018-10-14",
    revenue: 3247.3,
    amount: 108
  },
  {
    date: "2018-10-15",
    revenue: 21824.86,
    amount: 197
  },
  {
    date: "2018-10-16",
    revenue: 9274.97,
    amount: 277
  },
  {
    date: "2018-10-17",
    revenue: 23227.05,
    amount: 123
  },
  {
    date: "2018-10-18",
    revenue: 9274.97,
    amount: 0
  }
];

const transformData = data => {
  return data.map(info => ({
    x: moment(`${info.date}T00:00:00`),
    y: info.revenue,
  }));
};

const options = {
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          unit: 'day',
          unitStepSize: 2
        }
      }
    ]
  },
};

stories.addWithInfo('Normal', () =>
    <LineGraph
      title="Pedidos!"
      style={{ height: '500px' }}
      datasets={[
        {
          data: transformData(data),
          label: 'Faturados',
          borderColor: '#00b8ad',
          pointHoverBackgroundColor: '#fff',
          fill: false,
        },
      ]}
      options={options}
    />
);
