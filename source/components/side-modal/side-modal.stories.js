import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import Button from '../button';

import SideModal from './side-modal-component';

const stories = storiesOf('SideModal', module);

stories.addDecorator(withKnobs);

stories.add(
  'Right',
  withState({ open: false })(({ store }) => {
    const openModal = () => {
      store.set({ open: true });
    };

    const closeModal = () => {
      store.set({ open: false });
    };

    return (
      <div>
        <Button onClick={openModal}>Abrir Modal</Button>
        <SideModal open={store.state.open} onClose={closeModal}>
          <div>
            <p>Olar</p>
            <Button onClick={closeModal}>Fechar</Button>
          </div>
        </SideModal>
      </div>
    );
  })
);

stories.add(
  'Left',
  withState({ open: false })(({ store }) => {
    const openModal = () => {
      store.set({ open: true });
    };

    const closeModal = () => {
      store.set({ open: false });
    };

    return (
      <div>
        <Button onClick={openModal}>Abrir Modal</Button>
        <SideModal position="left" open={store.state.open} onClose={closeModal}>
          <div>
            <p>Olar</p>
            <Button onClick={closeModal}>Fechar</Button>
          </div>
        </SideModal>
      </div>
    );
  })
);

stories.add(
  'Top',
  withState({ open: false })(({ store }) => {
    const openModal = () => {
      store.set({ open: true });
    };

    const closeModal = () => {
      store.set({ open: false });
    };

    return (
      <div>
        <Button onClick={openModal}>Abrir Modal</Button>
        <SideModal position="top" open={store.state.open} onClose={closeModal}>
          <div>
            <p>Olar</p>
            <Button onClick={closeModal}>Fechar</Button>
          </div>
        </SideModal>
      </div>
    );
  })
);

stories.add(
  'Bottom',
  withState({ open: false })(({ store }) => {
    const openModal = () => {
      store.set({ open: true });
    };

    const closeModal = () => {
      store.set({ open: false });
    };

    return (
      <div>
        <Button onClick={openModal}>Abrir Modal</Button>
        <SideModal position="bottom" open={store.state.open} onClose={closeModal}>
          <div>
            <p>Olar</p>
            <Button onClick={closeModal}>Fechar</Button>
          </div>
        </SideModal>
      </div>
    );
  })
);

stories.add(
  'With top distance',
  withState({ open: false })(({ store }) => {
    const openModal = () => {
      store.set({ open: true });
    };

    const closeModal = () => {
      store.set({ open: false });
    };

    return (
      <div>
        <Button onClick={openModal}>Abrir Modal</Button>
        <SideModal top={75} open={store.state.open} onClose={closeModal}>
          <div>
            <p>Olar</p>
            <Button onClick={closeModal}>Fechar</Button>
          </div>
        </SideModal>
      </div>
    );
  })
);

stories.add(
  'With bottom distance',
  withState({ open: false })(({ store }) => {
    const openModal = () => {
      store.set({ open: true });
    };

    const closeModal = () => {
      store.set({ open: false });
    };

    return (
      <div>
        <Button onClick={openModal}>Abrir Modal</Button>
        <SideModal bottom={75} open={store.state.open} onClose={closeModal}>
          <div>
            <p>Olar</p>
            <Button onClick={closeModal}>Fechar</Button>
          </div>
        </SideModal>
      </div>
    );
  })
);

stories.add(
  'With custom width',
  withState({ open: false })(({ store }) => {
    const openModal = () => {
      store.set({ open: true });
    };

    const closeModal = () => {
      store.set({ open: false });
    };

    return (
      <div>
        <Button onClick={openModal}>Abrir Modal</Button>
        <SideModal width="50%" open={store.state.open} onClose={closeModal}>
          <div>
            <p>Olar</p>
            <Button onClick={closeModal}>Fechar</Button>
          </div>
        </SideModal>
      </div>
    );
  })
);

stories.add(
  'With custom height',
  withState({ open: false })(({ store }) => {
    const openModal = () => {
      store.set({ open: true });
    };

    const closeModal = () => {
      store.set({ open: false });
    };

    return (
      <div>
        <Button onClick={openModal}>Abrir Modal</Button>
        <SideModal height="50%" position="bottom" open={store.state.open} onClose={closeModal}>
          <div>
            <p>Olar</p>
            <Button onClick={closeModal}>Fechar</Button>
          </div>
        </SideModal>
      </div>
    );
  })
);
