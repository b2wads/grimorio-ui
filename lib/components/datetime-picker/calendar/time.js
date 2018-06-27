"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var styles = {
  "rdt": "datetime-picker_rdt_Wf3b7",
  "rdtPicker": "datetime-picker_rdtPicker_Z46rW",
  "rdtTimeToggle": "datetime-picker_rdtTimeToggle_32fEq",
  "rdtSwitch": "datetime-picker_rdtSwitch_1iY02",
  "rdtPrev": "datetime-picker_rdtPrev_1YPkq",
  "rdtNext": "datetime-picker_rdtNext_1oV3y",
  "rdtOld": "datetime-picker_rdtOld_2GYNv",
  "rdtNew": "datetime-picker_rdtNew_1dEWK",
  "rdtToday": "datetime-picker_rdtToday_modkV",
  "rdtActive": "datetime-picker_rdtActive_9IA6w",
  "rdtDisabled": "datetime-picker_rdtDisabled_2sQuL",
  "rdtDay": "datetime-picker_rdtDay_hmM_P",
  "rdtHour": "datetime-picker_rdtHour_2XVd0",
  "rdtMinute": "datetime-picker_rdtMinute_2QTti",
  "rdtSecond": "datetime-picker_rdtSecond_2ZyLL",
  "dow": "datetime-picker_dow_17qeJ",
  "rdtOpen": "datetime-picker_rdtOpen_3lIxe",
  "rdtStatic": "datetime-picker_rdtStatic_2-7ya",
  "rdtMonth": "datetime-picker_rdtMonth_1SIQg",
  "rdtYear": "datetime-picker_rdtYear_22uKW",
  "rdtCounters": "datetime-picker_rdtCounters_eEmoS",
  "rdtCounterSeparator": "datetime-picker_rdtCounterSeparator_2wM7a",
  "rdtCounter": "datetime-picker_rdtCounter_1oq81",
  "rdtBtn": "datetime-picker_rdtBtn_3KWnm",
  "rdtCount": "datetime-picker_rdtCount_2OfWi",
  "rdtMilli": "datetime-picker_rdtMilli_3aW9x"
};

