import '../../../internals/test/helper';

import EditableValue from './editable-value-component';

/** @test {EditableValue} */
describe('EditableValue component', () => {
/** @test {EditableValue#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <EditableValue />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
