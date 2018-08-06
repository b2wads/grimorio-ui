"use strict";

require("../../../internals/test/helper");

var _number = _interopRequireDefault(require("./number"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Validation#Number} */
describe('Validation Number', function () {
  it('should have parameters ITEM as String and MESSAGE as String', function () {
    expect((0, _number.default)('1212', 'error message')).toEqual({
      validationState: 'success',
      errorMessage: undefined
    });
  });
  it('should have parameters ITEM as Number and MESSAGE as String', function () {
    expect((0, _number.default)(1212, 'error message')).toEqual({
      validationState: 'success',
      errorMessage: undefined
    });
  });
  it('should have parameters', function () {
    expect((0, _number.default)()).toEqual({
      validationState: undefined,
      errorMessage: undefined
    });
  });
});