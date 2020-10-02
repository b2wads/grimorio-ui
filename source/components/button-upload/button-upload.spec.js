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

    expect(wrapper.find('.wrapcomp').name()).toEqual('Button');
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('renders as div', () => {
    const newProps = { ...props, as: 'div' };
    const wrapper = shallow(
      <ButttonUpload {...newProps} />
    );
    expect(wrapper.find('.wrapcomp').name()).toEqual('div');
    expect(wrapper.debug()).toMatchSnapshot();
  })

  it('upload is disabled', () => {
    const newProps = { ...props, disabled: true };
    const wrapper = shallow(
      <ButttonUpload {...newProps} />
    );
    expect(wrapper.find('.wrapcomp').prop('disabled')).toEqual(true);
    expect(wrapper.find('.file').prop('disabled')).toEqual(true);
  });
});
