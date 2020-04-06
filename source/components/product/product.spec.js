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

jest.useFakeTimers();

describe('Product component', () => {

  describe('Stage: generate', () => {
    let wrapper;
    const props = {
      onCopy: jest.fn(),
      onGenerate: jest.fn(),
      stage: 'generate',
    };

    beforeAll(() => {
      wrapper = mount(
        <Product {...props} data={exampleProduct} />
      );
    });

    it('Renders correctly', () => {
      expect(wrapper.find('.imgDefault').length).toEqual(0);
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('onGenerate', () => {
        jest.spyOn(props, 'onGenerate')

        wrapper.find('button').simulate('click');
        expect(props.onGenerate).toHaveBeenCalled();
     });
  });

  describe('Stage: copy', () => {
    let wrapper;
    const props = {
      onCopy: jest.fn(),
      onGenerate: jest.fn(),
      stage: 'copy',
    };

    beforeAll(() => {
      wrapper = mount(
        <Product {...props} data={exampleProduct} />
      );
    });

    it('Renders correctly', () => {
      expect(wrapper.find('.imgDefault').length).toEqual(0);
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('onCopy', () => {
        jest.spyOn(props, 'onCopy');

        wrapper.find('button').simulate('click');
        expect(props.onCopy).toHaveBeenCalled();
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
     });
  });

  describe('Variations', () => {
    it('Type card renders Panel', () => {
      const wrapper = shallow(
        <Product type="card" brand="acom" data={exampleProduct} />
      );
      expect(wrapper.find(Panel).length).toEqual(1);
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('Product Info isBig', () => {
      const bigInfoProd = {
        ...exampleProduct,
        info: {
          value: 'UMCUPOMBEMGRANDE',
          rules: 'Confira as regras no site',
        },
      };

      const wrapper = shallow(
        <Product data={bigInfoProd} />
      );

      expect(wrapper.find('.info.isBig').length).toEqual(1);
    });

    it('Product has no image, shows default img', () => {
      const noImgProd = {
        ...exampleProduct,
        img: null,
      };

      const wrapper = shallow(
        <Product data={noImgProd} />
      );

      expect(wrapper.find('.imgDefault').length).toEqual(1);
    });

    it('Product with no info', () => {
      const noInfoProd = {
        ...exampleProduct,
        info: null,
      };

      const wrapper = shallow(
        <Product data={noInfoProd} />
      );

      expect(wrapper.find('.info').length).toEqual(0);
    });

    it('No tags', () => {
      const noInfoProd = {
        ...exampleProduct,
        tags: null,
      };

      const wrapper = shallow(
        <Product data={noInfoProd} />
      );
      expect(wrapper.find('.tag').children().length).toEqual(0);
    });

    it('With wrong tags', () => {
      const noInfoProd = {
        ...exampleProduct,
        tags: [
          {
            type: 'fake',
            value: 'tag',
          }
        ],
      };

      const wrapper = shallow(
        <Product data={noInfoProd} />
      );

      expect(wrapper.find('.tag').children().length).toEqual(0);
    });

    it('Does not render if no data prop', () => {
      const wrapper = shallow(
        <Product />
      );
      expect(wrapper.type()).toEqual(null);
    });
  });

});
