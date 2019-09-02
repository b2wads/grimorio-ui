import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';
import moment from 'moment';

moment.locale('pt-br');

import LineGraph from './line-graph-component';
import Button from '../button';
import Panel from '../panel';

const stories = storiesOf('LineGraph', module);

stories.addDecorator(withKnobs);

const data = [
  {
    date: '2018-10-01',
    revenue: 180349.85,
    amount: 339,
  },
  {
    date: '2018-10-02',
    revenue: 135829.48,
    amount: 501,
  },
  {
    date: '2018-10-03',
    revenue: 136483.27,
    amount: 195,
  },
  {
    date: '2018-10-04',
    revenue: 92894.83,
    amount: 195,
  },
  {
    date: '2018-10-05',
    revenue: 31337.56,
    amount: 87,
  },
  {
    date: '2018-10-06',
    revenue: 43051.41,
    amount: 30,
  },
  {
    date: '2018-10-07',
    revenue: 34653.47,
    amount: 187,
  },
  {
    date: '2018-10-08',
    revenue: 20168.31,
    amount: 127,
  },
  {
    date: '2018-10-09',
    revenue: 7148.05,
    amount: 68,
  },
  {
    date: '2018-10-10',
    revenue: 25422.48,
    amount: 231,
  },
  {
    date: '2018-10-11',
    revenue: 32116.86,
    amount: 57,
  },
  {
    date: '2018-10-12',
    revenue: 18591.25,
    amount: 21,
  },
  {
    date: '2018-10-13',
    revenue: 13584.02,
    amount: 9,
  },
  {
    date: '2018-10-14',
    revenue: 3247.3,
    amount: 108,
  },
  {
    date: '2018-10-15',
    revenue: 21824.86,
    amount: 197,
  },
  {
    date: '2018-10-16',
    revenue: 9274.97,
    amount: 277,
  },
  {
    date: '2018-10-17',
    revenue: 23227.05,
    amount: 123,
  },
  {
    date: '2018-10-18',
    revenue: 9274.97,
    amount: 0,
  },
];

const other = [
  {
    date: '2018-10-01',
    revenue: 20000,
    amount: 100,
  },
  {
    date: '2018-10-02',
    revenue: 30000,
    amount: 200,
  },
  {
    date: '2018-10-03',
    revenue: 80000,
    amount: 300,
  },
];

const otherTranformed = [
  {
    date: '2018-10-01',
    revenue: 50000,
    amount: 100,
  },
  {
    date: '2018-10-02',
    revenue: 70000,
    amount: 200,
  },
  {
    date: '2018-10-03',
    revenue: 100000,
    amount: 300,
  },
  {
    date: '2018-10-04',
    revenue: 100000,
    amount: 300,
  },
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
          unitStepSize: 2,
          displayFormats: {
            day: 'D/M',
          },
        },
      },
    ],
  },
};

stories.add('Normal', () =>
  <Panel title="Normal" accordion>
    <LineGraph
      title="Pedidos!"
      style={{ height: '400px' }}
      accordion
      datasets={[
        {
          data: transformData(data),
          label: 'Faturados',
          borderColor: '#00b8ad',
          pointHoverBackgroundColor: '#fff',
          fill: false,
        },
        {
          data: transformData(other),
          label: 'Other',
          borderColor: 'red',
          pointHoverBackgroundColor: '#fff',
          fill: false,
        },
      ]}
      options={options}
    />
  </Panel>
);

stories.add('No Legend', () =>
  <Panel title="Normal" accordion>
    <LineGraph
      title="Pedidos!"
      style={{ height: '400px' }}
      accordion
      noLegend
      datasets={[
        {
          data: transformData(data),
          label: 'Faturados',
          borderColor: '#00b8ad',
          pointHoverBackgroundColor: '#fff',
          fill: false,
        },
        {
          data: transformData(other),
          label: 'Other',
          borderColor: 'red',
          pointHoverBackgroundColor: '#fff',
          fill: false,
        },
      ]}
      options={options}
    />
  </Panel>
);

stories.add('Error', () => (
  <LineGraph
    title="Pedidos!"
    error
    onErrorClick={() => alert('try again!')}
    style={{ height: '400px' }}
    actions={<Button color="variant" modifier="outline">Export</Button>}
    datasets={[]}
    options={options}
  />
));

stories.add(
  'With changing data',
  withState({ loading: false, data: other, label: 'teste 1' })(({ store }) => {
    const change = () => {
      store.set({ loading: true });
      setTimeout(() => {
        store.set({ data: otherTranformed, label: 'teste 2', loading: false });
      }, 1500);
    };

    return (
      <div>
        <Button onClick={change}>
          Change
        </Button>
        <br />
        <br />
        <br />

        <Panel title="Changing Data" accordion>
          <LineGraph
            loading={store.state.loading}
            title="Pedidos!"
            style={{ height: '400px' }}
            datasets={[
              {
                data: transformData(store.state.data),
                label: store.state.label,
                borderColor: '#00b8ad',
                pointHoverBackgroundColor: '#fff',
                fill: false,
              },
            ]}
            options={options}
          />
        </Panel>
      </div>
    );
  })
);

// return <div>
//     <Button onClick={change}>
//       Change
//     </Button>
//     <br />
//     <br />
//     <br />

//     <Panel title="Changing Data" accordion>
//       <LineGraph
//         loading={store.state.loading}
//         title="Pedidos!"
//         style={{ height: '400px' }}
//         datasets={[
//           {
//             data: transformData(store.state.data),
//             label: store.state.label,
//             borderColor: '#00b8ad',
//             pointHoverBackgroundColor: '#fff',
//             fill: false,
//           },
//         ]}
//         options={options}
//       />
//     </Panel>
//   </div>

stories.add('With custom tooltip label', () =>
  <Panel title="Normal" accordion>
    <LineGraph
      title="Pedidos!"
      style={{ height: '400px' }}
      accordion
      datasets={[
        {
          data: transformData(data),
          label: 'Faturados',
          borderColor: '#00b8ad',
          pointHoverBackgroundColor: '#fff',
          fill: false,
        },
        {
          data: transformData(other),
          label: 'Other',
          borderColor: 'red',
          pointHoverBackgroundColor: '#fff',
          fill: false,
        },
      ]}
      options={options}
      tooltipFormatLabel={(tooltipItem, data) => {
        return `customizado! ${data.datasets[tooltipItem.datasetIndex].label}: ${tooltipItem.yLabel}`
      }}
    />
  </Panel>
);
