import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';
import { action } from '@storybook/addon-actions';
import { renderHtml } from './elements/component-draggable'
import DragAndDrop from './drag-and-drop-component';

const stories = storiesOf('DragAndDrop', module);

stories.addDecorator(withKnobs);

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Teste 1' },
    'task-2': { id: 'task-2', content: 'Teste 2' },
    'task-3': { id: 'task-3', content: 'Teste 3' },
    'task-4': { id: 'task-4', content: 'Teste 4' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Drag and Drop',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
  },
  columnOrder: ['column-1'],
};

stories.add('Normal', withState({ initialData: initialData })(({ store }) =>  {
  return (
    <DragAndDrop initialData={store.state.initialData} />
  );
}));

stories.add('With shadow', withState({ initialData: initialData })(({ store }) =>  {
  return (
    <DragAndDrop changeColorList changeColorElement initialData={store.state.initialData} />
  );
}));

stories.add('With icon', withState({ initialData: initialData })(({ store }) =>  {
  return (
    <DragAndDrop shouldClose onClickIcon ={action('Click Icon')} initialData={store.state.initialData} />
  );
}));

stories.add('Choose your draggable', withState({ initialData: initialData })(({ store }) =>  {
  return (
    <DragAndDrop component={renderHtml} initialData={store.state.initialData} />
  );
}));
