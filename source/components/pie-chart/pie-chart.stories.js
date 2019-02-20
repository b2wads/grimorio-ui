import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import PieChart from './pie-chart-component';

const stories = storiesOf('PieChart', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () =>
  <PieChart
    labels={['teste1', 'teste2', 'teste3']}
    cutoutPercentage={50}
    datasets={[
      {
        data: [10, 20, 30],
        backgroundColor: ['red', 'yellow', 'blue']
      }
    ]}
  />
);
