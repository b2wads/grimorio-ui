import '../../../internals/test/helper';

import Svg from './index';

describe('Button component', () => {
it('render correctly', () => {
    const wrapper = mount(
      <Svg width={150} height={50} src="mock" />
    );

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
