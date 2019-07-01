import '../../../internals/test/helper';

import Calendar from './calendar-component';

/** @test {Calendar} */
describe('Calendar component', () => {
/** @test {Calendar#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Calendar />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
