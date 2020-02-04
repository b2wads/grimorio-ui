import '../../../internals/test/helper';

import Tag from './tag-component';
import Icon from '../icon';

/** @test {Tag} */
describe('Tag component', () => {
  let wrapper

  const emptyProps = {
    children: null,
  }

  beforeAll(() => {
    wrapper = shallow(
      <Tag />
    );
  })

  it('should render with default props', () => {
    wrapper.setProps({ message: 'hello'})
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render with children value', () => {
    const childrenValue = 'texto da tag'
    wrapper.setProps({ ...emptyProps , children: childrenValue})
    expect(wrapper.find('div').text()).toMatch(childrenValue);
  })

  it('should show icon to close when fixed props is false', () => {
    wrapper.setProps({ ...emptyProps , fixed: false})
    expect(wrapper.find(Icon)).toHaveLength(1);
  })

  it('should call onClose props when clicks on icon', () => {
    const onClose = jest.fn()
    const props = { ...emptyProps , fixed: false, onClose }
    jest.spyOn(props, 'onClose')
    wrapper.setProps(props)
    wrapper.find(Icon).props().onClick();
    expect(props.onClose).toHaveBeenCalled()
  })
});
