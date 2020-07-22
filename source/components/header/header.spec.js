import '../../../internals/test/helper';

import Header from './header-component';

/** @test {Header} */
describe('Header component', () => {
  const emptyProps = {
    children: undefined,
    isMobile: undefined,
    onLogoClick: undefined,
  }

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

    it('desktop version', () => {
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
})