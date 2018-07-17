import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Panel from './panel-component';
import Button from '../button';
import Product from '../product';

const pannelSize = { flexBasis: '20%', minWidth: '250px', };

const exampleProduct = {
  img: 'https://images-americanas.b2w.io/produtos/01/00/sku/33446/6/33446652_4GG.jpg',
  name: 'Notebook Profissional Avell W155 MX Intel Core i7 16GB (GeForce MX150) 1TB 15.6 FullHD',
  info: {
    value: 5333.20,
  },
  expires: '2018-07-08 23:59',
  link: 'https://www.americanas.com.br/produto/33446653/notebook-profissional-avell-w155-mx-intel-core-i7-16gb-geforce-mx150-1tb-15-6-fullhd',
  tags: [
    {
      type: 'highlight',
      value: true,
    }
  ],
};

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
  <div style={{ display: 'flex' }}>
    <Panel brand="suba" style={pannelSize}>
      <Product type="card" data={exampleProduct}></Product>
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel brand="acom" style={pannelSize}>
      <Product type="card" data={exampleProduct}></Product>
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel brand="shop" style={pannelSize}>
      <Product type="card" data={exampleProduct}></Product>
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel brand="soub" style={pannelSize}>
      <Product type="card" data={exampleProduct}></Product>
    </Panel>
  </div>
));
