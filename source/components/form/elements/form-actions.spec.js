import '../../../../internals/test/helper';

import FormActions from './form-actions';

/** @test {FormActions} */
describe('FormActions component', () => {
/** @test {FormActions#render} */
  describe('#render', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(
        <FormActions className="test">
          <span>test</span>
        </FormActions>
      );
    })

    it('render correctly', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should add class form-group-actions to param class', () => {
      expect(wrapper.find('.test').hasClass('form-group-actions')).toBeTruthy();
    });
  });
});
