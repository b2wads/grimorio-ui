import '../../../internals/test/helper';

import Product from './product-component';
import Panel from '../panel/panel-component';

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
      type: 'brand',
      value: 'acom',
    },
    {
      type: 'highlight',
      value: true,
    }
  ],
};

const bigInfoProd = {
  ...exampleProduct,
  info: {
    value: 'UMCUPOMBEMGRANDE',
    rules: 'Confira as regras no site',
  },
};

const noImgProd = {
  ...exampleProduct,
  img: null,
};

const noInfoProd = {
  ...exampleProduct,
  info: null,
};

const props = {
  onCopy: jest.fn(),
  onGenerate: jest.fn(),
  stage: 'generate',
};

describe('Product component', () => {

  describe('Product stage: generate', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = mount(
        <Product {...props} data={exampleProduct} />
      );
    });

    it('Render correctly', () => {
      expect(wrapper.find('.imgDefault').length).toEqual(0);
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('onGenerate', () => {
        jest.spyOn(props, 'onGenerate')

        wrapper.find('button').simulate('click');
        expect(props.onGenerate).toHaveBeenCalled();
     });
  });

  describe('Variations', () => {
    it('Product Info isBig', () => {
      const wrapper = shallow(
        <Product data={bigInfoProd} />
      );

      expect(wrapper.find('.info.isBig').length).toEqual(1);
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('Type card renders Panel', () => {
      const wrapper = shallow(
        <Product type="card" brand="acom" data={exampleProduct} />
      );
      expect(wrapper.find(Panel).length).toEqual(1);
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('Product has no image, shows default img', () => {
      const wrapper = shallow(
        <Product data={noImgProd} />
      );

      expect(wrapper.find('.imgDefault').length).toEqual(1);
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('Product with no info', () => {
      const wrapper = shallow(
        <Product data={noInfoProd} />
      );

      expect(wrapper.find('.info').length).toEqual(0);
      expect(wrapper.debug()).toMatchSnapshot();
    });

  });

  describe('#doesnt render', () => {
    it('doesnt render if doenst receive data props', () => {
      const wrapper = shallow(
        <Product />
      );
      expect(wrapper.type()).toEqual(null);
    });
  });
});
