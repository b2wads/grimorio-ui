import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import Button from '../button';

import Modal from './modal-component';

const stories = storiesOf('Modal', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Custom', withState({ open: false })(({ store }) => {
  const openModal = () => {
    store.set({ open: true });
  };

  const closeModal = () => {
    store.set({ open: false });
  };

  return <div>
    <Button onClick={openModal}>Abrir Modal</Button>
    <Modal open={store.state.open} onClose={closeModal}>
      <div>
        <p>Olar</p>
        <Button onClick={closeModal}>Fechar</Button>
      </div>
    </Modal>
  </div>
}));

stories.addWithInfo('Types', withState({ success: false, fail: false, confirm: false })(({ store }) => {
  const openModal = type => {
    return () => store.set({ [type]: true });
  };

  const closeModal = type => {
    return () => store.set({ [type]: false });
  };

  return <div>
    <div>
      <Button onClick={openModal('success')}>Sucesso</Button>
      <Modal
        type="success"
        message="Você abriu o modal com sucesso!"
        open={store.state.success}
        showButton
        onClose={closeModal('success')}
      />
    </div>
    <br/>
    <div>
      <Button onClick={openModal('fail')}>Fail</Button>
      <Modal
        type="fail"
        message="Ops, algo deu errado :("
        open={store.state.fail}
        onClose={closeModal('fail')}
      />
    </div>
    <br/>
    <div>
      <Button onClick={openModal('confirm')}>Confirm</Button>
      <Modal
        type="confirm"
        message="Você tem certeza que quer saber A VERDADE?"
        confirmButtonText="Tenho certeza"
        open={store.state.confirm}
        onClose={closeModal('confirm')}
        confirmInverted
        onConfirm={() => { alert('Prepare-se!'); window.location.href = 'http://avrilestamorta.blogspot.com/'; }}
      />
    </div>
  </div>
}));
