import '../../../internals/test/helper';

import Modal from './modal-component';

/** @test {Modal} */
describe('Modal component', () => {
/** @test {Modal#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Modal />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
