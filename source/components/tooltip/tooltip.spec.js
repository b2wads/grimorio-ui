import '../../../internals/test/helper';

import Tooltip from './tooltip-component';
import Icon from '../icon';

/** @test {Tooltip} */
describe('Tooltip component', () => {

  let wrapper
  const emptyProps = {
    message: undefined,
    children: undefined,
    icon: undefined,
    size: undefined,
  }

  beforeAll(() => {
    wrapper = shallow(
      <Tooltip />
    );
  })

  it('should render with default props', () => {
    wrapper.setProps({ message: 'hello'})
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render with children value', () => {
    const childrenValue = 'texto do tooltip'
    wrapper.setProps({ ...emptyProps , children: childrenValue})
    expect(wrapper.find('span').first().text()).toEqual(childrenValue);
  });

  it('should render icon with name and size', () => {
    const icon = 'iconEye'
    const size = 5
    wrapper.setProps({ ...emptyProps, icon, size })
    expect(wrapper.find(Icon).props().name).toEqual(icon);
    expect(wrapper.find(Icon).props().size).toEqual(size);
  });
});
