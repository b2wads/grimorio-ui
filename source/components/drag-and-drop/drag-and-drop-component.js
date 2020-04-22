/* eslint-disable no-invalid-this */
import React, { Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

import DraggableComponent from './elements/draggable';

class DragAndDrop extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    onItemClose: PropTypes.func,
    droppableId: PropTypes.string,
  };

  static defaultProps = {
    droppableId: 'droppable-default',
  };

  constructor(props) {
    super(props);
    this.state = {
      items: this.getItems(props),
    };
  }

  getItems = props => {
    const childItems = [];

    if (props.children) {
      React.Children.forEach(props.children, child => {
        childItems.push({
          id: `${child.props.id}`,
          shouldClose: child.props.shouldClose,
          className: child.props.className,
          content: child.props.content || child,
        });
      });
    }

    return props.items || childItems;
  };

  onDragEnd = result => {
    const { items } = this.state;
    const newItems = [...items];
    const { destination, source } = result;

    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
      return;
    }

    newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, items[source.index]);

    this.props.onChange(newItems.map(it => it.id), newItems);
    this.setState({ items: newItems });
  };

  removeItem = index => {
    const { items } = this.state;
    const newItems = [...items];
    newItems.splice(index, 1);

    return () => {
      this.props.onChange(newItems.map(it => it.id), newItems);
      this.setState({ items: newItems });
    };
  };

  render() {
    const { droppableId } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId={droppableId}>
          {(provided, _snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {this.state.items.map((itemData, idx) => (
                <DraggableComponent {...itemData} key={itemData.id} index={idx} onClose={this.removeItem(idx)}>
                  {itemData.content}
                </DraggableComponent>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default DragAndDrop;
