import React from 'react';
import { storiesOf } from '@storybook/react';

import Pager from './pager-component';

const stories = storiesOf('Pager', module);

const data = [];

for (let i = 0; i < 100; ++i) {
  data.push({ id: i });
}

const meta = {
  count: data.length,
  limit: 20,
  offset: 80,
};

const limitList = [10, 15, 20, 50];

stories.add('Normal', () => {
  return (
    <Pager
      {...meta}
      onLimitChange={() => alert('mudou o limit')}
      onClickPagination={(type, value) => alert(`clicou na página ${value}`)}
      hasPerpage
      limitList={limitList}
      hasFirstLast
      hasPagination
    />
  );
});

stories.add('Mobile', () => {
  return (
    <Pager
      {...meta}
      hasPerpage
      onLimitChange={() => alert('mudou o limit')}
      onClickPagination={(type, value) => alert(`clicou na página ${value}`)}
      limitList={limitList}
      hasFirstLast
      hasPagination
      isMobile
    />
  );
});
