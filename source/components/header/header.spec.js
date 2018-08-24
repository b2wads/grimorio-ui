import '../../../internals/test/helper';

import Header from './header-component';

/** @test {Header} */
describe('Header component', () => {
/** @test {Header#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Header user="teste@teste.com" onLogout={() => {}} />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
