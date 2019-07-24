import React from 'react';
import { storiesOf } from '@storybook/react';
import Steps from './index';
import Button from '../button/index';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

const stories = storiesOf('Steps', module);

const pageData = [
  { name: 'pass1', title: 'Criação de Campanha', isComplete: false },
  { name: 'pass2', title: 'Criação de grupo de anúncio', isComplete: false },
  { name: 'pass3', title: 'Adicionar anúncios', isComplete: false },
  { name: 'finish', title: 'Finalização', isComplete: false },
];

let value = 0;

stories.addDecorator(withKnobs);

stories.add('Normal', () => (
  <div>
    <Steps data={pageData} current={pageData[value].name} />
  </div>
));
