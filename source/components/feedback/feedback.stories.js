import React from 'react';
import { storiesOf } from '@storybook/react';

import Feedback from './feedback-component';
import { withState } from '@dump247/storybook-state';

const stories = storiesOf('Feedback', module);

const initialState = {
  show: true,
};

stories.add(
  'Success',
  withState(initialState)(({ store }) => {
    const onDismiss = () => {
      store.set({ show: false });
    };

    return (
      <Feedback
        type="success"
        message="Sua campanha foi criada com sucesso!"
        isOpen={store.state.show}
        onDismiss={onDismiss}
      />
    );
  })
);

stories.add(
  'Fail with top distance',
  withState(initialState)(({ store }) => {
    const onDismiss = () => {
      store.set({ show: false });
    };
    return (
      <Feedback
        type="fail"
        message="Alguma coisa aconteceu, por favor tente novamente ou entre em contato conosco"
        isOpen={store.state.show}
        onDismiss={onDismiss}
      />
    );
  })
);

stories.add(
  'Fail bottom mobile',
  withState(initialState)(({ store }) => {
    const onDismiss = () => {
      store.set({ show: false });
    };

    return (
      <Feedback
        type="fail"
        isMobile={true}
        message="Alguma coisa aconteceu, por favor tente novamente ou entre em contato conosco"
        isOpen={store.state.isPopoverOpen}
        onDismiss={onDismiss}
        timeToClose={3000}
      />
    );
  })
);
