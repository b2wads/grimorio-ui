"use strict";

require("../../../internals/test/helper");

var _index = require("./index");

var methods = {
  onChangeField: function onChangeField() {},
  onChangeValidationState: function onChangeValidationState() {}
};
var validation = [{
  rule: 'required',
  message: 'Campo obrigatório'
}];
var schema = [{
  _type: 'group',
  id: "3",
  columns: {},
  title: 'Linha',
  children: [{
    _type: 'field',
    id: "31",
    columns: {},
    label: 'Incluindo',
    component: 'suggestionsWithTags',
    placeholder: 'Adicione 1 número por vez',
    options: false,
    validation: [],
    key: 'includedSubdepartments'
  }, {
    _type: 'field',
    id: "32",
    columns: {},
    label: 'Excluindo',
    component: 'suggestionsWithTags',
    placeholder: 'Adicione 1 número por vez',
    options: false,
    validation: [],
    key: 'excludedSubdepartments'
  }]
}];
/** @test {Validation#fieldsValidation} */

describe('Validation Fields Validation', function () {
  it('should have parameters VALUE as String, VALIDATION as Object, SCHEMA as Object and METHODS as Object', function () {
    expect((0, _index.fieldsValidation)('test', validation, schema, methods)).toEqual({
      validationState: 'success',
      errorMessage: undefined
    });
  });
});