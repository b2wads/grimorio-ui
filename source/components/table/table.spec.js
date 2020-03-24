import '../../../internals/test/helper';

import Button from '../button';
import Table from './table-component';

const simpleData = [
  {
    name: 'Teste',
    dob: { age: '20' },
  },
];

const schema = {
  name: {
    title: 'Nome',
    className: null,
    headClassName: null,
    width: '100px',
    className: null,
    render: info => info.name,
    renderHead: null,
  },
  oi: {
    title: 'Diga oi',
    className: null,
    headClassName: null,
    renderHead: () => <Button onClick={() => alert('Olá!')}>Diga oi para todos!</Button>,
    render: info => <Button onClick={() => alert(`Tenho ${info.dob.age} anos!`)}>Adivinhe minha idade ;)</Button>,
  },
};

/** @test {Table} */
describe('Table component', () => {
/** @test {Table#render} */
  describe('#render', () => {
    it('with not found message', () => {
      const table = <Table schema={schema} data={[]} />
      const wrapper = shallow(table);
      const notFoundMessage = table.props.notFoundMessage;
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('td').text()).toMatch(notFoundMessage);
    });

    it('with custom height', () => { 
      const expectedHeight = '80px';
      const table = <Table schema={schema} data={[]} rowHeight={expectedHeight} />
      const wrapper = shallow(table);
      expect(wrapper.find('tr').first().html()).toMatch(expectedHeight);
      expect(table.props.rowHeight).toMatch(expectedHeight)
    });

    describe('with data', () => {
      let wrapper;

      beforeAll(() => { 
        wrapper = shallow(
          <Table schema={schema} data={simpleData} />
        );
      });

      it('with one row', () => {
        const expectedOutput = simpleData[0].name;
        expect(wrapper.length).toEqual(1);
        expect(wrapper.find('td').first().text()).toMatch(expectedOutput);
      });

      it('with a clickable button on header', () => { 
        const expectedOutput = 'Olá!';
        window.alert = jest.fn();
        wrapper.find('th').find(Button).props().onClick();
        expect(window.alert).toBeCalledWith(expectedOutput);
      });

      it('with a clickable button on body', () => {
        const age = simpleData[0].dob.age;
        const expectedOutput = `Tenho ${age} anos!`;
        window.alert = jest.fn();
        wrapper.find('td').find(Button).props().onClick();
        expect(window.alert).toBeCalledWith(expectedOutput);
      });
    });
  });
});
