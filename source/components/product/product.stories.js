import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Product from './product-component';
import Panel from '../panel';

const stories = storiesOf('Product', module);

stories.addDecorator(withKnobs);

const pannelSize = {width: '20%', display: 'inline-block', verticalAlign: 'top'};

const exampleProduct = {
  imagem: 'https://images-americanas.b2w.io/produtos/01/00/sku/33446/6/33446652_4GG.jpg',
  nome: 'Notebook Profissional Avell W155 MX Intel Core i7 16GB (GeForce MX150) 1TB 15.6 FullHD',
  preco_com_desconto: 6333.20,
  marca: 2,
  preco_boleto: 5333.20,
  tipo: 'produto',
  codigo_cupom: null,
  regras_cupom: null,
  fundo_destaque: 1,
  fim: '2018-07-08 23:59',
  link: 'https://www.americanas.com.br/produto/33446653/notebook-profissional-avell-w155-mx-intel-core-i7-16gb-geforce-mx150-1tb-15-6-fullhd',
}

const exampleCupom = {
  imagem: 'https://images-americanas.b2w.io/produtos/01/00/sku/33446/6/33446652_4GG.jpg',
  nome: '10% com o cupom ALO10',
  preco_com_desconto: 6333.20,
  marca: 2,
  preco_boleto: 5333.20,
  tipo: 'cupom',
  codigo_cupom: 'ALO10',
  regras_cupom: 'Confira as regras no site https://www.americanas.com.br/hotsite/regras-do-site',
  fundo_destaque: 0,
  fim: '2018-07-08 23:59',
  link: 'https://www.americanas.com.br/produto/33446653/notebook-profissional-avell-w155-mx-intel-core-i7-16gb-geforce-mx150-1tb-15-6-fullhd',
}

stories.addWithInfo('Normal', () => (
  <div>
    <Panel style={pannelSize}>
      <Product {...exampleCupom} />
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel style={pannelSize}>
      <Product nameLength={58} {...exampleProduct} />
    </Panel>
  </div>
));

stories.addWithInfo('Brand', () => (
  <div>
    <Panel type="brand" brand="acom" style={pannelSize}>
      <Product nameLength={60} type="card" {...exampleProduct} />
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel type="brand" brand="suba" style={pannelSize}>
      <Product type="card" {...exampleCupom} />
    </Panel>
  </div>
));
