import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import Product from './product-component';
import Panel from '../panel';

const stories = storiesOf('Product', module);

stories.addDecorator(withKnobs);

const pannelSize = { flexBasis: '30%', minWidth: '250px', };

const exampleProduct = {
  img: 'https://images-americanas.b2w.io/produtos/01/00/sku/33446/6/33446652_4GG.jpg',
  name: 'Notebook Profissional Avell W155 MX Intel Core i7 16GB (GeForce MX150) 1TB 15.6 FullHD',
  info: {
    value: 5333.20,
  },
  expires: '2018-10-31T23:59:00.000Z',
  copyValue: 'http://www.americanas.com.br/categoria/celulares-e-smartphones/f/tag-tag_alo10_acom?opn=AFLACOM&epar=b2wafiliados&franq=AFL-03-101718',
  link: 'https://www.americanas.com.br/produto/33446653/notebook-profissional-avell-w155-mx-intel-core-i7-16gb-geforce-mx150-1tb-15-6-fullhd',
  tags: [
    {
      type: 'brand',
      value: 'acom',
    },
    {
      type: 'highlight',
      value: true,
    }
  ],
};

const exampleCupom = {
  name: '10% com o cupom ALO10',
  info: {
    value: 'ALO10', //16
    rules: 'Confira as regras no site https://www.americanas.com.br/hotsite/regras-do-site',
  },
  expires: '2018-10-31T23:59:00.000Z',
  copy: 'ALO10',
  link: 'http://www.americanas.com.br/categoria/celulares-e-smartphones/f/tag-tag_alo10_acom?opn=AFLACOM&epar=b2wafiliados&franq=AFL-03-101718',
  copyValue: 'http://www.americanas.com.br/categoria/celulares-e-smartphones/f/tag-tag_alo10_acom?opn=AFLACOM&epar=b2wafiliados&franq=AFL-03-101718',
  tags: [
    {
      type: 'brand',
      value: 'shop',
    },
    {
      type: 'highlight',
      value: true,
    }
  ],
};

const exampleCat = {
  name: '10% com em telefonia',
  info: {},
  expires: '2018-10-31T23:59:00.000Z',
  link: 'http://www.americanas.com.br/categoria/celulares-e-smartphones/f/tag-tag_alo10_acom?opn=AFLACOM&epar=b2wafiliados&franq=AFL-03-101718',
  copyValue: 'http://www.americanas.com.br/categoria/celulares-e-smartphones/f/tag-tag_alo10_acom?opn=AFLACOM&epar=b2wafiliados&franq=AFL-03-101718',
  tags: [
    {
      type: 'brand',
      value: 'shop',
    },
    {
      type: 'highlight',
      value: true,
    }
  ],
};

const exampleCupomCard = {...exampleCupom, tags: []};
const exampleProductCard = {...exampleProduct, tags: [{type: 'highlight', value: true}]};
const exampleCategoryCard = {...exampleCat, tags: [{type: 'highlight', value: true}]};

stories.addWithInfo('Default', () => (
  <div style={{ display: 'flex' }}>
    <Panel style={pannelSize}>
      <Product data={object('Product', exampleProduct)} />
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel style={pannelSize}>
      <Product onCopy={link => `TESTE=${link}`} btnText="Pegar Cupom" data={object('Cupom', exampleCupom)} />
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel style={pannelSize}>
      <Product onCopy={link => `TESTE=${link}`} btnText="Pegar Cupom" data={object('Categoria', exampleCat)} />
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel style={pannelSize}>
      <Product />
    </Panel>
  </div>
));

stories.addWithInfo('Card', () => (
  <div style={{ display: 'flex' }}>
    <Panel type="brand" brand="acom" style={pannelSize}>
      <Product type="card" data={object('Product', exampleProductCard)} />
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel type="brand" brand="suba" style={pannelSize}>
      <Product type="card" btnText="Copiar Cupom" data={object('Cupom', exampleCupomCard)} />
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel type="brand" brand="shop" style={pannelSize}>
      <Product type="card" btnText="Copiar Cupom" data={object('Cupom', exampleCupomCard)} />
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel type="brand" brand="soub" style={pannelSize}>
      <Product type="card" btnText="Copiar Cupom" data={object('Categoria', exampleCategoryCard)} />
    </Panel>
  </div>
));

stories.addWithInfo('Functional', withState({ loading: false, data: null, stage: 'generate' })(({ store }) => {
  const generateLink = link => {
    store.set({ loading: true });

    fetch('https://randomuser.me/api/?results=1')
      .then(res => res.json())
      .then(res => {
        store.set({ loading: false, data: res.results[0].name.first, stage: 'copy' });
      });
  }

  return (
    <div style={{ display: 'flex' }}>
      <Panel style={pannelSize}>
        <Product
          data={object('Product', exampleProduct)}
          copyLoading={store.state.loading}
          onGenerate={data => generateLink(data)}
          linkValue={store.state.data}
          stage={store.state.stage}
        />
      </Panel>

      <Panel style={pannelSize}>
        <Product
          data={object('Product', exampleProduct)}
          copyLoading={false}
          onGenerate={data => console.log(data)}
        />
      </Panel>
    </div>
  )
}));
