import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import cx from 'classnames';
import styles from './draggable.styl';
import Icon from '../../../icon';

class DraggableComponent extends React.PureComponent {
  render() {
    const { className, id, index, content, children, shouldClose, onClose } = this.props;

    return (
      <Draggable key={id} draggableId={`${id}`} index={index}>
        {(provided, snapshot) => (
          <div
            className={cx(className, styles.item, { [styles.isDragging]: snapshot.isDragging })}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className={styles.itemContent}>
              {children || content}
            </div>

            {shouldClose &&
              <Icon
                className={cx(styles.close, { [styles.isDragging]: snapshot.isDragging })}
                name="close"
                size={14}
                onClick={onClose}
              />}
          </div>
        )}
      </Draggable>
    );
  }
}

export default DraggableComponent;
