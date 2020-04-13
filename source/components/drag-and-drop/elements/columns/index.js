import React from 'react';
import cx from 'classnames';
import { Droppable } from 'react-beautiful-dnd';
import CSSModules from 'react-css-modules';
import styles from './columns.styl';
import Task from '../task';

class Column extends React.PureComponent {
  render() {
    const { hasIcon, changeColorList, changeColorElement, onClickIcon } = this.props;
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{this.props.column.title}</h3>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <div
              className={cx(styles.container, {
                [styles.changeBackground]: snapshot.isDraggingOver && changeColorList,
              })}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {this.props.tasks.map((task, index) => (
                <Task
                  hasIcon={hasIcon}
                  key={task.id}
                  task={task}
                  index={index}
                  changeColorElement={changeColorElement}
                  onClickIcon={onClickIcon}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

export default CSSModules(Column, styles);
