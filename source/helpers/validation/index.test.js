import { expect } from 'chai';
import { fieldsValidation } from './index';

const methods = {
  onChangeField: () => {},
  onChangeValidationState: () => {}
};

const validation = [{
  rule: 'required',
  message: 'Campo obrigatório'
}];

const schema = [{
  _type: 'group',
  id: "3",
  columns: {},
  title: 'Linha',
  children: [
    {
      _type: 'field',
      id: "31",
      columns: {},
      label: 'Incluindo',
      component: 'suggestionsWithTags',
      placeholder: 'Adicione 1 número por vez',
      options: false,
      validation: [],
      key: 'includedSubdepartments'
    },
    {
      _type: 'field',
      id: "32",
      columns: {},
      label: 'Excluindo',
      component: 'suggestionsWithTags',
      placeholder: 'Adicione 1 número por vez',
      options: false,
      validation: [],
      key: 'excludedSubdepartments'
    }
  ]
}];

/** @test {Validation#fieldsValidation} */
describe('Validation Fields Validation', () => {
  it('should have parameters VALUE as String, VALIDATION as Object, SCHEMA as Object and METHODS as Object', () => {
    expect(fieldsValidation('test', validation, schema, methods)).to.deep.equal({
      validationState: 'success',
      errorMessage: undefined
    });
  });
});
