import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

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
    width: '100px',
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
      title="Diga Oi!"
      actions={<Button>Trocar nomes</Button>}
      schema={schema}
      data={simpledata}
      pager
      meta={meta}
    />
  );
});
