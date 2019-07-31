import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Feedback from './feedback-component';
import { withState } from '@dump247/storybook-state';

const stories = storiesOf('Feedback', module);

stories.addDecorator(withKnobs);
const initialState = {
  isPopoverOpen: true,
};

stories.add(
  'Success',
  withState(initialState)(({ store }) => {
    const onDismiss = () => {
      console.log(true);
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
  'Fail with top distance',
  withState(initialState)(({ store }) => {
    const onDismiss = () => {
      console.log(true);
    };
    return (
      <Feedback
        type="fail"
        position="top-distance"
        message="Alguma coisa aconteceu, por favor tente novamente ou entre em contato conosco"
        isOpen={store.state.isPopoverOpen}
        onDismiss={onDismiss}
      />
    );
  })
);

stories.add(
  'Fail bottom mobile',
  withState(initialState)(({ store }) => {
    const onDismiss = () => {
      console.log(true);
    };
    return (
      <Feedback
        type="fail"
        position="bottom"
        isMobile={true}
        message="Alguma coisa aconteceu, por favor tente novamente ou entre em contato conosco"
        isOpen={store.state.isPopoverOpen}
        onDismiss={onDismiss}
      />
    );
  })
);
