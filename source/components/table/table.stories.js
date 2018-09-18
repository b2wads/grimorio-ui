import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import Table from './table-component';
import Panel from '../panel';
import Button from '../button';

const stories = storiesOf('Table', module);

stories.addDecorator(withKnobs);

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
    title: 'Diga Oi',
    className: null,
    headClassName: null,
    renderHead: () => <Button onClick={() => alert('Olá!')}>Diga oi para todos!</Button>,
    render: info => <Button onClick={() => alert(`Tenho ${info.dob.age} anos!`)}>Adivinhe minha idade ;)</Button>,
  },
};

stories.addWithInfo('Normal', () => {
  return (
    <Table schema={schema} data={simpledata} />
  );
});

stories.addWithInfo('Fixed', () => {
  return (
    <Table type="fixed" schema={schema} data={simpledata} />
  );
});

stories.addWithInfo('Scroll', () => {
  return (
    <Table scrollY scrollX width="500px" height="150px" schema={schema} data={simpledata} />
  );
});


stories.addWithInfo('With Data and Panel', withState({ data: undefined })(({ store }) => {
  fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(res => {
      !store.state.data && store.set({ data: res.results });
    });

  return (
    <Panel>
      <Table schema={schema} data={store.state.data} />
    </Panel>
  );
}));
