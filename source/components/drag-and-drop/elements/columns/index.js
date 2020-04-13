import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import CSSModules from 'react-css-modules';
import styles from './columns.styl';
import Task from '../task';

class Column extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h3 className={styles.title}>{this.props.column.title}</h3>
        <Droppable droppableId={this.props.column.id}>
          {provided => (
            <div className={styles.div} {...provided.droppableProps} ref={provided.innerRef}>
              {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

export default CSSModules(Column, styles);
