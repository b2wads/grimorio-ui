import '../../../internals/test/helper';
import DayPickerRangeController from 'react-dates/lib/components/DayPickerRangeController';
import moment from 'moment';

import Calendar from './calendar-component';
import { wrap } from 'module';

/** @test {Calendar} */
describe('Calendar component', () => {
  /** @test {Calendar#render} */
  describe('#render', () => {
    let wrapper;
    const props = {
      isRangeDate: true,
      onOutsideClick: jest.fn(),
      onChange: jest.fn(),
      isOutsideRange: jest.fn(),
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

    it('should call props onChange - when focusedInput is equal endDate; and endDate is a value', () => {
      wrapper.setState({ focusedInput: 'endDate'});
      const dates = {
        startDate: '12/03/2019',
        endDate: '15/03/2019'
      }
      const spy = jest.spyOn(props, 'onChange');
      wrapper.find(DayPickerRangeController).prop('onDatesChange')(dates);
      expect(spy).toHaveBeenCalledWith({...dates});
    });

    it('should call props onChange - when is single date', () => {
      wrapper.setProps({ isRangeDate: false });
      const dates = {
        startDate: '12/03/2019'
      }
      const spy = jest.spyOn(props, 'onChange');
      wrapper.find(DayPickerRangeController).prop('onDatesChange')(dates);
      expect(spy).toHaveBeenCalledWith({
        date: dates.startDate,
      });
    });

    it('should setState of focusedInput when focus change', () => {
      const focusedInput = 'endDate';
      wrapper.find(DayPickerRangeController).prop('onFocusChange')(focusedInput);
      expect(wrapper.state().focusedInput).toEqual('endDate');
    });

    it('on outside click - when !startDate and is range date', () => {
      wrapper.setProps({ isRangeDate: true, startDate: null, endDate: null });
      const onOutsideClick = jest.spyOn(props, 'onOutsideClick');
      const onChange = jest.spyOn(props, 'onChange');

      wrapper.find(DayPickerRangeController).prop('onOutsideClick')();
      expect(onOutsideClick).toHaveBeenCalled();
      expect(onChange).toHaveBeenCalledWith({ startDate: null, endDate: null });
    });

    it('on outside click - when !endDate and is range date - set endDate as startDate', () => {
      const startDate = '12/03/2019';
      wrapper.setProps({ isRangeDate: true, startDate, endDate: null });

      const onOutsideClick = jest.spyOn(props, 'onOutsideClick');
      const onChange = jest.spyOn(props, 'onChange');

      wrapper.find(DayPickerRangeController).prop('onOutsideClick')();
      expect(onOutsideClick).toHaveBeenCalled();
      expect(onChange).toHaveBeenCalledWith({ startDate, endDate: startDate });
    });

    it('on outside click - when is singleDate', () => {
      wrapper.setProps({ isRangeDate: false });

      const onOutsideClick = jest.spyOn(props, 'onOutsideClick');
      const onChange = jest.spyOn(props, 'onChange');

      wrapper.find(DayPickerRangeController).prop('onOutsideClick')();
      expect(onOutsideClick).toHaveBeenCalled();
      expect(onChange).toHaveBeenCalledWith({});
    });

    it('isOutsideRange return true - when day is after startDate and is NOT single date', () => {
      wrapper.setProps({ isRangeDate: true, startDate: moment('10/05/2019', 'DD/MM/YYYY') })
      wrapper.setState({ focusedInput: 'endDate' });
      const isOutsideRange = wrapper.instance().isOutsideRange(moment('30/10/2020', 'DD/MM/YYYY'));
      

      expect(isOutsideRange).toEqual(true);
    });

    it('isOutsideRange should call isOutsideRange props', () => {
      const day = moment('05/01/2010', 'DD/MM/YYYY');
      wrapper.instance().isOutsideRange(day);
      wrapper.setProps({ startDate: moment('10/05/2019', 'DD/MM/YYYY') });
      wrapper.setState({ focusedInput: 'endDate' });
      const spy = jest.spyOn(props, 'isOutsideRange');
      expect(spy).toHaveBeenCalledWith(day);
    });

    it('should call initialVisibleMonth', () => {
      const month = moment('05/01/2010', 'DD/MM/YYYY');
      wrapper.setProps({ initialMonth: month });

      const resp = wrapper.find(DayPickerRangeController).prop('initialVisibleMonth')();
      expect(resp).toEqual(month);
    });
  });
});
