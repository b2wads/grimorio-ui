import '../../../internals/test/helper';

import Sidebar from './sidebar-component';

/** @test {Sidebar} */
describe('Sidebar component', () => {
  const emptyProps = {
    children: undefined,
    onClick: undefined,
    onLogoClick: undefined,
    isMobile: undefined,
    open: undefined,
  }

  let wrapper

  beforeAll(() => {
    wrapper = shallow(
      <Sidebar {...emptyProps} />
    );
  })
  
  describe('#render', () => {
    it('render default with children', () => {
      wrapper.setProps({...emptyProps, children: <span>Com filho</span>})
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });

  describe('with toggle button', () => {
    beforeAll(() => {
      wrapper.setProps({...emptyProps, onClick: true})
    })

    it('render with button when onClick is true', () => {
      expect(wrapper.find('.toggle')).toHaveLength(1);
    });

    it('should call onClick when click on button', () => {
      const props = { onClick: jest.fn()}
      wrapper.setProps({...emptyProps, onClick: props.onClick})
      const spy = jest.spyOn(props, 'onClick')
      wrapper.find('.toggle').simulate('click')
      expect(props.onClick).toHaveBeenCalled();
    })
  })

  describe('with overlay', () => {
    beforeEach(() => {
      wrapper.setProps({...emptyProps, isMobile: true})
    })

    it('render with overlay when isMobile is true', () => {
      expect(wrapper.find('.overlay')).toHaveLength(1);
    });

    it('should call onClick when click on button', () => {
      const props = { onClick: jest.fn()}
      wrapper.setProps({onClick: props.onClick})
      const spy = jest.spyOn(props, 'onClick')
      wrapper.find('.overlay').simulate('click')
      expect(props.onClick).toHaveBeenCalled();
    })
  })

  describe('with logo', () => {
    const logo = <span className="logo-default-teste">logo default</span>;
    const logoSmall = <span className="logo-small-teste">logoSmall</span>;

    beforeEach(() => {
      wrapper.setProps({...emptyProps, isMobile: false, logo, logoSmall})
    })

    it('render default logo when open is true', () => {
      wrapper.setProps({open: true})
      expect(wrapper.find('.logo-default-teste')).toHaveLength(1);
    });

    it('render small logo when open is true', () => {
      wrapper.setProps({open: false})
      expect(wrapper.find('.logo-small-teste')).toHaveLength(1);
    });

    it('should call onClick when click on button', () => {
      const props = { onLogoClick: jest.fn()}
      wrapper.setProps({onLogoClick: props.onLogoClick})
      const spy = jest.spyOn(props, 'onLogoClick')
      wrapper.find('.logotype').simulate('click')
      expect(props.onLogoClick).toHaveBeenCalled();
    })
  })
});
