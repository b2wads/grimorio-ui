/* eslint-disable no-invalid-this */
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { DragDropContext } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import styles from './drag-and-drop.styl';
import Column from './elements/columns';

class DragAndDrop extends Component {
  static PropTypes = {
    icon: PropTypes.bool,
    changeColorList: PropTypes.bool,
    changeColorElement: PropTypes.bool,
    initialData: PropTypes.array.isRequired,
  };

  static defaultProps = {
    icon: false,
    changeColorList: false,
    changeColorElement: false,
  };

  constructor(props) {
    super(props);
    const { initialData } = this.props;
    this.state = {
      tasks: initialData.tasks,
      columns: initialData.columns,
      columnOrder: initialData.columnOrder,
    };
  }
  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const column = this.state.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);

    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };

    this.setState(newState);
  };

  render() {
    const { hasIcon, changeColorElement, changeColorList, onClickIcon } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
          return (
            <Column
              key={column.id}
              column={column}
              tasks={tasks}
              hasIcon={hasIcon}
              changeColorList={changeColorList}
              changeColorElement={changeColorElement}
              onClickIcon={onClickIcon}
            />
          );
        })}
      </DragDropContext>
    );
  }
}

export default CSSModules(DragAndDrop, styles);
