import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import TablePanel from './table-panel-component';
import Button from '../button';

const stories = storiesOf('TablePanel', module);

const simpledata = [
  {
    name: { first: 'Fulano', last: 'da Silva' },
    gender: 'male',
    email: 'fulano123@teste.com',
    dob: { age: '45' },
  },
  {
    name: { first: 'Fulano', last: 'da Silva' },
    gender: 'male',
    email: 'fulano123@teste.com',
    dob: { age: '45' },
  },
  {
    name: { first: 'Fulano', last: 'da Silva' },
    gender: 'male',
    email: 'fulano123@teste.com',
    dob: { age: '45' },
  }
];

const schema = {
  name: {
    title: 'Nome',
    headClassName: null,
    className: null,
    render: info => info.name.first,
  },
  surname: {
    title: 'Sobrenome',
    headClassName: null,
    className: null,
    render: info => info.name.last,
  },
  gender: {
    title: 'Gênero',
    className: null,
  },
  email: {
    title: 'E-mail',
    className: null,
  },
  oi: {
    title: 'Adivinhe a idade',
    className: null,
    headClassName: null,
    render: info => <Button onClick={() => alert(`Tenho ${info.dob.age} anos!`)}>Descobrir idade</Button>,
  },
};

const meta = {
  count: 23,
  limit: 10,
  offset: 20,
};

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => {
  return (
    <TablePanel
      title="Jogo da Idade"
      actions={<Button>Trocar nomes</Button>}
      schema={schema}
      data={simpledata}
      pager
      meta={meta}
    />
  );
});

const _meta = {
  count: 30,
  limit: 10,
  offset: 0,
};

stories.addWithInfo('With async Data', withState({ data: null, meta: _meta, loading: true, })(({ store }) => {
  const getNames = (offset, type = 'add') => {
    store.set({ loading: true });
    fetch(`https://randomuser.me/api/?results=${store.state.meta.limit}`)
    .then(res => res.json())
    .then(res => {
      setTimeout(() => {
        store.set({
          data: res.results,
          loading: false,
          meta: {
            count: 30,
            limit: 10,
            offset: type === 'add' ? offset + store.state.meta.offset : store.state.meta.offset - offset,
          },
        });
      }, 1000);
    });
  };

  !store.state.data && getNames(0);

  return (
    <TablePanel
      title="Jogo da Idade"
      layout="fixed"
      actions={<Button onClick={getNames}>Trocar nomes</Button>}
      schema={schema}
      data={store.state.data}
      pager
      loading={store.state.loading}
      onClickNext={() => getNames(10)}
      onClickPrev={() => getNames(10, 'remove')}
      meta={store.state.meta}
    />
  );
}));
