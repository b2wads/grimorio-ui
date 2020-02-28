import '../../../internals/test/helper';

import Accordion from './index';
import AccordionPanel from './elements/accordion-panel';

/** @test {Accordion} */
describe('Accordion component', () => {
  /** @test {Accordion#render} */
  const emptyProps = {
    children: undefined,
    panels: undefined,
    as: undefined,
    onTitleClick: undefined,
    exclusive: undefined,
  }

  let wrapper
  const panels = [
    { icon: 'insert_chart', title: 'Dashboard', content: 'primeiro conteudo' },
    { icon: 'dashboard', title: 'Charts', content: 'segundo conteudo' }
  ]

  beforeAll(() => {
    wrapper = shallow(
      <Accordion {...emptyProps} />
    );
  })

  describe('should render', () => {
    it('with children', () => {
      wrapper.setProps({ ...emptyProps, children: <li>teste com filho</li> })
      
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('without children', () => {
      wrapper.setProps({ ...emptyProps, panels })
      
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('with different html element', () => {
      wrapper.setProps({ ...emptyProps, children: 'oi', as: 'div' })
      expect(wrapper.debug()).toMatchSnapshot();
    })

    it('with exclusive props false', () => {
      wrapper.setProps({ ...emptyProps, exclusive: false })
      expect(wrapper.instance().state.activeIndex).toEqual([]);
    })

    it('with exclusive props true', () => {
      wrapper.setProps({ ...emptyProps, exclusive: true })
      expect(wrapper.instance().state.activeIndex).toEqual(-1);
    })
  });

  describe('call handleTitleClick', () => {
    const titleProps = {index: 2}

    it('should call handleTitleClick with right params', () => {
      const spy = jest.spyOn(wrapper.instance(), 'handleTitleClick')
      
      wrapper.setProps({ ...emptyProps, panels })
      wrapper.find(AccordionPanel).at(0).props().onTitleClick('', titleProps)
      expect(spy).toHaveBeenCalledWith('', titleProps);
    })

    it('should call computeNewIndex', () => {
      const spy = jest.spyOn(wrapper.instance(), 'computeNewIndex')
      wrapper.setProps({ ...emptyProps, panels })
      wrapper.find(AccordionPanel).at(0).props().onTitleClick('', titleProps)
      expect(spy).toHaveBeenCalledWith(titleProps.index);
    })

    it('if contains onTitleClick props, call onTitleClick', () => {
      const e = 'event'
      const props = {
        onTitleClick: jest.fn()
      }
      const spy = jest.spyOn(props, 'onTitleClick')
      
      wrapper.setProps({ ...emptyProps, panels, onTitleClick: props.onTitleClick })
      wrapper.find(AccordionPanel).at(0).props().onTitleClick(e, titleProps)
      expect(spy).toHaveBeenCalledWith(e, titleProps);
    })
  });

  describe('call computeNewIndex', () => {
    it('when exclusive props is true and index is equal activeIndex', () => {
      const index = 2
      wrapper.setProps({ ...emptyProps, exclusive: true })
      wrapper.setState({ activeIndex: index })
      const resp = wrapper.instance().computeNewIndex(index)

      expect(resp).toEqual(-1)
    })

    it('when exclusive props is true and index is different of activeIndex', () => {
      const index = 2
      wrapper.setProps({ ...emptyProps, exclusive: true })
      wrapper.setState({ activeIndex: 1 })
      const resp = wrapper.instance().computeNewIndex(index)

      expect(resp).toEqual(index)
    })

    it('when is NOT exclusive props and activeIndex contains index', () => {
      const index = 2
      const activeIndex = [1, 2, 3, 4]
      wrapper.setProps({ ...emptyProps, exclusive: false })
      wrapper.setState({ activeIndex: [1, 2, 3, 4] })
      const resp = wrapper.instance().computeNewIndex(index)

      expect(resp).toEqual(activeIndex.filter(item => item !== index))
    })

    it('when is NOT exclusive props and activeIndex DONT contains index', () => {
      const index = 5
      const activeIndex = [1, 2, 3, 4]
      wrapper.setProps({ ...emptyProps, exclusive: false })
      wrapper.setState({ activeIndex: [1, 2, 3, 4] })
      const resp = wrapper.instance().computeNewIndex(index)

      expect(resp).toEqual([...activeIndex, index])
    })
  })

  describe('call isIndexActive', () => {
    const index = 2

    it('when is exclusive props and activeIndex is equal index', () => {
      wrapper.setProps({ ...emptyProps, exclusive: true })
      wrapper.setState({ activeIndex: index })
      const resp = wrapper.instance().isIndexActive(index)

      expect(resp).toEqual(true)
    })

    it('when is exclusive props and activeIndex is different of index', () => {
      wrapper.setProps({ ...emptyProps, exclusive: true })
      wrapper.setState({ activeIndex: 3 })
      const resp = wrapper.instance().isIndexActive(index)

      expect(resp).toEqual(false)
    })

    it('when is not exclusive and activeIndex includes index', () => {
      wrapper.setProps({ ...emptyProps, exclusive: false })
      wrapper.setState({ activeIndex: [1, 2, 3] })
      const resp = wrapper.instance().isIndexActive(index)

      expect(resp).toEqual(true)
    })

    it('when is not exclusive and activeIndex DONT includes index', () => {
      wrapper.setProps({ ...emptyProps, exclusive: false })
      wrapper.setState({ activeIndex: [1, 3] })
      const resp = wrapper.instance().isIndexActive(index)

      expect(resp).toEqual(false)
    })
  })
});
