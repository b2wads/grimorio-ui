import React from 'react';
import { storiesOf, ReactiveVar } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import Popover from './popover-component';
import Button from '../button'

const stories = storiesOf('Popover', module);

stories.addDecorator(withKnobs);

const initialState = {
  isPopoverOpen: false,
};

stories.addWithInfo('Normal', withState(initialState)(({ store }) => {
  const StubButton = () => {
    const { isPopoverOpen } = store.state;
    return (
      <Button onClick={() => store.set({ isPopoverOpen: !isPopoverOpen })}>Popover for this button</Button>
    );
  };

  return (
    <Popover component={<StubButton />} isOpen={store.state.isPopoverOpen} position="topRight">
      <div style={{ width: '300px' }}>
        Mollit deserunt elit culpa ex consectetur exercitation sunt est in adipisicing nisi enim voluptate ea.
      </div>
    </Popover>
  )
}));

const anotherInitialState = {
  "first": false,
  "second": false,
  "third": false,
  "fourth": false,
}

stories.addWithInfo('Open in different positions', withState(anotherInitialState)(({ store }) => {
  const StubButton = ({ popoverName, title }) => {
    const { isPopoverOpen } = store.state;
    return (
      <Button onClick={() => store.set({ [popoverName]: !store.state[popoverName] })}>{title}</Button>
    );
  };

  return (
    <React.Fragment>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Popover component={<StubButton popoverName="first" title="Popover bottomRight" />} isOpen={store.state["first"]}>
          <div style={{ width: '300px' }}>
            Mollit deserunt elit culpa ex consectetur exercitation sunt est in adipisicing nisi enim voluptate ea.
          </div>
        </Popover>

        <Popover component={<StubButton popoverName="second" title="Popover bottomLeft" />} isOpen={store.state["second"]} position="bottomLeft">
          <div style={{ width: '300px' }}>
            Mollit deserunt elit culpa ex consectetur exercitation sunt est in adipisicing nisi enim voluptate ea.
          </div>
        </Popover>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
        <Popover component={<StubButton popoverName="third" title="Popover topRight" />} isOpen={store.state["third"]} position="topRight">
          <div style={{ width: '300px' }}>
            Mollit deserunt elit culpa ex consectetur exercitation sunt est in adipisicing nisi enim voluptate ea.
          </div>
        </Popover>

        <Popover component={<StubButton popoverName="fourth" title="Popover topLeft" />} isOpen={store.state["fourth"]} position="topLeft">
          <div style={{ width: '300px' }}>
            Mollit deserunt elit culpa ex consectetur exercitation sunt est in adipisicing nisi enim voluptate ea.
          </div>
        </Popover>
      </div>
    </React.Fragment>
  )
}));
