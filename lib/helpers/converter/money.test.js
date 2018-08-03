"use strict";

var _chai = require("chai");

var _money = require("./money");

/** @test {Converter#convertToBRL} */
describe('Converter - convertToBRL', function () {
  it('should have invalid parameter', function () {
    (0, _chai.expect)((0, _money.convertToBRL)()).to.equal(false);
    (0, _chai.expect)((0, _money.convertToBRL)([])).to.equal(false);
    (0, _chai.expect)((0, _money.convertToBRL)({})).to.equal(false);
    (0, _chai.expect)((0, _money.convertToBRL)(null)).to.equal(false);
    (0, _chai.expect)((0, _money.convertToBRL)(undefined)).to.equal(false);
  });
  it('should have parameters VALUE as String', function () {
    (0, _chai.expect)((0, _money.convertToBRL)('')).to.equal('0,00');
    (0, _chai.expect)((0, _money.convertToBRL)('10009.89')).to.equal('10.009,89');
  });
  it('should have parameters VALUE as Number', function () {
    (0, _chai.expect)((0, _money.convertToBRL)(100)).to.equal('100,00');
    (0, _chai.expect)((0, _money.convertToBRL)(10009.89)).to.equal('10.009,89');
  });
});