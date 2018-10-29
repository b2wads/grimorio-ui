import '../../../internals/test/helper';

import DatePicker from './date-picker-component';

/** @test {DatePicker} */
describe('DatePicker component', () => {
/** @test {DatePicker#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <DatePicker />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
