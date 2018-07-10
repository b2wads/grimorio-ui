import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Produto from './produto-component';
import Panel from '../panel';
import { dict } from 'tcomb';

const stories = storiesOf('Produto', module);

stories.addDecorator(withKnobs);

const pannelSize = {width: '25%', display: 'inline-block', verticalAlign: 'top'};
const pannelSizeSmall = {width: '20%', display: 'inline-block', verticalAlign: 'top'};

const exampleProduct = {
  imagem: 'https://images-americanas.b2w.io/produtos/01/00/sku/33446/6/33446652_4GG.jpg',
  nome: 'Notebook Profissional Avell W155 MX Intel Core i7 16GB (GeForce MX150) 1TB 15.6 FullHD',
  preco_com_desconto: 5333.20,
  marca: 2,
  // preco_boleto,
  // comissao_especial,
  inicio: '2018-07-06 00:00',
  fim: '2018-07-08 23:59',
  link: 'https://www.americanas.com.br/produto/33446653/notebook-profissional-avell-w155-mx-intel-core-i7-16gb-geforce-mx150-1tb-15-6-fullhd',
}

stories.addWithInfo('Normal', () => (
  <div>
    <Panel style={pannelSize}>
      <Produto {...exampleProduct} />
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel type="brand" style={pannelSizeSmall}>
      <Produto type="card" nameLength={55} {...exampleProduct} />
    </Panel>
  </div>
));
