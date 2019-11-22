import '../../../internals/test/helper';

import Alert from './alert-component';
import Button from '../button';
import Icon from '../icon';

/** @test {Alert} */
describe('Alert component', () => {
  /** @test {Alert#render} */
  it('render correctly with default values', () => {
    const wrapper = shallow(
      <Alert />
    );
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe('should render Button when action is true', () => {
    let wrapper;
    const props = {
      action: true,
      actionText: 'texto botão',
      onClick: jest.fn()
    }
    beforeAll(() => {
      wrapper = shallow(
        <Alert {...props} />
      );
    })

    it('should render Button with right text', () => {
      expect(wrapper.find(Button).props().children).toEqual(props.actionText)
    });

    it('should call onClick when click Button', () => {
      jest.spyOn(props, 'onClick')
      wrapper.find(Button).simulate('click')
      expect(props.onClick).toHaveBeenCalled()
    });
  })

  describe('Should render Icon close when props close is true', () => {
    let wrapper
    const props = {
      close: true,
      onClick: jest.fn(),
    }

    beforeAll(() => {
      wrapper = shallow(
        <Alert {...props} />
      );
    })

    it('should render Icon close', () => {
      expect(wrapper.find({name: 'close'})).toHaveLength(1)
    });

    it('should call onClick whent click Icon close', () => {
      jest.spyOn(props, 'onClick')
      wrapper.find({name: 'close'}).simulate('click')
      expect(wrapper.find({name: 'close'})).toHaveLength(1)
    });
  })

  it('should render overlay when overlay props is true', () => {
    const props = {
      overlay: true,
    }
    const wrapper = shallow(
      <Alert {...props} />
    );
    expect(wrapper.find('.overlay')).toHaveLength(1)
  });

  it('should render children when props children is defined', () => {
    const stringClass = "children-test"
    const props = {
      children: <div className={stringClass}></div>,
    }
    const wrapper = shallow(
      <Alert {...props} />
    );
    expect(wrapper.find(`.${stringClass}`)).toHaveLength(1)
  });

  it('should render content when props children is undefined', () => {
    const stringClass = "children-test"
    const props = {
      content: 'meu conteúdo',
    }
    const wrapper = shallow(
      <Alert {...props} />
    );
    expect(wrapper.contains(props.content)).toEqual(true)
  });

  it('should render icon with type props', () => {
    const props = {
      type: 'danger',
    }
    const wrapper = shallow(
      <Alert {...props} />
    );
    expect(wrapper.find({name: 'warning'})).toHaveLength(1)
  });

});
