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
    <Popover component={<StubButton />} isOpen={store.state.isPopoverOpen}>
      <p>Mollit deserunt elit culpa ex consectetur exercitation sunt est in adipisicing nisi enim voluptate ea.</p>
    </Popover>
  )
}));
