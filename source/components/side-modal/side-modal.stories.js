import React from 'react';
import { withState } from '@dump247/storybook-state';

import Button from '../button';

import SideModal from './side-modal-component';

export default {
  title: 'SideModal',
  component: SideModal,
};

export const Right = withState({ open: false })(({ store }) => {
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
});

export const Left = withState({ open: false })(({ store }) => {
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
});

export const Top = withState({ open: false })(({ store }) => {
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
});

export const Bottom = withState({ open: false })(({ store }) => {
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
});

export const WithTopDistance = withState({ open: false })(({ store }) => {
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
});

WithTopDistance.story = {
  name: 'With top distance',
};

export const WithBottomDistance = withState({ open: false })(({ store }) => {
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
});

WithBottomDistance.story = {
  name: 'With bottom distance',
};

export const WithCustomWidth = withState({ open: false })(({ store }) => {
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
});

WithCustomWidth.story = {
  name: 'With custom width',
};

export const WithCustomHeight = withState({ open: false })(({ store }) => {
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
});

WithCustomHeight.story = {
  name: 'With custom height',
};
