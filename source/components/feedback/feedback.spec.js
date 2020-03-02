import '../../../internals/test/helper';

import Feedback from './feedback-component';
import Icon from '../icon';
import Button from '../button';

/** @test {Feedback} */
describe('Feedback component', () => {
  const emptyProps = {
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
      wrapper.setState({isOpen: false})
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('render when isOpen is true', () => {
      wrapper.setState({isOpen: true})
      expect(wrapper.debug()).toMatchSnapshot();
    });

    
  });

  it('render when type is success should render icon check', () => {
    wrapper.setProps({...emptyProps, type: 'success'})
    const name = wrapper.find(Icon).at(0).props().name
    expect(name).toEqual('check')
  });

  it('render when type is fail should render icon error', () => {
    wrapper.setProps({...emptyProps, type: 'fail'})
    const name = wrapper.find(Icon).at(0).props().name
    expect(name).toEqual('error')
  });

  it('shoul call function onDismiss when click on button', () => {
    const props = {
      onDismiss: jest.fn()
    }
    wrapper.setProps({...emptyProps, onDismiss: props.onDismiss})
    wrapper.find(Button).props().onClick()
    expect(props.onDismiss).toHaveBeenCalled()
  });

  it('should wait 500 time to call function', () => {
    const timeToClose = 500
    wrapper.setProps({...emptyProps, timeToClose })
    wrapper.instance().componentDidMount()
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), timeToClose);
  });

  it('should call onDismiss and setState isOpen as false when call timer function', () => {
    const props = {
      onDismiss: jest.fn()
    }
    wrapper.setProps({...emptyProps, onDismiss: props.onDismiss})
    wrapper.instance().timer()
    expect(props.onDismiss).toHaveBeenCalled()
    expect(wrapper.instance().state.isOpen).toEqual(false)
  })

});
