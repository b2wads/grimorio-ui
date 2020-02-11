import '../../../internals/test/helper';

import Icon from './icon-component';

/** @test {Icon} */
describe('Icon component', () => {
  let wrapper
  const props = {
    name: 'meuÍcone'
  }

  beforeAll(() => {
    wrapper = shallow(
      <Icon {...props} />
    );
  })

  it('icon text is equal name props', () => {
    expect(wrapper.find('i').text()).toEqual(props.name);
  });

  it('should have font-size when props size is defined', () => {
    const size = 31
    wrapper.setProps({ size })
    expect(wrapper.find('i').props().style.fontSize).toEqual(`${size}px`);
  });
  
});
