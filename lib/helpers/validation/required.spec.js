"use strict";

require("../../../internals/test/helper");

var _required = _interopRequireDefault(require("./required"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Validation#Required} */
describe('Validation Required', function () {
  it('should have parameters VALUE as String and MESSAGE as String', function () {
    expect((0, _required.default)('test', 'error message')).toEqual({
      validationState: 'success',
      errorMessage: undefined
    });
  });
  it('should have parameters VALUE as Number', function () {
    expect((0, _required.default)(1234, 'error message')).toEqual({
      validationState: 'success',
      errorMessage: undefined
    });
  });
  it('should have parameters VALUE as Object', function () {
    expect((0, _required.default)({
      name: 'test'
    }, 'error message')).toEqual({
      validationState: 'success',
      errorMessage: undefined
    });
  });
  it('should have parameters VALUE as ARRAY', function () {
    expect((0, _required.default)(['test'], 'error message')).toEqual({
      validationState: 'success',
      errorMessage: undefined
    });
  });
  it('should have parameter VALUE different of empty', function () {
    expect((0, _required.default)('', 'error message')).toEqual({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });
  it('should have parameter VALUE different of empty if OBJECT type', function () {
    expect((0, _required.default)({}, 'error message')).toEqual({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });
  it('should have parameter VALUE with length bigger than 0 if ARRAY type', function () {
    expect((0, _required.default)([], 'error message')).toEqual({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });
  it('should have parameter MESSAGE', function () {
    expect((0, _required.default)('')).toEqual({
      validationState: 'error',
      errorMessage: undefined
    });
  });
  it('should have parameters', function () {
    expect((0, _required.default)()).toEqual({
      validationState: 'error',
      errorMessage: undefined
    });
  });
});