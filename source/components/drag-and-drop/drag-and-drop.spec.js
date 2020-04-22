import '../../../internals/test/helper';

import DragAndDrop from './drag-and-drop-component';

describe('DragAndDrop component', () => {

  describe('#render', () => {
    it('render correctly', () => {
      const items = [
        { id: 'task-1', content: 'Teste 1' },
        { id: 'task-2', content: 'Teste 2', shouldClose: true },
        { id: 'task-3', content: 'Teste 3' },
        { id: 'task-4', content: 'Teste 4' },
      ];

      const wrapper = shallow(
        <DragAndDrop items={items} onChange={jest.fn} />
      );

      expect(wrapper.debug()).toMatchSnapshot();
    });
  });
});
