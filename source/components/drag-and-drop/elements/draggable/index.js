import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import cx from 'classnames';
import styles from './draggable.styl';
import Icon from '../../../icon';

class DraggableComponent extends React.PureComponent {
  static propTypes = {
    as: PropTypes.string,
    isTable: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    shouldClose: PropTypes.bool,
    onClose: PropTypes.func,
  };

  render() {
    const { as, isTable, className, id, index, children, shouldClose, onClose } = this.props;

    const Wrapper = as || 'div';

    return (
      <Draggable key={id} draggableId={`${id}`} index={index}>
        {(provided, snapshot) => (
          <Wrapper
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={cx(className, styles.item, {
              [styles.isDragging]: snapshot.isDragging,
              [styles.isTable]: isTable,
            })}
          >
            <Fragment>
              {children}

              {shouldClose &&
                !isTable &&
                <Icon
                  className={cx(styles.close, { [styles.isDragging]: snapshot.isDragging })}
                  name="close"
                  size={14}
                  onClick={onClose}
                />}
            </Fragment>
          </Wrapper>
        )}
      </Draggable>
    );
  }
}

export default DraggableComponent;
