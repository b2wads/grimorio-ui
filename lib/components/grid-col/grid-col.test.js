"use strict";

require("../../../internals/test/helper");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "col": "grid-col_col_3OaVE",
  "reverse": "grid-col_reverse_2_5uy",
  "col-xs": "grid-col_col-xs_2JgFt",
  "col-xs-1": "grid-col_col-xs-1_1vIzX",
  "col-xs-offset-1": "grid-col_col-xs-offset-1_m5pFe",
  "col-xs-2": "grid-col_col-xs-2_3zE8S",
  "col-xs-offset-2": "grid-col_col-xs-offset-2_hfTFV",
  "col-xs-3": "grid-col_col-xs-3_3o6yA",
  "col-xs-offset-3": "grid-col_col-xs-offset-3_Wp_5Q",
  "col-xs-4": "grid-col_col-xs-4_1htpP",
  "col-xs-offset-4": "grid-col_col-xs-offset-4_3gx_Q",
  "col-xs-5": "grid-col_col-xs-5_21nY5",
  "col-xs-offset-5": "grid-col_col-xs-offset-5_37sxF",
  "col-xs-6": "grid-col_col-xs-6_3iGKi",
  "col-xs-offset-6": "grid-col_col-xs-offset-6_1lwiq",
  "col-xs-7": "grid-col_col-xs-7_1gkhx",
  "col-xs-offset-7": "grid-col_col-xs-offset-7_6ZaQE",
  "col-xs-8": "grid-col_col-xs-8_1Vm98",
  "col-xs-offset-8": "grid-col_col-xs-offset-8_2KfHl",
  "col-xs-9": "grid-col_col-xs-9_1x3io",
  "col-xs-offset-9": "grid-col_col-xs-offset-9_qE879",
  "col-xs-10": "grid-col_col-xs-10_3-kVu",
  "col-xs-offset-10": "grid-col_col-xs-offset-10_2NfPd",
  "col-xs-11": "grid-col_col-xs-11_3nwal",
  "col-xs-offset-11": "grid-col_col-xs-offset-11_1DuEz",
  "col-xs-12": "grid-col_col-xs-12_3fmzI",
  "col-xs-offset-12": "grid-col_col-xs-offset-12_Du1my",
  "col-sm": "grid-col_col-sm_1aGcN",
  "col-sm-1": "grid-col_col-sm-1_1RVsb",
  "col-sm-offset-1": "grid-col_col-sm-offset-1_1m183",
  "col-sm-2": "grid-col_col-sm-2_rotPF",
  "col-sm-offset-2": "grid-col_col-sm-offset-2_2n4Yz",
  "col-sm-3": "grid-col_col-sm-3_xWBaI",
  "col-sm-offset-3": "grid-col_col-sm-offset-3_1lvKb",
  "col-sm-4": "grid-col_col-sm-4_1vIB7",
  "col-sm-offset-4": "grid-col_col-sm-offset-4_3wkJu",
  "col-sm-5": "grid-col_col-sm-5_3ql9J",
  "col-sm-offset-5": "grid-col_col-sm-offset-5_2u46f",
  "col-sm-6": "grid-col_col-sm-6_1A8gK",
  "col-sm-offset-6": "grid-col_col-sm-offset-6_x4612",
  "col-sm-7": "grid-col_col-sm-7_1CJFA",
  "col-sm-offset-7": "grid-col_col-sm-offset-7_2pPn4",
  "col-sm-8": "grid-col_col-sm-8_1EQvy",
  "col-sm-offset-8": "grid-col_col-sm-offset-8_2LTQ6",
  "col-sm-9": "grid-col_col-sm-9_1zSLV",
  "col-sm-offset-9": "grid-col_col-sm-offset-9_3V27-",
  "col-sm-10": "grid-col_col-sm-10_198xq",
  "col-sm-offset-10": "grid-col_col-sm-offset-10_1o5GU",
  "col-sm-11": "grid-col_col-sm-11_1C29z",
  "col-sm-offset-11": "grid-col_col-sm-offset-11_IXjvG",
  "col-sm-12": "grid-col_col-sm-12_3qNdb",
  "col-sm-offset-12": "grid-col_col-sm-offset-12_1ZwTQ",
  "col-md": "grid-col_col-md_1FASJ",
  "col-md-1": "grid-col_col-md-1_1XA_f",
  "col-md-offset-1": "grid-col_col-md-offset-1_3FQOF",
  "col-md-2": "grid-col_col-md-2_12cvz",
  "col-md-offset-2": "grid-col_col-md-offset-2_21JqG",
  "col-md-3": "grid-col_col-md-3_ZKFAM",
  "col-md-offset-3": "grid-col_col-md-offset-3_3zI2h",
  "col-md-4": "grid-col_col-md-4_1Ecax",
  "col-md-offset-4": "grid-col_col-md-offset-4_AvYT5",
  "col-md-5": "grid-col_col-md-5_slupI",
  "col-md-offset-5": "grid-col_col-md-offset-5_tIsax",
  "col-md-6": "grid-col_col-md-6_2m2ie",
  "col-md-offset-6": "grid-col_col-md-offset-6_22YuZ",
  "col-md-7": "grid-col_col-md-7_1rT4S",
  "col-md-offset-7": "grid-col_col-md-offset-7_1yIRg",
  "col-md-8": "grid-col_col-md-8_OpAbG",
  "col-md-offset-8": "grid-col_col-md-offset-8_2LpTa",
  "col-md-9": "grid-col_col-md-9_2Q-xN",
  "col-md-offset-9": "grid-col_col-md-offset-9_19oL9",
  "col-md-10": "grid-col_col-md-10_1IoYu",
  "col-md-offset-10": "grid-col_col-md-offset-10_39-9C",
  "col-md-11": "grid-col_col-md-11_2iFNA",
  "col-md-offset-11": "grid-col_col-md-offset-11_1cQ_8",
  "col-md-12": "grid-col_col-md-12_CcXmg",
  "col-md-offset-12": "grid-col_col-md-offset-12_1uvTL",
  "col-lg": "grid-col_col-lg_Mqp1p",
  "col-lg-1": "grid-col_col-lg-1_3JAw0",
  "col-lg-offset-1": "grid-col_col-lg-offset-1_1gjW3",
  "col-lg-2": "grid-col_col-lg-2_2iBOY",
  "col-lg-offset-2": "grid-col_col-lg-offset-2_1HEKD",
  "col-lg-3": "grid-col_col-lg-3_1Hz5f",
  "col-lg-offset-3": "grid-col_col-lg-offset-3_1Kb46",
  "col-lg-4": "grid-col_col-lg-4_Bk7x0",
  "col-lg-offset-4": "grid-col_col-lg-offset-4_1C0Sr",
  "col-lg-5": "grid-col_col-lg-5_2C3k6",
  "col-lg-offset-5": "grid-col_col-lg-offset-5_1NxBM",
  "col-lg-6": "grid-col_col-lg-6_3edOh",
  "col-lg-offset-6": "grid-col_col-lg-offset-6_DKC3p",
  "col-lg-7": "grid-col_col-lg-7_2CBsx",
  "col-lg-offset-7": "grid-col_col-lg-offset-7_1oMDX",
  "col-lg-8": "grid-col_col-lg-8_r_Z7a",
  "col-lg-offset-8": "grid-col_col-lg-offset-8_26iy0",
  "col-lg-9": "grid-col_col-lg-9_2G3gV",
  "col-lg-offset-9": "grid-col_col-lg-offset-9_3boPP",
  "col-lg-10": "grid-col_col-lg-10_1Utfa",
  "col-lg-offset-10": "grid-col_col-lg-offset-10_3_0uK",
  "col-lg-11": "grid-col_col-lg-11_1owVR",
  "col-lg-offset-11": "grid-col_col-lg-offset-11_3ahef",
  "col-lg-12": "grid-col_col-lg-12_1i7df",
  "col-lg-offset-12": "grid-col_col-lg-offset-12_1t-6S"
};
/** @test {GridCol} */

describe('GridCol component', function () {
  /** @test {GridCol#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, null));
    it('Should output a grid col', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
    });
    it('Should output a grid col with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['col']));
    });
  });
});