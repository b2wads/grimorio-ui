import React from 'react';
import { withState } from '../../helpers/storybook';

import TablePanel from './table-panel-component';
import Button from '../button';

export default {
  title: 'TablePanel',
  component: TablePanel,
};

const simpledata = [
  {
    name: { first: 'Fulano', last: 'da Silva' },
    gender: 'male',
    email: 'fulano123@teste.com',
    dob: { age: '45' },
  },
  {
    name: { first: 'Fulana', last: 'da Silva' },
    gender: 'female',
    email: 'fulana456@teste.com',
    dob: { age: '56' },
  },
  {
    name: { first: 'Fulano', last: 'da Silva' },
    gender: 'male',
    email: 'fulano123@teste.com',
    dob: { age: '45' },
  },
];

const schema = {
  name: {
    title: 'Nome',
    headClassName: null,
    className: null,
    render: (info) => info.name.first,
  },
  surname: {
    title: 'Sobrenome',
    headClassName: null,
    className: null,
    render: (info) => info.name.last,
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
    render: (info) => (
      <Button onClick={() => alert(`Tenho ${info.dob.age} anos!`)}>Descobrir idade</Button>
    ),
  },
};

const meta = {
  count: 23,
  limit: 10,
  offset: 20,
};

export const Normal = () => {
  return (
    <TablePanel
      title="Jogo da Idade"
      actions={<Button>Trocar nomes</Button>}
      schema={schema}
      data={simpledata}
      pager
      perpage
      meta={{}}
    />
  );
};

export const WithHeaderSeparator = () => {
  return (
    <TablePanel
      title="Jogo da Idade"
      actions={<Button>Trocar nomes</Button>}
      schema={schema}
      data={simpledata}
      pager
      perpage
      headerSeparator
      meta={{}}
    />
  );
};



export const Scroll = () => {
  return (
    <TablePanel
      scrollY
      scrollX
      width="500px"
      height="150px"
      title="Jogo da Idade"
      actions={<Button>Trocar nomes</Button>}
      schema={schema}
      data={simpledata}
      pager
      perpage
      meta={{}}
    />
  );
};

export const Sticky = () => {
  const height = 150;
  return (
    <TablePanel
      scrollY
      height={height}
      title="Jogo da Idade"
      actions={<Button>Trocar nomes</Button>}
      schema={schema}
      data={simpledata}
      pager
      perpage
      meta={{}}
      isSticky
    />
  );
};

export const Error = () => {
  return (
    <TablePanel
      error
      errorMessage="Algo deu errado na busca desses dados :("
      title="Jogo da Idade"
      actions={<Button>Trocar nomes</Button>}
      schema={schema}
      data={[]}
      pager
      perpage
      meta={{
        count: 0,
        limit: 10,
        offset: 0,
      }}
    />
  );
};

export const SpecialCase = () => {
  const special = [
    {
      className: 'mail',
      case: (info) => info.email === 'fulana456@teste.com',
    },
    {
      className: 'male',
      case: (info) => info.gender === 'male',
    },
  ];

  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .mail { background: darkseagreen; color: white; }
        .male { background: cornflowerblue; color: white }
      `,
        }}
      />

      <TablePanel
        title="Jogo da Idade"
        actions={<Button>Trocar nomes</Button>}
        schema={schema}
        data={simpledata}
        pager
        perpage
        meta={meta}
        specialCase={special}
      />
    </div>
  );
};

const _meta = {
  count: 110,
  limit: 10,
  offset: 0,
};

export const WithAsyncData = withState({ data: null, meta: _meta, loading: null }, store => {
  const getNames = (type, value = 0) => {
    const typeOffset = {
      prev: store.state.meta.offset - store.state.meta.limit,
      next: store.state.meta.limit + store.state.meta.offset,
      first: 0,
      last: store.state.meta.count - store.state.meta.limit,
      number: (value - 1) * store.state.meta.limit,
    };

    store.set({ loading: true });

    fetch(`https://randomuser.me/api/?results=${store.state.meta.limit}`)
      .then((res) => res.json())
      .then((res) => {
        store.set({
          data: res.results,
          loading: false,
          meta: {
            count: 110,
            limit: 10,
            offset: typeOffset[type],
          },
        });
      });
  };

  store.state.data === null && store.state.loading === null && getNames('first');

  return (
    <TablePanel
      title="Jogo da Idade"
      layout="fixed"
      actions={<Button onClick={() => getNames(0)}>Trocar nomes</Button>}
      schema={schema}
      data={store.state.data}
      pager
      hasFirstLast
      hasPagination
      perpage
      loading={store.state.loading}
      onClickPagination={(type, value) => getNames(type, value)}
      meta={store.state.meta}
    />
  );
});


