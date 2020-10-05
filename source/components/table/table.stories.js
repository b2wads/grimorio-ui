import React from 'react';
import { withState } from '@dump247/storybook-state';

import Table from './table-component';
import Button from '../button';
import Popover from '../popover/popover-component';

export default {
  title: 'Table',
  component: Table,
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
    width: '100px',
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
    title: 'Diga Oi',
    className: null,
    headClassName: null,
    renderHead: () => <Button onClick={() => alert('Olá!')}>Diga oi para todos!</Button>,
    render: (info) => (
      <Button onClick={() => alert(`Tenho ${info.dob.age} anos!`)}>Adivinhe minha idade ;)</Button>
    ),
  },
};

export const Normal = () => {
  return <Table schema={schema} data={simpledata} />;
};

export const Fixed = () => {
  return <Table layout="fixed" schema={schema} data={simpledata} />;
};

export const RowHeight = () => {
  return <Table layout="fixed" rowHeight="80px" schema={schema} data={simpledata} />;
};

export const StickyHeader = withState({ data: null })(({ store }) => {
  fetch('https://randomuser.me/api/?results=10')
    .then((res) => res.json())
    .then((res) => {
      !store.state.data && store.set({ data: res.results });
    });

  return <Table schema={schema} data={store.state.data} scrollY height="400px" isSticky />;
});

StickyHeader.story = {
  name: 'Sticky header',
};

export const StickyHeaderFooterAndColumns = withState({ data: null })(({ store }) => {
  fetch('https://randomuser.me/api/?results=10')
    .then((res) => res.json())
    .then((res) => {
      !store.state.data &&
        store.set({
          data: res.results,
          dataFooter: [
            {
              value: 'Total: 32',
              colspan: 2,
            },
            { value: '-' },
            { value: '-' },
            { value: '-' },
          ],
        });
    });

  return (
    <Table
      schema={schema}
      numberFixedColumns="3"
      data={store.state.data}
      dataFooter={store.state.dataFooter}
      scrollY
      style={{ maxWidth: '500px', height: '400px' }}
      isSticky
    />
  );
});

StickyHeaderFooterAndColumns.story = {
  name: 'Sticky header, footer and columns',
};

export const TableStickyWithPopover = () => {
  const list = [
    { name: { first: 'aaaaaaa', last: 'bbbbbb' }, age: '22', withPopover: true },
    { name: { first: 'bbbbbbbb', last: 'ccccccc' }, age: '24' },
  ];
  const schemaTest = {
    name: {
      title: 'Nome',
      headClassName: null,
      width: '100px',
      className: null,
      render: (info) => info.name.first,
    },
    surname: {
      title: 'Sobrenome',
      headClassName: null,
      className: null,
      render: (info) => (
        <>
          {info.name.last}
          {info.withPopover && (
            <Popover
              actionComponent={<a>clique</a>}
              isOpen={true}
              position="bottomLeft"
              style={{ backgroundColor: 'red' }}
            >
              <div style={{ width: '300px' }}>
                Mollit deserunt elit culpa ex consectetur exercitation sunt est in adipisicing nisi
                enim voluptate ea.
              </div>
            </Popover>
          )}
        </>
      ),
    },
    age: {
      title: 'Gênero',
      className: null,
    },
  };

  return (
    <Table
      schema={schemaTest}
      numberFixedColumns="2"
      data={list}
      scrollY
      style={{ maxWidth: '500px', height: '400px' }}
      isSticky
    />
  );
};

TableStickyWithPopover.story = {
  name: 'Table sticky with popover',
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

      <Table layout="fixed" schema={schema} specialCase={special} data={simpledata} />
    </div>
  );
};

export const Scroll = () => {
  return <Table scrollY scrollX width="500px" height="150px" schema={schema} data={simpledata} />;
};

export const WithAsyncData = withState({ data: null })(({ store }) => {
  fetch('https://randomuser.me/api/?results=10')
    .then((res) => res.json())
    .then((res) => {
      !store.state.data && store.set({ data: res.results });
    });

  return <Table schema={schema} data={store.state.data} />;
});

WithAsyncData.story = {
  name: 'With async Data',
};
