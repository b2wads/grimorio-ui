import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import cx from 'classnames';
import CSSModules from 'react-css-modules';
import styles from './task.styl';
import Icon from '../../../icon';
import Button from '../../../button';

class Task extends React.PureComponent {
  render() {
    const { hasIcon, changeColorElement, onClickIcon, task } = this.props;
    return (
      <Draggable draggableId={task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div className={styles.body}>
            <div
              className={cx(styles.container, { [styles.changeBackground]: snapshot.isDragging && changeColorElement })}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {task.content}
            </div>
            {hasIcon &&
              <div
                {...provided.draggableProps}
                className={cx(styles.icon, { [styles.noneClose]: snapshot.isDragging })}
              >
                <Button color="transparent" className={styles.button} onClick={() => onClickIcon()}>
                  <Icon name="close" size={14} />
                </Button>
              </div>}
          </div>
        )}
      </Draggable>
    );
  }
}

export default CSSModules(Task, styles);
