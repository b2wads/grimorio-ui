import React from 'react';
import Steps from './index';
import Button from '../button/index';
import { withState } from '../../helpers/storybook';

export default {
  title: 'Steps',
  component: Steps,
};

const pageData = [
  { name: 'pass1', title: 'Criação de Campanha', isComplete: false },
  { name: 'pass2', title: 'Criação de grupo de anúncio', isComplete: false },
  { name: 'pass3', title: 'Adicionar anúncios', isComplete: false },
  { name: 'finish', title: 'Finalização', isComplete: false },
];

let value = 0;

export const Normal = () => (
  <div>
    <Steps data={pageData} current={pageData[value].name} />
  </div>
);

export const WithButtons = withState({ value: 0 }, store => {
  const handleClickNext = () => {
    if (store.state.value >= pageData.length - 1) {
      value = pageData.length - 1;
      pageData[value].isComplete = false;
      store.set({ value: value });
    } else {
      pageData[value].isComplete = true;
      value += 1;
      store.set({ value: value });
    }
  };

  const handleClickPrevious = () => {
    if (store.state.value <= 0) {
      value = 0;
      pageData[value].isComplete = false;
      store.set({ value: value });
    } else {
      value -= 1;
      pageData[value].isComplete = false;
      store.set({ value: value });
    }
  };

  return (
    <div>
      <Steps data={pageData} current={pageData[store.state.value].name} />
      <div style={{ marginTop: '15px' }}>
        <Button
          style={{ marginRight: '5px' }}
          modifier="outline"
          color="variant"
          onClick={handleClickPrevious}
        >
          Voltar
        </Button>
        <Button onClick={handleClickNext}>Próximo</Button>
      </div>
    </div>
  );
});
