import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import DragAndDrop from './drag-and-drop-component';

const stories = storiesOf('DragAndDrop', module);

stories.addDecorator(withKnobs);

const items = [
  { id: 'task-1', content: 'Teste 1' },
  { id: 'task-2', content: 'Teste 2', shouldClose: true },
  { id: 'task-3', content: 'Teste 3' },
  { id: 'task-4', content: 'Teste 4' },
];

stories.add('Normal', () => {
  return (
    <DragAndDrop items={items} onChange={(ids, list) => console.log(ids, list)} />
  );
});

stories.add('Com child components', () => {
  return (
    <DragAndDrop onChange={(ids, list) => console.log(ids, list)}>
      <span className="testeeee" contentClassName="contente" id={`teste`}>
        Teste
      </span>

      <div id={`teste2`}>
        Teste 2
      </div>

      <div id={`teste3`} shouldClose={true}>
        Teste 3
      </div>
    </DragAndDrop>
  );
});
