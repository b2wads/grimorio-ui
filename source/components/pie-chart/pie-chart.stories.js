import React from 'react';
import { withState } from '../../helpers/storybook';

import PieChart from './pie-chart-component';
import Button from '../button';
import Panel from '../panel';

export default {
  title: 'PieChart',
  component: PieChart,
};

export const Normal = () => (
  <PieChart
    chartData={{
      labels: ['Verde', 'Rosa', 'Roxo'],
      backgroundColor: ['#2D898B', '#CF1259', '#3772FF'],
      data: [10, 20, 30],
    }}
  />
);

export const Pie = () => (
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

export const Error = () => (
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

export const WithChangingData = withState({
  loading: false,
  data: [10, 20, 30],
  label: ['Verde', 'Rosa', 'Roxo'],
  color: ['#2D898B', '#CF1259', '#3772FF'],
}, store => {
  const change = () => {
    store.set({ loading: true });
    setTimeout(() => {
      store.set({
        data: [50, 15, 21, 34],
        label: ['Verde', 'Rosa', 'Roxo', 'Outro'],
        color: ['#2D898B', '#CF1259', '#3772FF', 'green'],
        loading: false,
      });
    }, 1500);
  };

  return (
    <div>
      <Button onClick={change}>Change</Button>
      <br />
      <br />
      <br />

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
  );
});


