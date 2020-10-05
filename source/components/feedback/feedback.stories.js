import React from 'react';

import Feedback from './feedback-component';
import { withState } from '@dump247/storybook-state';

export default {
  title: 'Feedback',
  component: Feedback,
};

const initialState = {
  show: true,
};

export const Success = withState(initialState)(({ store }) => {
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
});

export const FailWithTopDistance = withState(initialState)(({ store }) => {
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
});

FailWithTopDistance.story = {
  name: 'Fail with top distance',
};

export const FailBottomMobile = withState(initialState)(({ store }) => {
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
});

FailBottomMobile.story = {
  name: 'Fail bottom mobile',
};
