import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import DragAndDrop from './drag-and-drop-component';

import DraggableComponent from './elements/draggable';

const stories = storiesOf('DragAndDrop', module);

const items = [
  { id: 'task-1', content: 'Teste 1' },
  { id: 'task-2', content: 'Teste 2', shouldClose: true },
  { id: 'task-3', content: 'Teste 3' },
  { id: 'task-4', content: 'Teste 4' },
];

stories.add('Item list', () => {
  return (
    <DragAndDrop droppableId="normal" items={items} onChange={(ids, list) => console.log(ids, list)} />
  );
});


stories.add('Manual Items', withState({ items })(({ store }) => {
    const changeValue = (_ids, items) => {
      store.set({ items });
    };

    return (
      <table width="500px">
        <thead>
          <tr>
            <th>ID</th>
            <th>Content</th>
          </tr>
        </thead>
        <DragAndDrop droppableId="controlled" initialItems={store.state.items} wrapAs="tbody" onChange={changeValue}>
          {store.state.items.map((data, index) => (
            <DraggableComponent isTable as="tr" className="teste-tr" id={data.id} index={index}>
              <td>{data.id}</td>
              <td>{data.content}</td>
            </DraggableComponent>
          ))}
        </DragAndDrop>
      </table>
    );
  })
);

