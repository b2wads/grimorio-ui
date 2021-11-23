import '../../../internals/test/helper';

import Feedback from './feedback-component';
import Icon from '../icon';
import Button from '../button';

/** @test {Feedback} */
describe('Feedback component', () => {
  const emptyProps = {
    message: 'test message loucura',
    isOpen: undefined,
    onDismiss: undefined,
    timeToClose: undefined,
  }

  jest.useFakeTimers();

  let wrapper

  beforeAll(() => {
    wrapper = shallow(
      <Feedback {...emptyProps} />
    );
  })

  describe('#render', () => {
    it('render when isOpen is false', () => {
      wrapper.setProps({...emptyProps, isOpen: false})
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('render when isOpen is true', () => {
      wrapper.setProps({...emptyProps, isOpen: true})
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should render correctly with classname', () => {
      wrapper.setProps({...emptyProps, className: 'testclass'})

      expect(wrapper.debug()).toMatchSnapshot();
    });
  });

  it('render when type is success should render icon check', () => {
    wrapper.setProps({...emptyProps, type: 'success'})
    const name = wrapper.find(Icon).at(0).props().name
    expect(name).toEqual('check')

    expect(wrapper.find('.default.success')).toHaveLength(1)
  });

  it('render when type is fail should render icon error', () => {
    wrapper.setProps({...emptyProps, type: 'fail'})
    const name = wrapper.find(Icon).at(0).props().name
    expect(name).toEqual('error')

    expect(wrapper.find('.default.fail')).toHaveLength(1)
  });

  it('render with correct positioning when isMobile', () => {
    wrapper.setProps({...emptyProps, isMobile: true})

    expect(wrapper.find('.mobilePosition')).toHaveLength(1)
  });

  it('render with correct positioning when not isMobile', () => {
    wrapper.setProps({...emptyProps, isMobile: false})

    expect(wrapper.find('.mobilePosition')).toHaveLength(0)
  });

  it('should correctly setup component to close when click in close button', () => {
    const props = {
      onDismiss: jest.fn()
    }
    wrapper.setProps({...emptyProps, onDismiss: props.onDismiss})
    wrapper.find(Button).props().onClick()
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 500);
  });
});
