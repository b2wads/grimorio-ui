import '../../../internals/test/helper';

import PageTitle from './page-title-component';

/** @test {PageTitle} */
describe('PageTitle component', () => {
  const emptyProps = {
    title: 'título do header',
    sideComponent: undefined,
  }

  let wrapper

  beforeAll(() => {
    wrapper = shallow(
      <PageTitle {...emptyProps} />
    );
  })

  describe('#render', () => {
    it('render default', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('render with side content', () => {
      wrapper.setProps({...emptyProps, sideComponent: <div>Elemento da lateral</div>})
      expect(wrapper.html()).toMatchSnapshot();
    })
  });
});