var DateTimePickerTime =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DateTimePickerTime, _PureComponent);

  function DateTimePickerTime(props) {
    var _this;

    _classCallCheck(this, DateTimePickerTime);

    _this = _possibleConstructorReturn(this, (DateTimePickerTime.__proto__ || Object.getPrototypeOf(DateTimePickerTime)).call(this, props));
    _this.calculateState = _this.calculateState.bind(_assertThisInitialized(_this));
    _this.renderCounter = _this.renderCounter.bind(_assertThisInitialized(_this));
    _this.renderDayPart = _this.renderDayPart.bind(_assertThisInitialized(_this));
    _this.updateMilli = _this.updateMilli.bind(_assertThisInitialized(_this));
    _this.renderHeader = _this.renderHeader.bind(_assertThisInitialized(_this));
    _this.onStartClicking = _this.onStartClicking.bind(_assertThisInitialized(_this));
    _this.toggleDayPart = _this.toggleDayPart.bind(_assertThisInitialized(_this));
    _this.increase = _this.increase.bind(_assertThisInitialized(_this));
    _this.decrease = _this.decrease.bind(_assertThisInitialized(_this));
    _this.pad = _this.pad.bind(_assertThisInitialized(_this));
    _this.handleClickOutside = _this.handleClickOutside.bind(_assertThisInitialized(_this));
    _this.state = _this.calculateState(_this.props);
    _this.padValues = {
      hours: 1,
      minutes: 2,
      seconds: 2,
      milliseconds: 3
    };
    return _this;
  }

  _createClass(DateTimePickerTime, [{
    key: "calculateState",
    value: function calculateState(props) {
      var date = props.selectedDate || props.viewDate;
      var format = props.timeFormat;
      var counters = [];

      if (format.toLowerCase().indexOf('h') !== -1) {
        counters.push('hours');

        if (format.indexOf('m') !== -1) {
          counters.push('minutes');

          if (format.indexOf('s') !== -1) {
            counters.push('seconds');
          }
        }
      }

      var daypart = false;

      if (this.state !== null && this.props.timeFormat.toLowerCase().indexOf(' a') !== -1) {
        if (this.props.timeFormat.indexOf(' A') !== -1) {
          daypart = this.state.hours >= 12 ? 'PM' : 'AM';
        } else {
          daypart = this.state.hours >= 12 ? 'pm' : 'am';
        }
      }

      return {
        hours: date.format('H'),
        minutes: date.format('mm'),
        seconds: date.format('ss'),
        milliseconds: date.format('SSS'),
        daypart: daypart,
        counters: counters
      };
    }
  }, {
    key: "renderCounter",
    value: function renderCounter(type) {
      if (type !== 'daypart') {
        var value = this.state[type];

        if (type === 'hours' && this.props.timeFormat.toLowerCase().indexOf(' a') !== -1) {
          value = (value - 1) % 12 + 1;

          if (value === 0) {
            value = 12;
          }
        }

        return _react.default.createElement("div", {
          key: type,
          className: styles.rdtCounter
        }, _react.default.createElement("span", {
          key: "up",
          className: styles.rdtBtn,
          onMouseDown: this.onStartClicking('increase', type)
        }, "\u25B2"), _react.default.createElement("div", {
          key: "c",
          className: styles.rdtCount
        }, value), _react.default.createElement("span", {
          key: "do",
          className: styles.rdtBtn,
          onMouseDown: this.onStartClicking('decrease', type)
        }, "\u25BC"));
      }

      return '';
    }
  }, {
    key: "renderDayPart",
    value: function renderDayPart() {
      return _react.default.createElement("div", {
        key: "dayPart",
        className: styles.rdtCounter
      }, _react.default.createElement("span", {
        key: "up",
        className: styles.rdtBtn,
        onMouseDown: this.onStartClicking('toggleDayPart', 'hours')
      }, "\u25B2"), _react.default.createElement("div", {
        key: this.state.daypart,
        className: styles.rdtCount
      }, this.state.daypart), _react.default.createElement("span", {
        key: "do",
        className: styles.rdtBtn,
        onMouseDown: this.onStartClicking('toggleDayPart', 'hours')
      }, "\u25BC"));
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var me = this;
      me.timeConstraints = {
        hours: {
          min: 0,
          max: 23,
          step: 1
        },
        minutes: {
          min: 0,
          max: 59,
          step: 1
        },
        seconds: {
          min: 0,
          max: 59,
          step: 1
        },
        milliseconds: {
          min: 0,
          max: 999,
          step: 1
        }
      };
      ['hours', 'minutes', 'seconds', 'milliseconds'].forEach(function (type) {
        Object.assign(me.timeConstraints[type], me.props.timeConstraints[type]);
      });
      this.setState(this.calculateState(this.props));
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.calculateState(nextProps));
    }
  }, {
    key: "updateMilli",
    value: function updateMilli(e) {
      var milli = parseInt(e.target.value, 10);

      if (milli === e.target.value && milli >= 0 && milli < 1000) {
        this.props.setTime('milliseconds', milli);
        this.setState({
          milliseconds: milli
        });
      }
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      if (!this.props.dateFormat) {
        return null;
      }

      var date = this.props.selectedDate || this.props.viewDate;
      return _react.default.createElement("thead", {
        key: "h"
      }, _react.default.createElement("tr", null, _react.default.createElement("th", {
        className: styles.rdtSwitch,
        colSpan: "4",
        onClick: this.props.showView('days')
      }, date.format(this.props.dateFormat))));
    }
  }, {
    key: "onStartClicking",
    value: function onStartClicking(action, type) {
      var me = this;
      return function () {
        var update = {};
        update[type] = me[action](type);
        me.setState(update);
        me.timer = setTimeout(function () {
          me.increaseTimer = setInterval(function () {
            update[type] = me[action](type);
            me.setState(update);
          }, 70);
        }, 500);

        me.mouseUpListener = function () {
          clearTimeout(me.timer);
          clearInterval(me.increaseTimer);
          me.props.setTime(type, me.state[type]);
          document.body.removeEventListener('mouseup', me.mouseUpListener);
        };

        document.body.addEventListener('mouseup', me.mouseUpListener);
      };
    }
  }, {
    key: "toggleDayPart",
    value: function toggleDayPart(type) {
      var value = parseInt(this.state[type], 10) + 12;

      if (value > this.timeConstraints[type].max) {
        value = this.timeConstraints[type].min + (value - (this.timeConstraints[type].max + 1));
      }

      return this.pad(type, value);
    }
  }, {
    key: "increase",
    value: function increase(type) {
      var value = parseInt(this.state[type], 10) + this.timeConstraints[type].step;

      if (value > this.timeConstraints[type].max) {
        value = this.timeConstraints[type].min + (value - (this.timeConstraints[type].max + 1));
      }

      return this.pad(type, value);
    }
  }, {
    key: "decrease",
    value: function decrease(type) {
      var value = parseInt(this.state[type], 10) - this.timeConstraints[type].step;

      if (value < this.timeConstraints[type].min) {
        value = this.timeConstraints[type].max + 1 - (this.timeConstraints[type].min - value);
      }

      return this.pad(type, value);
    }
  }, {
    key: "pad",
    value: function pad(type, value) {
      var str = "".concat(value);

      while (str.length < this.padValues[type]) {
        str = "0".concat(str);
      }

      return str;
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside() {
      this.props.handleClickOutside();
    }
  }, {
    key: "render",
    value: function render() {
      var me = this;
      var counters = [];
      this.state.counters.forEach(function (c) {
        if (counters.length) {
          counters.push(_react.default.createElement("div", {
            key: "sep".concat(counters.length),
            className: styles.rdtCounterSeparator
          }, ":"));
        }

        counters.push(me.renderCounter(c));
      });

      if (this.state.daypart !== false) {
        counters.push(me.renderDayPart());
      }

      if (this.state.counters.length === 3 && this.props.timeFormat.indexOf('S') !== -1) {
        counters.push(_react.default.createElement("div", {
          key: "sep5",
          className: styles.rdtCounterSeparator
        }, ":"));
        counters.push(_react.default.createElement("div", {
          key: "m",
          className: "".concat(styles.rdtCounter, " ").concat(styles.rdtMilli)
        }, _react.default.createElement("input", {
          type: "text",
          value: this.state.milliseconds,
          onChange: this.updateMilli
        })));
      }

      return _react.default.createElement("div", {
        className: styles.rdtTime
      }, _react.default.createElement("table", null, this.renderHeader(), _react.default.createElement("tbody", {
        key: "b"
      }, _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement("div", {
        className: styles.rdtCounters
      }, counters))))));
    }
  }]);

  return DateTimePickerTime;
}(_react.PureComponent);

Object.defineProperty(DateTimePickerTime, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    timeFormat: _propTypes.default.any,
    setTime: _propTypes.default.any,
    dateFormat: _propTypes.default.any,
    selectedDate: _propTypes.default.any,
    viewDate: _propTypes.default.any,
    showView: _propTypes.default.any,
    handleClickOutside: _propTypes.default.any
  }
});

var _default = (0, _reactOnclickoutside.default)(DateTimePickerTime);

exports.default = _default;