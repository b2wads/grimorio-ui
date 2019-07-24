import '../../../internals/test/helper';

import Steps from './steps-component';

const pageData = [
  { name: 'pass1', title: 'Criação de Campanha' },
  { name: 'pass2', title: 'Criação de grupo de anúncio' },
  { name: 'pass3', title: 'Adicionar anúncios' },
  { name: 'finish', title: 'Finalização' },
];

let value = 0;
/** @test {Slider} */
describe('Slider component', () => {
  /** @test {Slider#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(<Steps data={pageData} current={pageData[value].name} />);
      expect(wrapper.length).toEqual(1);
    });
  });
});
