import '../../../internals/test/helper';
import DayPickerRangeController from 'react-dates/lib/components/DayPickerRangeController';

import Calendar from './calendar-component';

/** @test {Calendar} */
describe('Calendar component', () => {
  /** @test {Calendar#render} */
  describe('#render', () => {
    let wrapper;
    const props = {
      isSingleDate: false,
      onOutsideClick: jest.fn(),
    };
    beforeAll(() => {
      wrapper = shallow(
        <Calendar {...props} />
      );
    });
    it('render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should call changeDate', () => {
      const dates = {
        startDate: '12/03/2019',
        endDate: '15/03/2019'
      }
      const spy = jest.spyOn(wrapper.instance(), 'changeDate');
      wrapper.find(DayPickerRangeController).prop('onDatesChange')(dates);
      expect(spy).toHaveBeenCalledWith(dates);
    });

    it('should setState of focusedInput when focus change', () => {
      const focusedInput = 'endDate';
      wrapper.find(DayPickerRangeController).prop('onFocusChange')(focusedInput);
      expect(wrapper.state().focusedInput).toEqual('endDate');
    });

    it('on outside click with singleDate', () => {
      const spy = jest.spyOn(props, 'onOutsideClick');
      wrapper.setProps({ isSingleDate: true });
      wrapper.find(DayPickerRangeController).prop('onOutsideClick')();
      expect(spy).toHaveBeenCalled();
    });
  });
});
