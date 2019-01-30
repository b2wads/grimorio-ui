import React from 'react';
import { storiesOf } from '@storybook/react';

import Tag from './tag-component';

const stories = storiesOf('Tag', module);


stories.addWithInfo('Normal', () => (
  <div>
    <Tag color="primary" >1º Ranking</Tag>
  </div>
));

stories.addWithInfo('Fixed', () => (
  <div>
    <Tag color="primary" fixed >2º Ranking</Tag>
  </div>
));
