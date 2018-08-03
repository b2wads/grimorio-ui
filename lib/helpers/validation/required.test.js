"use strict";

var _chai = require("chai");

var _required = _interopRequireDefault(require("./required"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Validation#Required} */
describe('Validation Required', function () {
  it('should have parameters VALUE as String and MESSAGE as String', function () {
    (0, _chai.expect)((0, _required.default)('test', 'error message')).to.deep.equal({
      validationState: 'success',
      errorMessage: undefined
    });
  });
  it('should have parameters VALUE as Number', function () {
    (0, _chai.expect)((0, _required.default)(1234, 'error message')).to.deep.equal({
      validationState: 'success',
      errorMessage: undefined
    });
  });
  it('should have parameters VALUE as Object', function () {
    (0, _chai.expect)((0, _required.default)({
      name: 'test'
    }, 'error message')).to.deep.equal({
      validationState: 'success',
      errorMessage: undefined
    });
  });
  it('should have parameters VALUE as ARRAY', function () {
    (0, _chai.expect)((0, _required.default)(['test'], 'error message')).to.deep.equal({
      validationState: 'success',
      errorMessage: undefined
    });
  });
  it('should have parameter VALUE different of empty', function () {
    (0, _chai.expect)((0, _required.default)('', 'error message')).to.deep.equal({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });
  it('should have parameter VALUE different of empty if OBJECT type', function () {
    (0, _chai.expect)((0, _required.default)({}, 'error message')).to.deep.equal({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });
  it('should have parameter VALUE with length bigger than 0 if ARRAY type', function () {
    (0, _chai.expect)((0, _required.default)([], 'error message')).to.deep.equal({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });
  it('should have parameter MESSAGE', function () {
    (0, _chai.expect)((0, _required.default)('')).to.deep.equal({
      validationState: 'error',
      errorMessage: undefined
    });
  });
  it('should have parameters', function () {
    (0, _chai.expect)((0, _required.default)()).to.deep.equal({
      validationState: 'error',
      errorMessage: undefined
    });
  });
});