import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Feedback from './feedback-component';
import { withState } from '@dump247/storybook-state';

import { action, configureActions } from '@storybook/addon-actions';

const stories = storiesOf('Feedback', module);

stories.addDecorator(withKnobs);
const initialState = {
  isPopoverOpen: true,
};

stories.add(
  'Success',
  withState(initialState)(({ store }) => {
    const onDismiss = () => {
      const { isPopoverOpen } = store.state;
      store.set({ isPopoverOpen: !isPopoverOpen });
      action('Popover dismissed.')();
    };

    return (
      <Feedback
        type="success"
        message="Sua campanha foi criada com sucesso!"
        isOpen={store.state.isPopoverOpen}
        onDismiss={onDismiss}
      />
    );
  })
);

stories.add(
  'Fail',
  withState(initialState)(({ store }) => {
    const onDismiss = () => {
      // const { isPopoverOpen } = store.state;
      // store.set({ isPopoverOpen: !isPopoverOpen });
      // action('Popover dismissed.')();
      console.log(true);
    };
    return (
      <Feedback
        type="fail"
        message="Alguma coisa aconteceu, por favor tente novamente ou entre em contato conosco"
        isOpen={store.state.isPopoverOpen}
        onDismiss={onDismiss}
      />
    );
  })
);
