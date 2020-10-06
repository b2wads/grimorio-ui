import '../../../internals/test/helper';

import Sidebar from './sidebar-component';

const schema = [
  {
    name: 'Home',
    link: '/home',
    icon: 'person',
    id: 'home-link',
  },
  {
    name: 'Página 1',
    link: '/pag1',
    icon: 'desktop_mac',
    id: 'pag1',
  },
  {
    name: 'Um Accordion',
    icon: 'filter',
    id: 'acc',
    submenu: [
      {
        name: 'Item 1',
        link: '/acc/item1',
        id: 'acc-item1',
      },
     {
        name: 'Item 2',
        link: '/acc/item2',
        id: 'acc-item2',
      },
    ],
   },
   {
    name: 'Outro Accordion',
    icon: 'filter',
    id: 'acc2',
    submenu: [
      {
        name: 'Item 1',
        link: '/acc2/item1',
        id: 'acc2-item1',
      },
     {
        name: 'Item 2',
        link: '/acc2/item2',
        id: 'acc2-item2',
      },
    ],
   },
];

const initialProps = { schema, onClickItem: jest.fn(), initialSubmenu: 'acc2', initialItem: 'acc2-item2' };

describe('Sidebar component', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallow(
      <Sidebar {...initialProps} />
    );
  })

  it('render default', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  describe('with toggle button', () => {
    beforeAll(() => {
      wrapper.setProps({ hasToggle: true })
    })

    it('render with button when hasToggle is true', () => {
      expect(wrapper.find('.toggle')).toHaveLength(1);
    });

    it('should call onToggle when click on toggle', () => {
      const props = { onToggle: jest.fn() }
      wrapper.setProps(props)
      jest.spyOn(props, 'onToggle')
      wrapper.find('.toggle').simulate('click');
      expect(props.onToggle).toHaveBeenCalled();
    })
  })

  describe('with overlay', () => {
    beforeEach(() => {
      wrapper.setProps({ isMobile: true })
    })

    it('render with overlay when isMobile is true', () => {
      expect(wrapper.find('.overlay')).toHaveLength(1);
    });

    it('should call onClick when click on button', () => {
      const props = { onToggle: jest.fn() }
      wrapper.setProps(props)
      jest.spyOn(props, 'onToggle')
      wrapper.find('.overlay').simulate('click');
      expect(props.onToggle).toHaveBeenCalled();
    })
  })

  describe('with logo', () => {
    const logo = <span className="logo-default-teste">logo default</span>;
    const logoSmall = <span className="logo-small-teste">logoSmall</span>;

    beforeEach(() => {
      wrapper.setProps({ isMobile: false, logo, logoSmall})
    })

    it('render default logo when open is true', () => {
      wrapper.setProps({ open: true })
      expect(wrapper.find('.logo-default-teste')).toHaveLength(1);
    });

    it('render small logo when open is true', () => {
      wrapper.setProps({ open: false })
      expect(wrapper.find('.logo-small-teste')).toHaveLength(1);
    });

    it('should call onClick when click on button', () => {
      const props = { onLogoClick: jest.fn()}
      wrapper.setProps({ onLogoClick: props.onLogoClick })
      jest.spyOn(props, 'onLogoClick')
      wrapper.find('.logotype').simulate('click')
      expect(props.onLogoClick).toHaveBeenCalled();
    })
  })
});
