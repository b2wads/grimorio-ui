import '../../../../internals/test/helper';

import { HelpText } from './form-help-text';

/** @test {HelpText} */
describe('FormActions component', () => {
/** @test {HelpText#render} */
  describe('#render', () => {
    let wrapper;

    beforeAll(() => {
      const props = {
        className: 'test',
        context: {
          formGroup: {
            validationState: 'success'
          }
        }
      }
      wrapper = shallow(
        <HelpText {...props}>
          Test Help Text
        </HelpText>
      );
    })

    it('render correctly', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should add class help-text to param class', () => {
      expect(wrapper.find('.test').hasClass('help-text')).toBeTruthy();
    });

    it('should add class with validation state if its passed', () => {
      expect(wrapper.find('.test').hasClass('has-success')).toBeTruthy();
    })
  });
});
