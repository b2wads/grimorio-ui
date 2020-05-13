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
    wrapAs: PropTypes.string,
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

  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.setState({ items: this.props.items });
    }
  }

  getItems = props => (!props.children ? props.items : props.initialItems);

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

  renderStateItems = () =>
    this.state.items.map((itemData, idx) => (
      <DraggableComponent {...itemData} key={itemData.id} index={idx} onClose={this.removeItem(idx)}>
        {itemData.content}
      </DraggableComponent>
    ));

  render() {
    const { wrapAs, droppableId } = this.props;
    const Wrap = wrapAs || 'div';

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId={droppableId}>
          {(provided, _snapshot) => (
            <Wrap {...provided.droppableProps} ref={provided.innerRef}>
              {!this.props.children ? this.renderStateItems() : this.props.children}
              {provided.placeholder}
            </Wrap>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default DragAndDrop;
