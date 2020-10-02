import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';

import Popover from './popover-component';
import Button from '../button'

const stories = storiesOf('Popover', module);

const initialState = {
  isPopoverOpen: false,
};

const action = name => (...params) => {
  console.log(name, params);
};

stories.add('Normal', withState(initialState)(({ store }) => {
  const StubButton = () => {
    const { isPopoverOpen } = store.state;
    return (
      <Button onClick={() => store.set({ isPopoverOpen: !isPopoverOpen })}>Popover for this button</Button>
    );
  };

  return (
    <Popover actionComponent={<StubButton />} isOpen={store.state.isPopoverOpen}>
      <div style={{ width: '300px' }}>
        Mollit deserunt elit culpa ex consectetur exercitation sunt est in adipisicing nisi enim voluptate ea.
      </div>
    </Popover>
  )
}));

stories.add('On Dismiss', withState(initialState)(({ store }) => {
  const StubButton = () => {
    const { isPopoverOpen } = store.state;
    return (
      <Button onClick={() => store.set({ isPopoverOpen: !isPopoverOpen })}>Popover for this button</Button>
    );
  };

  const onDismiss = () => {
    store.set({ isPopoverOpen: false });
    action('Popover dismissed.')();
  }

  return (
    <React.Fragment>
      <h3>Click outsite to dismiss the Popover</h3>
      <br />
      <Popover actionComponent={<StubButton />} isOpen={store.state.isPopoverOpen} onDismiss={onDismiss}>
        <div style={{ width: '300px' }}>
          Mollit deserunt elit culpa ex consectetur exercitation sunt est in adipisicing nisi enim voluptate ea.
        </div>
      </Popover>
    </React.Fragment>
  )
}));

const anotherInitialState = {
  "first": false,
  "second": false,
  "third": false,
  "fourth": false,
}

stories.add('Open in different positions', withState(anotherInitialState)(({ store }) => {
  const StubButton = ({ popoverName, title }) => {
    const { isPopoverOpen } = store.state;
    return (
      <Button onClick={() => store.set({ [popoverName]: !store.state[popoverName] })}>{title}</Button>
    );
  };

  return (
    <React.Fragment>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Popover actionComponent={<StubButton popoverName="first" title="Popover bottomRight" />} isOpen={store.state["first"]}>
          <div style={{ width: '300px' }}>
            Mollit deserunt elit culpa ex consectetur exercitation sunt est in adipisicing nisi enim voluptate ea.
          </div>
        </Popover>

        <Popover actionComponent={<StubButton popoverName="second" title="Popover bottomLeft" />} isOpen={store.state["second"]} position="bottomLeft">
          <div style={{ width: '300px' }}>
            Mollit deserunt elit culpa ex consectetur exercitation sunt est in adipisicing nisi enim voluptate ea.
          </div>
        </Popover>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
        <Popover actionComponent={<StubButton popoverName="third" title="Popover topRight" />} isOpen={store.state["third"]} position="topRight">
          <div style={{ width: '300px' }}>
            Mollit deserunt elit culpa ex consectetur exercitation sunt est in adipisicing nisi enim voluptate ea.
          </div>
        </Popover>

        <Popover actionComponent={<StubButton popoverName="fourth" title="Popover topLeft" />} isOpen={store.state["fourth"]} position="topLeft">
          <div style={{ width: '300px' }}>
            Mollit deserunt elit culpa ex consectetur exercitation sunt est in adipisicing nisi enim voluptate ea.
          </div>
        </Popover>
      </div>
    </React.Fragment>
  )
}));
