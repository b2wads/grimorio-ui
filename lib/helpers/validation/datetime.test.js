"use strict";

var _chai = require("chai");

var _moment = _interopRequireDefault(require("moment"));

var _datetime = require("./datetime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Validation#Datetime} */
describe('Validation Datetime', function () {
  it('should have parameters VALUE as String and MESSAGE as String', function () {
    (0, _chai.expect)((0, _datetime.datetimeValidation)('01/01/2017 10:00', 'error message')).to.deep.equal({
      validationState: 'success',
      errorMessage: undefined
    });
  });
  it('should have parameter VALUE as Datetime in PT-BR format', function () {
    (0, _chai.expect)((0, _datetime.datetimeValidation)('01/01/2017', 'error message')).to.deep.equal({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });
  it('should have parameters VALUE and MESSAGE', function () {
    (0, _chai.expect)((0, _datetime.datetimeValidation)()).to.deep.equal({
      validationState: 'error',
      errorMessage: undefined
    });
  });
  it('should have parameter MESSAGE', function () {
    (0, _chai.expect)((0, _datetime.datetimeValidation)('01/01/2017')).to.deep.equal({
      validationState: 'error',
      errorMessage: undefined
    });
  });
  it('should have parameter type VALUE valid', function () {
    (0, _chai.expect)((0, _datetime.datetimeValidation)(null, 'error message')).to.deep.equal({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });
});
/** @test {Validation#afterToday} */

describe('Validation afterToday', function () {
  it('should have parameters VALUE as String and MESSAGE as String', function () {
    var dateNow = (0, _moment.default)().add(1, 'h');
    (0, _chai.expect)((0, _datetime.afterToday)(dateNow, {
      message: 'error message'
    })).to.deep.equal({
      validationState: 'success',
      errorMessage: undefined
    });
  });
  it('should have parameter VALUE as afterToday in PT-BR format', function () {
    (0, _chai.expect)((0, _datetime.afterToday)('31/01/2017', {
      message: 'error message'
    })).to.deep.equal({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });
  it('should have parameters VALUE and MESSAGE', function () {
    (0, _chai.expect)((0, _datetime.afterToday)()).to.deep.equal({
      validationState: 'error',
      errorMessage: 'value is undefined'
    });
  });
  it('should have parameter ItemValidation.MESSAGE', function () {
    (0, _chai.expect)((0, _datetime.afterToday)('01/01/2017')).to.deep.equal({
      validationState: 'error',
      errorMessage: 'validationItem is undefined'
    });
  });
  it('should have parameter type VALUE valid', function () {
    (0, _chai.expect)((0, _datetime.afterToday)(null, '')).to.deep.equal({
      validationState: 'error',
      errorMessage: 'value is undefined'
    });
  });
});