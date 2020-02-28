import '../../../internals/test/helper';

import Header from './header-component';
import Select from '../select';

/** @test {Header} */
describe('Header component', () => {
  const emptyProps = {
    children: undefined,
    isMobile: undefined,
    items: undefined,
    onLogoClick: undefined,
    onLogout: undefined,
  }

  const items = [
    {
      name: 'Opção 3',
      value: 'home',
      icon: 'home',
    },
    {
      name: 'Opção 4',
      value: 'person',
      icon: 'person',
    },
  ];

  let wrapper

  beforeAll(() => {
    wrapper = shallow(
      <Header {...emptyProps} />
    );
  })

  describe('render', () => {
    it('with children', () => {
      wrapper.setProps({ ...emptyProps, children: <div>teste com filho</div> })
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('desktop version with items', () => {
      wrapper.setProps({ ...emptyProps, isMobile: false, items })
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('desktop version without items', () => {
      wrapper.setProps({ ...emptyProps, isMobile: false })
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('mobile version', () => {
      wrapper.setProps({ ...emptyProps, isMobile: true })
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });

  it('onClick logo mobile, should call onLogoClick props', () => {
    const props = {
      onLogoClick: jest.fn()
    }
    const spy = jest.spyOn(props, 'onLogoClick')
    wrapper.setProps({ ...emptyProps, isMobile: true, onLogoClick: props.onLogoClick })
    wrapper.find('.logo').simulate('click')
    expect(spy).toHaveBeenCalled();
  })

  it('onClick headerLogout, should call onLogout props', () => {
    const props = {
      onLogout: jest.fn()
    }
    const spy = jest.spyOn(props, 'onLogout')
    wrapper.setProps({ ...emptyProps, isMobile: true, onLogout: props.onLogout })
    wrapper.find('.headerLogout').simulate('click')
    expect(spy).toHaveBeenCalled();
  })

  it('onSelect items, should call onSelect props', () => {
    const props = {
      onSelect: jest.fn()
    }
    const spy = jest.spyOn(props, 'onSelect')
    wrapper.setProps({ ...emptyProps, items, isMobile: false, onSelect: props.onSelect })
    wrapper.find(Select).props().onSelect()
    expect(spy).toHaveBeenCalled();
  })
});
