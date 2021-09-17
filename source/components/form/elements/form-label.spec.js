import '../../../../internals/test/helper';

import { FormLabel } from './form-label';

/** @test {FormLabel} */
describe('FormActions component', () => {
/** @test {FormLabel#render} */
  describe('#render', () => {
    let wrapper;

    beforeAll(() => {
      const props = {
        addon: <span>test</span>,
        className: 'test',
        context: {
          formGroup: {
            validationState: 'success',
            controlId: '123',
          }
        }
      }
      wrapper = shallow(
        <FormLabel {...props}>
          Test Label
        </FormLabel>
      );
    })

    it('render correctly', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should add class label to param class', () => {
      expect(wrapper.find('.test').hasClass('label')).toBeTruthy();
    });

    it('should add class with validation state if its passed', () => {
      expect(wrapper.find('.test').hasClass('has-success')).toBeTruthy();
    })
  });
});
