import React from 'react';
import { storiesOf } from '@storybook/react';
import Steps from './index';
import Button from '../button/index';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

const stories = storiesOf('Steps', module);

const pageData = [
  { name: 'pass1', title: 'Criação de Campanha' },
  { name: 'pass2', title: 'Criação de grupo de anúncio' },
  { name: 'pass3', title: 'Adicionar anúncios' },
  { name: 'finish', title: 'Finalização' },
];

let value = 0;

stories.addDecorator(withKnobs);

stories.add('Normal', () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline' }}>
    <Steps data={pageData} current={pageData[value].name} value={value} showButton>
      <p>Olá mundo</p>
    </Steps>
  </div>
));
