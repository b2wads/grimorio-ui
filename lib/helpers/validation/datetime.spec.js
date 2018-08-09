"use strict";

require("../../../internals/test/helper");

var _moment = _interopRequireDefault(require("moment"));

var _datetime = require("./datetime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Validation#Datetime} */
describe('Validation Datetime', function () {
  it('should have parameters VALUE as String and MESSAGE as String', function () {
    expect((0, _datetime.datetimeValidation)('01/01/2017 10:00', 'error message')).toEqual({
      validationState: 'success',
      errorMessage: undefined
    });
  });
  it('should have parameter VALUE as Datetime in PT-BR format', function () {
    expect((0, _datetime.datetimeValidation)('01/01/2017', 'error message')).toEqual({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });
  it('should have parameters VALUE and MESSAGE', function () {
    expect((0, _datetime.datetimeValidation)()).toEqual({
      validationState: 'error',
      errorMessage: undefined
    });
  });
  it('should have parameter MESSAGE', function () {
    expect((0, _datetime.datetimeValidation)('01/01/2017')).toEqual({
      validationState: 'error',
      errorMessage: undefined
    });
  });
  it('should have parameter type VALUE valid', function () {
    expect((0, _datetime.datetimeValidation)(null, 'error message')).toEqual({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });
});
/** @test {Validation#afterToday} */

describe('Validation afterToday', function () {
  it('should have parameters VALUE as String and MESSAGE as String', function () {
    var dateNow = (0, _moment.default)().add(1, 'h');
    expect((0, _datetime.afterToday)(dateNow, {
      message: 'error message'
    })).toEqual({
      validationState: 'success',
      errorMessage: undefined
    });
  });
  it('should have parameter VALUE as afterToday in PT-BR format', function () {
    expect((0, _datetime.afterToday)('31/01/2017', {
      message: 'error message'
    })).toEqual({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });
  it('should have parameters VALUE and MESSAGE', function () {
    expect((0, _datetime.afterToday)()).toEqual({
      validationState: 'error',
      errorMessage: 'value is undefined'
    });
  });
  it('should have parameter ItemValidation.MESSAGE', function () {
    expect((0, _datetime.afterToday)('01/01/2017')).toEqual({
      validationState: 'error',
      errorMessage: 'validationItem is undefined'
    });
  });
  it('should have parameter type VALUE valid', function () {
    expect((0, _datetime.afterToday)(null, '')).toEqual({
      validationState: 'error',
      errorMessage: 'value is undefined'
    });
  });
});