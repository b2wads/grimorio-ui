import React from 'react';
import { storiesOf } from '@storybook/react';

import Tag from './tag-component';

const stories = storiesOf('Tag', module);


stories.addWithInfo('Closable', () => (
  <div>
    <Tag color="primary" >1º Ranking</Tag>
  </div>
));

stories.addWithInfo('Not closable', () => (
  <div>
    <Tag color="primary" closable={false} >2º Ranking</Tag>
  </div>
));
