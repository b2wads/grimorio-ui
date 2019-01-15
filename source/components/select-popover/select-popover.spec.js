import '../../../internals/test/helper';

import SelectPopover from './select-popover-component';

/** @test {SelectPopover} */
describe('SelectPopover component', () => {
/** @test {SelectPopover#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const options = [
        {
          key: 'likes',
          label: 'Favoritos',
        },
        {
          key: 'store',
          label: 'Loja',
        },
      ];

      const wrapper = shallow(
        <SelectPopover
          component={<button>Button!</button>}
          options={options}
          title="Test title"
        />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
