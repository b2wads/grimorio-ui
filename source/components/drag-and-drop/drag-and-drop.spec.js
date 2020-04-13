import '../../../internals/test/helper';

import DragAndDrop from './drag-and-drop-component';

/** @test {DragAndDrop} */
describe('DragAndDrop component', () => {
/** @test {DragAndDrop#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <DragAndDrop />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
