import React from 'react';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import styles from './component-draggable.styl';

function onDragEnd(result) {
  console.log(result.draggableId, ' => ', result.destination.index);
}

export const renderHtml = (
  <DragDropContext
    onDragEnd={result => {
      onDragEnd(result);
    }}
  >
    <div className={styles.container}>
      <h3 className={styles.title}>Minha tabela</h3>
      <Droppable droppableId="1">
        {provided => (
          <div className={styles.component} {...provided.droppableProps} ref={provided.innerRef}>
            <table>
              <tr>
                <th>Fronts</th>
              </tr>
              <tr>
                <td className={styles.columnTable}>
                  <Draggable draggableId="1" index={1}>
                    {(provided, snapshot) => (
                      <span
                        className={styles.dragglableBody}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        Lucas
                      </span>
                    )}
                  </Draggable>
                  {provided.placeholder}
                </td>
              </tr>
              <tr>
                <td className={styles.columnTable}>
                  <Draggable className={styles.component} draggableId="2" index={2}>
                    {provided => (
                      <span
                        className={styles.dragglableBody}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        Ana
                      </span>
                    )}
                  </Draggable>
                  {provided.placeholder}
                </td>
              </tr>
              <tr>
                <td className={styles.columnTable}>
                  <Draggable className={styles.component} draggableId="3" index={3}>
                    {(provided, snapshot) => (
                      <span
                        className={styles.dragglableBody}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        Deba
                      </span>
                    )}
                  </Draggable>
                  {provided.placeholder}
                </td>
              </tr>
            </table>
          </div>
        )}
      </Droppable>
    </div>
  </DragDropContext>
);
