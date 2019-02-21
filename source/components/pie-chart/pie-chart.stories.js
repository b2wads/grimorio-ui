import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import PieChart from './pie-chart-component';
import Button from '../button';
import Panel from '../panel';

const stories = storiesOf('PieChart', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () =>
  <PieChart
    chartData={{
      labels: ['Verde', 'Rosa', 'Roxo'],
      backgroundColor: ['#2D898B', '#CF1259', '#3772FF'],
      data: [10, 20, 30],
    }}
  />
);

stories.addWithInfo('Pie', () =>
  <PieChart
    options={{
      cutoutPercentage: 0,
    }}
    chartData={{
      labels: ['Verde', 'Rosa', 'Roxo'],
      backgroundColor: ['#2D898B', '#CF1259', '#3772FF'],
      data: [10, 20, 30],
    }}
  />
);

stories.addWithInfo('Error', () =>
  <PieChart
    cutoutPercentage={50}
    chartData={{
      labels: ['Verde', 'Rosa', 'Roxo'],
      backgroundColor: ['#2D898B', '#CF1259', '#3772FF'],
      data: [10, 20, 30],
    }}
    error
  />
);

stories.addWithInfo('With changing data', withState({
  loading: false,
  data: [10, 20, 30],
  label: ['Verde', 'Rosa', 'Roxo'],
  color: ['#2D898B', '#CF1259', '#3772FF']
})(({ store }) => {

  const change = () => {
    store.set({ loading: true })
    setTimeout(() => {
      store.set({
        data: [50, 15, 21, 34],
        label: ['Verde', 'Rosa', 'Roxo', 'Outro'],
        color: ['#2D898B', '#CF1259', '#3772FF', 'green'],
        loading: false
      })
    }, 1500)
  };

  return <div>
    <Button onClick={change}>
      Change
    </Button>
    <br/>
    <br/>
    <br/>

    <Panel title="Changing Data" accordion>
      <PieChart
        loading={store.state.loading}
        cutoutPercentage={50}
        chartData={{
          labels: store.state.label,
          backgroundColor: store.state.color,
          data: store.state.data,
        }}
      />
    </Panel>
  </div>
}));
