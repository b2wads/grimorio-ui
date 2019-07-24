import '../../../internals/test/helper';

import Steps from './steps-component';

const pageData = [
  { name: 'pass1', title: 'Criação de Campanha', isComplete: true },
  { name: 'pass2', title: 'Criação de grupo de anúncio', isComplete: false },
  { name: 'pass3', title: 'Adicionar anúncios', isComplete: false },
  { name: 'finish', title: 'Finalização', isComplete: false },
];

let value = 0;
describe('Steps component', () => {
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(<Steps data={pageData} current={pageData[value].name} />);
      expect(wrapper.length).toEqual(1);
    });
  });
});
