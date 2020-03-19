import '../../../internals/test/helper';

import ToggleButton from './toggle-button-component';

/** @test {ToggleButton} */
describe('ToggleButton component', () => {
  /** @test {ToggleButton#render} */
  let wrapper
  const props = {
    onClick: jest.fn(),
    value: false
  }

  beforeAll(() => {
    wrapper = shallow(
      <ToggleButton {...props} />
    );
  })

  it('render correctly with default values', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('on Click YES button should return true', () => {
    jest.spyOn(props, 'onClick')
    wrapper.find('.toggleBoolLeft').simulate('click')
    expect(props.onClick).toHaveBeenCalledWith(true)
  })

  it('on Click NO button should return false', () => {
    jest.spyOn(props, 'onClick')
    wrapper.find('.toggleBoolRight').simulate('click')
    expect(props.onClick).toHaveBeenCalledWith(false)
  })
});
