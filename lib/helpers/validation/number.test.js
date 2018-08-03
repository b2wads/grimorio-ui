"use strict";

var _chai = require("chai");

var _number = _interopRequireDefault(require("./number"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Validation#Number} */
describe('Validation Number', function () {
  it('should have parameters ITEM as String and MESSAGE as String', function () {
    (0, _chai.expect)((0, _number.default)('1212', 'error message')).to.deep.equal({
      validationState: 'success',
      errorMessage: undefined
    });
  });
  it('should have parameters ITEM, MESSAGE and CHILD if an ARRAY of Objects', function () {
    (0, _chai.expect)((0, _number.default)([{
      id: '1221'
    }], 'error message', 'id')).to.deep.equal({
      validationState: 'success',
      errorMessage: undefined
    });
  });
  it('should have parameter CHILD if an ARRAY of Objects', function () {
    (0, _chai.expect)((0, _number.default)([{
      id: '1221'
    }], 'error message')).to.deep.equal({
      validationState: undefined,
      errorMessage: undefined
    });
  });
  it('should have parameter ITEM with an ARRAY of Objects', function () {
    (0, _chai.expect)((0, _number.default)([], 'error message')).to.deep.equal({
      validationState: undefined,
      errorMessage: undefined
    });
  });
  it('should have parameters ITEM as Number and MESSAGE as String', function () {
    (0, _chai.expect)((0, _number.default)(1212, 'error message')).to.deep.equal({
      validationState: 'success',
      errorMessage: undefined
    });
  });
  it('should have parameters ITEM as Number, String or Array', function () {
    (0, _chai.expect)((0, _number.default)({
      id: '2121'
    }, 'error message')).to.deep.equal({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });
  it('should have parameters', function () {
    (0, _chai.expect)((0, _number.default)()).to.deep.equal({
      validationState: undefined,
      errorMessage: undefined
    });
  });
});