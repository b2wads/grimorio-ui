import '../../../internals/test/helper';

import Accordion from './index';
import AccordionPanel from './elements/accordion-panel';

/** @test {Accordion} */
describe('Accordion component', () => {
  /** @test {Accordion#render} */

  const props = {
    panels: [
      { icon: 'insert_chart', title: 'Dashboard', content: 'primeiro conteudo' },
      { icon: 'dashboard', title: 'Charts', content: 'segundo conteudo' }
    ]
  }

  it('should render default props', () => {
    const wrapper = shallow(
      <Accordion>Accordion com filho</Accordion>
    );
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render children even if receive props panels', () => {
    const accordionText = 'Accordion com filho'
    const wrapper = shallow(
      <Accordion {...props}>{accordionText}</Accordion>
    );
    expect(wrapper.contains(accordionText)).toEqual(true);
  });

  it('should render element div if it was passed as props', () => {
    const wrapper = shallow(
      <Accordion as="div">Accordion com filho</Accordion>
    );
    expect(wrapper.find('div')).toHaveLength(1);
  });

  describe('should render panels when receive panels prop', () => {
    let wrapper
    let instance

    beforeAll(() => {
      wrapper = shallow(
        <Accordion {...props} />
      );
      instance = wrapper.instance();
    })

    it('should render AccordionPanel components with right props', () => {
      expect(wrapper.find(AccordionPanel)).toHaveLength(props.panels.length);
      expect(wrapper.find(AccordionPanel).first().props().content.content).toEqual(props.panels[0].content)
      expect(wrapper.find(AccordionPanel).first().props().index).toEqual(0)
    })

    it.skip('should call component handleTitleClick', () => {
      jest.spyOn(instance, 'handleTitleClick')
      const event = 'event';
      const titleProps = {
        index: 2,
      }
      wrapper.find(AccordionPanel).first().props().onTitleClick(event, titleProps)
      instance.forceUpdate()
      expect(instance.handleTitleClick).toHaveBeenCalledWith(event, titleProps)
    })
  })
});
