import '../../../internals/test/helper';

import Sidebar from './sidebar-component';

const Teste = () => <h3 className="teste-element">Um Elemento qualquer</h3>;

const schema = [
  {
    render: () => <Teste />
  },
  {
    name: 'Home',
    link: '/home',
    icon: 'person',
    id: 'home-link',
    className: 'classe-teste',
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
        className: 'classe-subitem-1'
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
   {
    name: 'Ajuda!',
    icon: 'help',
    id: 'help',
    action: jest.fn(),
  },
];

const initialProps = { schema, onClickItem: jest.fn(), initialSection: 'acc2', initialItem: 'acc2-item2' };

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

    it('should call onLogoClick when click on logo', () => {
      const props = { onLogoClick: jest.fn()}
      wrapper.setProps({ onLogoClick: props.onLogoClick })
      jest.spyOn(props, 'onLogoClick')
      wrapper.find('.logotype').simulate('click')
      expect(props.onLogoClick).toHaveBeenCalled();
    });
  });

  describe('items', () => {
    it('The firstItem should be a rendered element', () => {
      expect(wrapper.find(Teste)).toHaveLength(1);
    });

    it('Expects to have same number of children as schema (without render)', () => {
      expect(wrapper.find('[data-testidgen="menu-item"]')).toHaveLength(schema.length - 1);
    });

    it('When clicks on item, calls function', () => {
      wrapper.find(`[data-testid="${schema[1].id}"]`).simulate('click');
      expect(initialProps.onClickItem).toHaveBeenCalledWith(schema[1].link);
    });

    it('When clicks on item with action, call action', () => {
      wrapper.find(`[data-testid="${schema[5].id}"]`).simulate('click');
      expect(initialProps.onClickItem).not.toHaveBeenCalled();
      expect(schema[5].action).toHaveBeenCalled();
    });
  });
});
