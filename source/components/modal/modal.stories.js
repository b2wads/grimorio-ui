import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import Button from '../button';

import Modal from './modal-component';

const stories = storiesOf('Modal', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', withState({ open: false })(({ store }) => {
  const openModal = () => {
    store.set({ open: true });
  };

  const closeModal = () => {
    store.set({ open: false });
  };

  return <div>
    <Button onClick={openModal}>Abrir Modal</Button>
    <Modal open={store.state.open} closeModal={closeModal}>
      <div>
        <p>Olar</p>
        <Button onClick={closeModal}>Fechar</Button>
      </div>
    </Modal>
  </div>
}));
