import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import Pager from './pager-component';

const stories = storiesOf('Pager', module);

const data = [];

for (let i = 0; i < 10; ++i) {
  data.push({ id: i });
}

const meta = {
  count: 23,
  limit: 10,
  offset: 0,
};

const limitList = [10, 15, 50];
stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => {
  return (
    <Pager
      {...meta}
      perpage={10}
      length={data.length}
      onLimitChange={() => alert('mudou o limit')}
      onClickPagination={(type, value) => alert(`clicou na página ${value}`)}
      limitList={limitList}
      hasFirstLast
      hasPagination
    />
  );
});
