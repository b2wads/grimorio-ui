import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs';

import Placeholder from './index';

const stories = storiesOf('Placeholder', module);

stories.addDecorator(withKnobs);

const options = {
  text: 'Text',
  media: 'Media',
  textRow: 'TextRow',
  rect: 'Rect',
  round: 'Round'
};

stories.addWithInfo('Normal', () => (
  <div>
    <Placeholder
      reducerName={'xpto'}
      ready={boolean('Ready', false)}
      rows={number('Linhas', 5)}
      type={select('Type', options, 'text')}
      firstLaunchOnly={boolean('first launch only', false)}
      color='#f0f0f0'
      style={{ minWidth: 50, minHeight: 50 }}
    >
      <div>
        Esse é o conteúdo
      </div>
    </Placeholder>
  </div>
));
