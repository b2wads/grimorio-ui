import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import TableFixed from './table-fixed-component';

const stories = storiesOf('TableFixed', module);

stories.addDecorator(withKnobs);

const schemaLeft = {
  gender: {
    title: 'Gênero',
    headClassName: null,
    width: '100px',
  },
  phone: {
    title: 'Phone',
    className: null,
    width: '300px',
  },
};

const schemaRight = {
  name: {
    title: 'Nome',
    headClassName: null,
    width: '200px',
    className: null,
    render: info => info.name.first,
  },
  surname: {
    title: 'Sobrenome',
    headClassName: null,
    className: null,
    width: '300px',
    render: info => info.name.last,
  },
  gender: {
    title: 'Gênero',
    className: null,
    width: '500px',
  },
  email: {
    title: 'E-mail',
    className: null,
    width: '300px',
  },
  cell: {
    title: 'Celular',
    className: null,
    headClassName: null,
    width: '100px',
  },
};

const footerModelLeft = {
  total: {
    className: 'table-footer-total',
    value: 'Total',
  },
  phone: {
    className: 'table-footer-total',
    value: '',
  },
};

const footerModelRight = {
  name: {
    width: '200px',
    className: null,
    render: 'info',
  },
  surname: {
    className: null,
    width: '300px',
    render: 'info',
  },
  gender: {
    className: null,
    width: '500px',
    value: '1111',
  },
  email: {
    className: null,
    width: '300px',
    value: '',
  },
  cell: {
    className: null,
    width: '100px',
    value: 'testando!',
  },
};

stories.add(
  'Sticky',
  withState({ data: null })(({ store }) => {
    fetch('https://randomuser.me/api/?results=10').then(res => res.json()).then(res => {
      !store.state.data && store.set({ data: res.results });
    });

    return (
      <TableFixed
        scrollY
        isSticky
        width="700px"
        height="300px"
        rowHeight="60px"
        schemaRight={schemaRight}
        schemaLeft={schemaLeft}
        data={store.state.data}
        dataFooterLeft={footerModelLeft}
        dataFooterRight={footerModelRight}
      />
    );
  })
);
