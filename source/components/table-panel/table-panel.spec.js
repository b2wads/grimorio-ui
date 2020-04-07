import '../../../internals/test/helper';

import Button from '../button';
import TablePanel from './table-panel-component';

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

/** @test {TablePanel} */
describe('TablePanel component', () => {
  /** @test {TablePanel#render} */
  describe('#render', () => {
    it('when renders correctly', () => {
      const wrapper = shallow(<TablePanel schema={schema} data={simpleData} />);
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('with not found message', () => {
      const tablePanel = <TablePanel schema={schema} data={[]} />
      const wrapper = shallow(tablePanel);
      const notFoundMessage = 'Nenhum resultado encontrado :(';
      expect(wrapper.render().find('td').text()).toMatch(notFoundMessage);
    });

    describe('with data', () =>{
      let wrapper;

      beforeAll(() => {
        wrapper = shallow(
          <TablePanel schema={schema} data={simpleData} />
        ).render();
      });

      it('with panel class', () => {
        const masterDivClass = wrapper.find('.wrap')[0].attribs.class;
        expect(masterDivClass).toMatch(/panel/);
      });

      it('with one row', () => {
        const expectedOutput = simpleData[0].name;
        expect(wrapper.find('td').first().text()).toMatch(expectedOutput);
        expect(wrapper.length).toEqual(1);
      });
    })
  });
});
