import '../../../internals/test/helper';

import Button from './index';
import Loader from '../loader';
import Icon from '../icon';

/** @test {Button} */
describe('Button component', () => {
  const props = {
    disabled: false,
    onClick: jest.fn(),
    loading: false,
  }

  it('when has NO children, return null', () => {
    const wrapper = shallow(
      <Button />
    );
    expect(wrapper.html()).toEqual(null);
  });

  it('render button with default props when HAS children', () => {
    const textButton = 'texto do botão'
    const wrapper = shallow(
      <Button>{textButton}</Button>
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });

  describe('on loading', () => {
    let wrapper
    beforeAll(() => {
      const newProps = { ...props, loading: true }
      wrapper = shallow(
        <Button {...newProps}>texto</Button>
      );
    })
    it('disabled if loading is true', () => {
      expect(wrapper.find('button').prop('disabled')).toEqual(true);
    });

    it('should show Loader component', () => {
      expect(wrapper.find(Loader).length).toEqual(1);
    });

    it('Loader should have style default (secondary)', () => {
      expect(wrapper.find(Loader).prop('style')).toEqual('secondary');
    })

    it('Loader should have style default when modifier === outline or modifier === outline-light', () => {
      wrapper.setProps({modifier: 'outline'})
      expect(wrapper.find(Loader).prop('style')).toEqual('default');
      wrapper.setProps({modifier: 'outline-light'})
      expect(wrapper.find(Loader).prop('style')).toEqual('default');
    })

    it('Loader should have style default when color === clean', () => {
      wrapper.setProps({color: 'clean', modifier: null})
      expect(wrapper.find(Loader).prop('style')).toEqual('default');
    })

    it('Loader should have style default when color === transparent', () => {
      wrapper.setProps({color: 'transparent', modifier: null})
      expect(wrapper.find(Loader).prop('style')).toEqual('default');
    })
  })

  it('should render iconLeft', () => {
    const iconLeftName = 'meu icone esquerdo'
    const newProps = { ...props, iconLeft: iconLeftName }
    const wrapper = shallow(
      <Button {...newProps}>texto</Button>
    );
    expect(wrapper.find(Icon).prop('name')).toEqual(iconLeftName);
  })

  it('should render iconRight', () => {
    const iconRightName = 'meu icone direito'
    const newProps = { ...props, iconRight: iconRightName }
    const wrapper = shallow(
      <Button {...newProps}>texto</Button>
    );
    expect(wrapper.find(Icon).prop('name')).toEqual(iconRightName);
  })

  it('disabled if disabled is true', () => {
    const newProps = { ...props, disabled: true }
    const wrapper = shallow(
      <Button {...newProps}>texto</Button>
    );
    expect(wrapper.find('button').prop('disabled')).toEqual(true);
  });

  it('onClick button call props onClick', () => {
    jest.spyOn(props, 'onClick')
    const wrapper = shallow(
      <Button {...props}>texto</Button>
    );
    wrapper.find('button').simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
});
