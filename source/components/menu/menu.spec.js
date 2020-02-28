import '../../../internals/test/helper';

import Menu from './index';

/** @test {Menu} */
describe('Menu component', () => {

  const emptyProps = {
    children: undefined,
    className: undefined,
    items: undefined,
    type: undefined,
    theme: undefined,
  }

  let wrapper

  const items = [
    {
      key: 'dashboard',
      icon: 'dashboard',
      name: 'Dashboard',
      items: [
        { key: 'default', name: 'Default', link: '/default' },
        { key: 'ecommerce', name: 'eCommerce', link: '/ecommerce' },
        { key: 'newsportal', name: 'News Portal', link: '/news-portal' }
      ]
    },
    {
      key: 'charts',
      icon: 'insert_chart',
      name: 'Charts',
      items: [
        { key: 'test', name: 'Test', link: '/test' },
      ]
    }
  ]

  beforeAll(() => {
    wrapper = shallow(
      <Menu {...emptyProps} />
    );
  })

  describe('#render', () => {
    it('render with children', () => {
      wrapper.setProps({...emptyProps, children: <div>render com filho</div>})
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('render with items', () => {
      wrapper.setProps({...emptyProps, items, type: 'accordionMenu', theme: 'dark', className: 'teste'})
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
