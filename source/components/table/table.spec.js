import '../../../internals/test/helper';

import Table from './table-component';

const simpledata = [
  {
    name: 'Teste',
  },
];

const schema = {
  name: {
    title: 'Nome',
    headClassName: null,
    width: '100px',
    className: null,
  },
};

/** @test {Table} */
describe('Table component', () => {
/** @test {Table#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Table schema={schema} data={simpledata} />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
