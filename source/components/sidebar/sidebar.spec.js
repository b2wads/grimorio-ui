import '../../../internals/test/helper';

import Sidebar from './sidebar-component';
import { AccordionTitle } from '../accordion'

/** @test {Sidebar} */
describe('Sidebar component', () => {
  const emptyProps = {
    children: undefined,
    onClick: undefined,
    onLogoClick: undefined,
    isMobile: undefined,
    open: undefined,
    schema: [
      {
        name: 'Home',
        link: '/home',
        icon: 'person',
        isActive: true
      },
      {
        name: 'Página 1',
        link: '/pag1',
        icon: 'desktop_mac',
      },
      {
        name: 'Um Accordion',
        icon: 'filter',
        id: 'accordion',
        submenu: [
          {
            name: 'Item 1',
            link: '/acc/item1',
            isActive: true
          },
         {
            name: 'Item 2',
            link: '/acc/item2',
          },
        ],
       },
       {
        name: 'Outro Accordion',
        icon: 'filter',
        id: 'accordion',
        submenu: [
          {
            name: 'Item 1',
            link: '/acc/item1',
          },
         {
            name: 'Item 2',
            link: '/acc/item2',
          },
        ],
       },
      ]
  }

  let wrapper

  beforeAll(() => {
    wrapper = shallow(
      <Sidebar {...emptyProps} />
    );
  })
  
  it('render default', () => {
    wrapper.setProps({...emptyProps})
    expect(wrapper.debug()).toMatchSnapshot();
  });
  
  describe('Call function to toggle accordion when click on menu item', () => {
    it('When item is already opened', () => {
      const index = 2;
      wrapper.setState({openedAccordion: index})
      const spy = jest.spyOn(wrapper.instance(), 'toggleSubmenu')
      wrapper.find(AccordionTitle).at(0).props().onClick(index)
      expect(spy).toHaveBeenCalledWith(index);
    })

    it('When item is NOT opened', () => {
      const index = 2;
      wrapper.setState({openedAccordion: 0})
      const spy = jest.spyOn(wrapper.instance(), 'toggleSubmenu')
      wrapper.find(AccordionTitle).at(0).props().onClick(index)
      expect(spy).toHaveBeenCalledWith(index);
    })
  })

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
      jest.spyOn(props, 'onClick')
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
      jest.spyOn(props, 'onClick')
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
      jest.spyOn(props, 'onLogoClick')
      wrapper.find('.logotype').simulate('click')
      expect(props.onLogoClick).toHaveBeenCalled();
    })
  })
});
