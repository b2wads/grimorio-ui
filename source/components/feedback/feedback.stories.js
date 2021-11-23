import React from 'react';

import Feedback from './feedback-component';
import { withState } from '../../helpers/storybook';

export default {
  title: 'Feedback',
  component: Feedback,
};

const initialState = {
  show: true,
};

export const Fail = withState(initialState, store => {
  const onDismiss = () => {
    store.set({ show: false });
  };

  return (
    <Feedback
      type="fail"
      message="Ocorreu um erro inesperado, entre em contato por favor!"
      isOpen={store.state.show}
      onDismiss={onDismiss}
      timeToClose={10000}
    />
  );
});

export const Success = withState(initialState, store => {
  const onDismiss = () => {
    store.set({ show: false });
  };

  return (
    <Feedback
      type="success"
      message="Sua campanha foi criada com sucesso!"
      isOpen={store.state.show}
      onDismiss={onDismiss}
      timeToClose={7000}
    />
  );
});

export const FailBottomMobile = withState(initialState, store => {
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
    />
  );
});
