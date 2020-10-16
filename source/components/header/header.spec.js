import '../../../internals/test/helper';

import Header from './header-component';

/** @test {Header} */
describe('Header component', () => {
  const emptyProps = {
    children: undefined,
    showLogo: undefined,
    onLogoClick: undefined,
  }

  let wrapper

  beforeAll(() => {
    wrapper = shallow(
      <Header {...emptyProps} />
    );
  })

  describe('render', () => {
    it('Basic', () => {
      wrapper.setProps({ ...emptyProps, children: <div>teste com filho</div> })
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('No logo version', () => {
      wrapper.setProps({ ...emptyProps, showLogo: false })
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('Showing Logo', () => {
      wrapper.setProps({ ...emptyProps, showLogo: true })
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });

  it('onClick logo mobile, should call onLogoClick props', () => {
    const props = {
      onLogoClick: jest.fn()
    }
    const spy = jest.spyOn(props, 'onLogoClick')
    wrapper.setProps({ ...emptyProps, showLogo: true, onLogoClick: props.onLogoClick })
    wrapper.find('.logo').simulate('click')
    expect(spy).toHaveBeenCalled();
  })
})
