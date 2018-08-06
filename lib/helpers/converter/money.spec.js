"use strict";

require("../../../internals/test/helper");

var _money = require("./money");

/** @test {Converter#convertToBRL} */
describe('Converter - convertToBRL', function () {
  it('should have invalid parameter', function () {
    expect((0, _money.convertToBRL)()).toEqual(false);
    expect((0, _money.convertToBRL)([])).toEqual(false);
    expect((0, _money.convertToBRL)({})).toEqual(false);
    expect((0, _money.convertToBRL)(null)).toEqual(false);
    expect((0, _money.convertToBRL)(undefined)).toEqual(false);
  });
  it('should have parameters VALUE as String', function () {
    expect((0, _money.convertToBRL)('')).toEqual('0,00');
    expect((0, _money.convertToBRL)('10009.89')).toEqual('10.009,89');
  });
  it('should have parameters VALUE as Number', function () {
    expect((0, _money.convertToBRL)(100)).toEqual('100,00');
    expect((0, _money.convertToBRL)(10009.89)).toEqual('10.009,89');
  });
});