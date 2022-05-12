import '../../../internals/test/helper';

import Accordion from './index';
import AccordionContent from './elements/accordion-content';
import AccordionPanel from './elements/accordion-panel';
import AccordionTitle from './elements/accordion-title';

import { uniqueId } from '../../helpers';
jest.mock('../../helpers')

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
    uniqueId.mockImplementation(() => 'my-unique-key')

    wrapper = shallow(
      <Accordion {...emptyProps} />
    );
  })

  describe('should render', () => {
    it('with children', () => {
      wrapper.setProps({ ...emptyProps, children: <li>teste com filho</li> })

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('without children', () => {
      wrapper.setProps({ ...emptyProps, panels })

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('with different html element', () => {
      wrapper.setProps({ ...emptyProps, children: 'oi', as: 'div' })
      expect(toJson(wrapper)).toMatchSnapshot();
    })
  });

  describe('call handleTitleClick', () => {
    const titleProps = { index: 1 }

    it('should call handleTitleClick and add active index to list', () => {
      wrapper.setProps({ ...emptyProps, exclusive: false, panels })

      expect(wrapper.find(AccordionPanel).at(1).props().active).toEqual(false);

      wrapper.find(AccordionPanel).at(0).props().onTitleClick('', titleProps)
      expect(wrapper.find(AccordionPanel).at(0).props().active).toEqual(false);

      wrapper.update();
      expect(wrapper.find(AccordionPanel).at(1).props().active).toEqual(true);
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
      const titleProps = { index: 1 }
      wrapper.setProps({ ...emptyProps, exclusive: true, panels })

      expect(wrapper.find(AccordionPanel).at(1).props().active).toEqual(false);
      wrapper.find(AccordionPanel).at(1).props().onTitleClick('', titleProps)

      wrapper.update();
      expect(wrapper.find(AccordionPanel).at(1).props().active).toEqual(true);
    })

    it('when exclusive props is true and index is different of activeIndex', () => {
      const titleProps = { index: 1 }
      wrapper.setProps({ ...emptyProps, exclusive: true, panels })

      expect(wrapper.find(AccordionPanel).at(0).props().active).toEqual(false);
      wrapper.find(AccordionPanel).at(0).props().onTitleClick('', titleProps)

      wrapper.update();
      expect(wrapper.find(AccordionPanel).at(0).props().active).toEqual(false);
    })

    it('when is NOT exclusive props and activeIndex contains index', () => {
      wrapper.setProps({ ...emptyProps, exclusive: false, panels })

      wrapper.find(AccordionPanel).at(0).props().onTitleClick('', { index: 0 });
      wrapper.update();
      wrapper.find(AccordionPanel).at(1).props().onTitleClick('', { index: 1 });

      wrapper.update();
      expect(wrapper.find(AccordionPanel).at(0).props().active).toEqual(true);
      expect(wrapper.find(AccordionPanel).at(1).props().active).toEqual(true);

      wrapper.find(AccordionPanel).at(0).props().onTitleClick('', { index: 0 })

      wrapper.update();
      expect(wrapper.find(AccordionPanel).at(0).props().active).toEqual(false);
      expect(wrapper.find(AccordionPanel).at(1).props().active).toEqual(true);
    })

    it('when is NOT exclusive props and activeIndex DONT contains index', () => {
      const newPanel = { icon: 'search', title: 'Insights', content: 'olhe aqui' }
      wrapper.setProps({
        ...emptyProps,
        exclusive: false,
        panels: [...panels, newPanel]
      })

      wrapper.find(AccordionPanel).at(0).props().onTitleClick('', { index: 0 });
      wrapper.update();
      wrapper.find(AccordionPanel).at(1).props().onTitleClick('', { index: 1 });

      wrapper.update();
      expect(wrapper.find(AccordionPanel).at(0).props().active).toEqual(true);
      expect(wrapper.find(AccordionPanel).at(1).props().active).toEqual(true);

      wrapper.find(AccordionPanel).at(2).props().onTitleClick('', { index: 2 })

      wrapper.update();
      expect(wrapper.find(AccordionPanel).at(2).props().active).toEqual(true);
    })
  })

  describe('call isIndexActive', () => {

    it('when is exclusive props and activeIndex is equal index', () => {
      const titleProps = { index: 1 }
      wrapper.setProps({ ...emptyProps, exclusive: true, panels })

      expect(wrapper.find(AccordionPanel).at(1).props().active).toEqual(false);
      wrapper.find(AccordionPanel).at(1).props().onTitleClick('', titleProps)

      wrapper.update();
      expect(wrapper.find(AccordionPanel).at(1).props().active).toEqual(true);
    })

    it('when is exclusive props and activeIndex is different of index', () => {
      const titleProps = { index: 3 }
      wrapper.setProps({ ...emptyProps, exclusive: true, panels })

      expect(wrapper.find(AccordionPanel).at(1).props().active).toEqual(false);
      wrapper.find(AccordionPanel).at(1).props().onTitleClick('', titleProps)

      wrapper.update();
      expect(wrapper.find(AccordionPanel).at(1).props().active).toEqual(false);
    })

    it('when is not exclusive and activeIndex includes index', () => {
      wrapper.setProps({ ...emptyProps, exclusive: false, panels })

      wrapper.find(AccordionPanel).at(0).props().onTitleClick('', { index: 0 });
      wrapper.update();
      wrapper.find(AccordionPanel).at(1).props().onTitleClick('', { index: 1 });

      wrapper.update();
      expect(wrapper.find(AccordionPanel).at(0).props().active).toEqual(true);
      expect(wrapper.find(AccordionPanel).at(1).props().active).toEqual(true);

      wrapper.find(AccordionPanel).at(0).props().onTitleClick('', { index: 0 })

      wrapper.update();
      expect(wrapper.find(AccordionPanel).at(0).props().active).toEqual(false);
      expect(wrapper.find(AccordionPanel).at(1).props().active).toEqual(true);
    })

    it('when is not exclusive and activeIndex DONT includes index', () => {
      const newPanel = { icon: 'search', title: 'Insights', content: 'olhe aqui' }
      wrapper.setProps({
        ...emptyProps,
        exclusive: false,
        panels: [...panels, newPanel]
      })

      wrapper.find(AccordionPanel).at(0).props().onTitleClick('', { index: 0 });
      wrapper.update();
      wrapper.find(AccordionPanel).at(1).props().onTitleClick('', { index: 1 });

      wrapper.update();
      expect(wrapper.find(AccordionPanel).at(0).props().active).toEqual(true);
      expect(wrapper.find(AccordionPanel).at(1).props().active).toEqual(true);

      wrapper.find(AccordionPanel).at(2).props().onTitleClick('', { index: 2 })

      wrapper.update();
      expect(wrapper.find(AccordionPanel).at(0).props().active).toEqual(true);
      expect(wrapper.find(AccordionPanel).at(1).props().active).toEqual(true);
      expect(wrapper.find(AccordionPanel).at(2).props().active).toEqual(true);
    })
  })
});


describe('Accordion element Content', () => {
  const emptyProps = {
    children: undefined,
    content: undefined,
  }

  let wrapper

  beforeAll(() => {
    wrapper = shallow(
      <AccordionContent {...emptyProps} />
    );
  })

  it('should render children', () => {
    const children = <span className="children-teste">teste</span>
    wrapper.setProps({ ...emptyProps, children })
    expect(wrapper.find('.children-teste')).toHaveLength(1)
  })

  it('should render content', () => {
    const content = <span className="content-teste">teste</span>
    wrapper.setProps({ ...emptyProps, content })
    expect(wrapper.find('.content-teste')).toHaveLength(1)
  })
})

describe('Accordion element Panel', () => {
  const emptyProps = {
    children: undefined,
    onTitleClick: undefined,
    content: {}
  }

  let wrapper

  beforeAll(() => {
    wrapper = shallow(
      <AccordionPanel {...emptyProps} />
    );
  })

  it('should render children', () => {
    const children = <span className="children-teste">teste</span>
    wrapper.setProps({ ...emptyProps, children })
    expect(wrapper.find('.children-teste')).toHaveLength(1)
  })

  it('should render AccordionTitle and should call function onTitleClick onClick', () => {
    const props = {
      onTitleClick: jest.fn()
    }
    wrapper.setProps({ ...emptyProps, onTitleClick: props.onTitleClick })
    wrapper.find(AccordionTitle).props().onClick()
    expect(props.onTitleClick).toHaveBeenCalled()
  })
})

describe('Accordion element Title', () => {
  const emptyProps = {
    children: undefined,
    onClick: undefined,
    content: undefined
  }

  let wrapper

  beforeAll(() => {
    wrapper = shallow(
      <AccordionTitle {...emptyProps} />
    );
  })

  it('should render children', () => {
    const children = <span className="children-teste">teste</span>
    wrapper.setProps({ ...emptyProps, children })
    expect(wrapper.find('.children-teste')).toHaveLength(1)
  })

  it('should render content', () => {
    const content = <span className="content-teste">teste</span>
    wrapper.setProps({ ...emptyProps, content })
    expect(wrapper.find('.content-teste')).toHaveLength(1)
  })

  it('should call onClick function', () => {
    const props = { onClick: jest.fn() }
    wrapper.setProps({ ...emptyProps, onClick: props.onClick })
    wrapper.find('.title').simulate('click')
    expect(props.onClick).toHaveBeenCalled()
  })
})
