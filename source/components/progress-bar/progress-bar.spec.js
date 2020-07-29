import '../../../internals/test/helper';

import ProgressBar from './progress-bar-component';

/** @test {ProgressBar} */
describe('ProgressBar component', () => {
/** @test {ProgressBar#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <ProgressBar progress={50} className="test" theme="primary"/>
      );

      expect(wrapper.length).toEqual(1);
    });
  });
});
