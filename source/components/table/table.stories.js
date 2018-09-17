import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Table from './table-component';

const stories = storiesOf('Table', module);

stories.addDecorator(withKnobs);

const simpledata = [
  {
    name: 'Fulano',
    surname: 'da silva',
    profession: 'Cameraman do Cabo Daciolo',
  },
  {
    name: 'Lucrécia',
    surname: 'da Silva e Souza',
    profession: '',
  }
];

const schema = {
  name: {
    title: 'Nome',
    headClassName: null,
    className: null,
    render: data => data,
  },
  surname: {
    title: 'Sobrenome',
    className: null,
    render: data => data,
  },
  profession: {
    title: 'Profissão',
    className: null,
    render: data => data,
  },
};

stories.addWithInfo('Normal', () => {
  return <Table schema={schema} data={simpledata} />
});
