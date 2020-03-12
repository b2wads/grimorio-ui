import '../../../internals/test/helper';

import Error from './error-component';
import Button from '../button';

/** @test {Error} */
describe('Error component', () => {
  let wrapper
  const emptyProps = {
    hasButton: undefined,
    errorBtnText: undefined,
    errorMessage: undefined,
    onErrorClick: undefined
  }
  beforeAll(() => {
    wrapper = shallow(
      <Error />
    );
  })

  it('render correctly with default values', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('render with button and default button value', () => {
    wrapper.setProps({ ...emptyProps, hasButton: true })
    expect(wrapper.find(Button).props().children).toEqual('Tentar de novo')
  });

  it('render with button and custom button value', () => {
    const errorBtnText = 'Texto de erro do botão'
    wrapper.setProps({ ...emptyProps, hasButton: true, errorBtnText })
    expect(wrapper.find(Button).props().children).toEqual(errorBtnText)
  });

  it('render with custom error message', () => {
    const errorMessage = 'Mensagem de erro'
    wrapper.setProps({ ...emptyProps, errorMessage })
    expect(wrapper.find('p').text()).toEqual(errorMessage)
  });

  it('call function onErrorClick when click button error', () => {
    const onErrorClick = jest.fn()
    const props = { ...emptyProps, hasButton: true, onErrorClick}
    jest.spyOn(props, 'onErrorClick')
    wrapper.setProps(props)
    wrapper.find(Button).props().onClick()
    expect(props.onErrorClick).toHaveBeenCalled()
  });
});
