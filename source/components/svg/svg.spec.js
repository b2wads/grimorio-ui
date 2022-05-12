import '../../../internals/test/helper';

import Svg from './index';

describe('SVG component', () => {
  it('render correctly', () => {
    const wrapper = shallow(
      <Svg width={150} height={50} src="mock" />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
