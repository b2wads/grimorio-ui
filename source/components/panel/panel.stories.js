import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Panel from './panel-component';
import Button from '../button';
import Product from '../product';

const exampleProduct = {
  imagem: 'https://images-americanas.b2w.io/produtos/01/00/sku/33446/6/33446652_4GG.jpg',
  nome: 'Notebook Profissional Avell W155 MX Intel Core i7 16GB (GeForce MX150) 1TB 15.6 FullHD',
  preco_com_desconto: 5333.20,
  marca: 2,
  inicio: '2018-07-06 00:00',
  fim: '2018-07-08 23:59',
  link: 'https://www.americanas.com.br/produto/33446653/notebook-profissional-avell-w155-mx-intel-core-i7-16gb-geforce-mx150-1tb-15-6-fullhd',
}

const stories = storiesOf('Panel', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Default', () => (
  <div style={{ width: '25%' }}>
    <Panel>
      Simple Panel
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel title="Title">
      <p>Content</p>
      <Button>Send</Button>
    </Panel>
  </div>
));

stories.addWithInfo('Brand', () => (
  <div style={{ width: '60%', display: 'flex' }}>
    <Panel type="brand" brand="suba">
      <Product type="card" {...exampleProduct}></Product>
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel type="brand" brand="acom">
      <Product type="card" {...exampleProduct}></Product>
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel type="brand" brand="shop">
      <Product type="card" {...exampleProduct}></Product>
    </Panel>
  </div>
));
