import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import cx from 'classnames';
import CSSModules from 'react-css-modules';
import styles from './task.styl';

class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div
            className={cx(styles.container, { [styles.changeBackground]: snapshot.isDragging })}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {this.props.task.content}
          </div>
        )}
      </Draggable>
    );
  }
}

export default CSSModules(Task, styles);
