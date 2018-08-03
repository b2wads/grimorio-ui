"use strict";

require("../../../internals/test/helper");

var _productComponent = _interopRequireDefault(require("./product-component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exampleProduct = {
  img: 'https://images-americanas.b2w.io/produtos/01/00/sku/33446/6/33446652_4GG.jpg',
  name: 'Notebook Profissional Avell W155 MX Intel Core i7 16GB (GeForce MX150) 1TB 15.6 FullHD',
  info: {
    value: 5333.20
  },
  expires: '2018-07-08 23:59',
  link: 'https://www.americanas.com.br/produto/33446653/notebook-profissional-avell-w155-mx-intel-core-i7-16gb-geforce-mx150-1tb-15-6-fullhd',
  tags: [{
    type: 'brand',
    value: 'acom'
  }, {
    type: 'highlight',
    value: true
  }]
};
/** @test {Product} */

describe('Product component', function () {
  /** @test {Product#render} */
  describe('#render', function () {
    it('render correctly', function () {
      var wrapper = shallow(React.createElement(_productComponent.default, {
        data: exampleProduct
      }));
      expect(wrapper.find('section')).to.have.length(1);
    });
  });
  /** @test {Product#render} */

  describe('#doesnt render', function () {
    it('doesnt render if doenst receive data props', function () {
      var wrapper = shallow(React.createElement(_productComponent.default, null));
      expect(wrapper.type()).to.equal(null);
    });
  });
});