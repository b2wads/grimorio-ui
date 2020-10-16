jest.mock('react', () => {
  const originReact = jest.requireActual('react');
  return {
    ...originReact,
    createRef: () => ({
      current: {
        addEventListener: jest.fn()
      }
    }),
  };
});

import '../../../internals/test/helper';

import ButttonUpload from './button-upload-component';

const props = {
  disabled: false,
  onChange: jest.fn(),
  loading: false,
};


describe('Button Upload component', () => {

  it('renders correctly', () => {
    const wrapper = shallow(
      <ButttonUpload {...props} />
    );

    expect(wrapper.find('.button').name()).toEqual('Button');
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('renders with drop area', () => {
    const newProps = { ...props, withDrop: true };
    const wrapper = shallow(
      <ButttonUpload {...newProps} />
    );
    expect(wrapper.find('.dropArea').length).toEqual(1);
    expect(wrapper.debug()).toMatchSnapshot();
  })

  it('upload is disabled', () => {
    const newProps = { ...props, disabled: true };
    const wrapper = shallow(
      <ButttonUpload {...newProps} />
    );
    expect(wrapper.find('.button').prop('disabled')).toEqual(true);
    expect(wrapper.find('.file').prop('disabled')).toEqual(true);
  });
});
