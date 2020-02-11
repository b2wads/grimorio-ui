import '../../../internals/test/helper';

import Toggle from './toggle-component';

/** @test {Toggle} */
describe('Toggle component', () => {
  let wrapper
  const props = {
    id: 123,
     checked: true,
     onChange: jest.fn(),
     value: 'value',
     disabled: true,
     className: 'minhaClasse',
  }

  beforeAll(() => {
    wrapper = shallow(
      <Toggle {...props} />
    );
  })

  it('render correctly with props values', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('onChange should call onChange props', () => {
    jest.spyOn(props, 'onChange')
    wrapper.find('input').simulate('change')
    expect(props.onChange).toHaveBeenCalled()
  })
});
