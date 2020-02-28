import '../../../internals/test/helper';
import React from 'react';

import InfoCard from './info-card-component';
import Error from '../error';

/** @test {InfoCard} */
describe('InfoCard component', () => {
  /** @test {InfoCard#render} */

  const emptyProps = {
    error: undefined,
    type: undefined,
    tagline: undefined,
    value: undefined,
    onErrorClick: undefined,
    errorMessage: undefined,
    errorBtnText: undefined,
  }

  let wrapper

  beforeAll(() => {
    wrapper = shallow(
      <InfoCard {...emptyProps} />
    );
  })

  describe('when error card', () => {
    const props = {
      onErrorClick: jest.fn()
    }
    const spy = jest.spyOn(props, 'onErrorClick')
    
    it('should render correct', () => {
      wrapper.setProps({
        ...emptyProps,
        error: true,
        onErrorClick: props.onErrorClick,
        errorMessage: 'mensagem de erro',
        errorBtnText: 'botão do erro'
      })
      expect(wrapper.html()).toMatchSnapshot();
    })

    it('should call onErrorClick when click on button error', () => {

      wrapper.find(Error).props().onErrorClick()
      expect(spy).toHaveBeenCalled();
    })
  })

    it('should render card type money', () => {
      wrapper.setProps({ ...emptyProps, type: 'money', value: 20 })
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('should render card with tagline', () => {
      wrapper.setProps({ ...emptyProps, tagline: 'fevereiro' })
      expect(wrapper.html()).toMatchSnapshot();
    });
});
