"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _formControl = _interopRequireDefault(require("../form-control"));

var _icon = _interopRequireDefault(require("../icon"));

var _calendar = _interopRequireDefault(require("./calendar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// styles
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

var nof = function nof() {};

var DatetimePicker =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DatetimePicker, _PureComponent);

  function DatetimePicker(props) {
    var _this;

    _classCallCheck(this, DatetimePicker);

    _this = _possibleConstructorReturn(this, (DatetimePicker.__proto__ || Object.getPrototypeOf(DatetimePicker)).call(this, props));
    _this.getStateFromProps = _this.getStateFromProps.bind(_assertThisInitialized(_this));
    _this.getUpdateOn = _this.getUpdateOn.bind(_assertThisInitialized(_this));
    _this.getFormats = _this.getFormats.bind(_assertThisInitialized(_this));
    _this.addTime = _this.addTime.bind(_assertThisInitialized(_this));
    _this.updateTime = _this.updateTime.bind(_assertThisInitialized(_this));
    _this.subtractTime = _this.subtractTime.bind(_assertThisInitialized(_this));
    _this.handleClickOutside = _this.handleClickOutside.bind(_assertThisInitialized(_this));
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
    _this.onInputKey = _this.onInputKey.bind(_assertThisInitialized(_this));
    _this.showView = _this.showView.bind(_assertThisInitialized(_this));
    _this.setTime = _this.setTime.bind(_assertThisInitialized(_this));
    _this.updateSelectedDate = _this.updateSelectedDate.bind(_assertThisInitialized(_this));
    _this.openCalendar = _this.openCalendar.bind(_assertThisInitialized(_this));
    _this.closeCalendar = _this.closeCalendar.bind(_assertThisInitialized(_this));
    _this.localMoment = _this.localMoment.bind(_assertThisInitialized(_this));
    _this.getComponentProps = _this.getComponentProps.bind(_assertThisInitialized(_this));
    _this.setDate = _this.setDate.bind(_assertThisInitialized(_this));
    _this.allowedSetTime = ['hours', 'minutes', 'seconds', 'milliseconds'];
    _this.componentProps = {
      fromProps: ['value', 'isValidDate', 'renderDay', 'renderMonth', 'renderYear', 'timeConstraints'],
      fromState: ['viewDate', 'selectedDate', 'updateOn'],
      fromThis: ['setDate', 'setTime', 'showView', 'addTime', 'subtractTime', 'updateSelectedDate', 'localMoment', 'handleClickOutside']
    };
    _this.state = _this.getStateFromProps(_this.props);
    return _this;
  }

  _createClass(DatetimePicker, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.state.open === undefined) {
        this.setState({
          open: !this.props.input
        });
      }

      this.setState({
        currentView: this.props.dateFormat ? this.props.viewMode || this.state.updateOn || 'days' : 'time'
      });
    }
  }, {
    key: "getStateFromProps",
    value: function getStateFromProps(props) {
      var formats = this.getFormats(props);
      var date = props.value || props.defaultValue;
      var selectedDate;
      var viewDate;
      var updateOn;
      var inputValue;

      if (date && typeof date === 'string') {
        selectedDate = this.localMoment(date, formats.datetime);
      } else if (date) {
        selectedDate = this.localMoment(date);
      }

      if (selectedDate && !selectedDate.isValid()) {
        selectedDate = null;
      }

      viewDate = selectedDate ? selectedDate.clone().startOf('month') : this.localMoment().startOf('month');
      updateOn = this.getUpdateOn(formats);

      if (selectedDate) {
        inputValue = selectedDate.format(formats.datetime);
      } else if (date.isValid && !date.isValid()) {
        inputValue = '';
      } else {
        inputValue = date || '';
      }

      return {
        updateOn: updateOn,
        inputFormat: formats.datetime,
        viewDate: viewDate,
        selectedDate: selectedDate,
        inputValue: inputValue,
        open: props.open
      };
    }
  }, {
    key: "getUpdateOn",
    value: function getUpdateOn(formats) {
      if (formats.date.match(/[lLD]/)) {
        return 'days';
      } else if (formats.date.indexOf('M') !== -1) {
        return 'months';
      } else if (formats.date.indexOf('Y') !== -1) {
        return 'years';
      }

      return 'days';
    }
  }, {
    key: "getFormats",
    value: function getFormats(props) {
      var formats = {
        date: props.dateFormat || '',
        time: props.timeFormat || ''
      };
      var locale = this.localMoment(props.date, null, props).localeData();

      if (formats.date === true) {
        formats.date = locale.longDateFormat('L');
      } else if (this.getUpdateOn(formats) !== 'days') {
        formats.time = '';
      }

      if (formats.time === true) {
        formats.time = locale.longDateFormat('LT');
      }

      formats.datetime = formats.date && formats.time ? "".concat(formats.date, " ").concat(formats.time) : formats.date || formats.time;
      return formats;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var formats = this.getFormats(nextProps);
      var updatedState = {};

      if (nextProps.value !== this.props.value || formats.datetime !== this.getFormats(this.props).datetime) {
        updatedState = this.getStateFromProps(nextProps);
      }

      if (updatedState.open === undefined) {
        if (this.props.closeOnSelect && this.state.currentView !== 'time') {
          updatedState.open = false;
        } else {
          updatedState.open = this.state.open;
        }
      }

      if (nextProps.viewMode !== this.props.viewMode) {
        updatedState.currentView = nextProps.viewMode;
      }

      if (nextProps.locale !== this.props.locale) {
        if (this.state.viewDate) {
          var updatedViewDate = this.state.viewDate.clone().locale(nextProps.locale);
          updatedState.viewDate = updatedViewDate;
        }

        if (this.state.selectedDate) {
          var updatedSelectedDate = this.state.selectedDate.clone().locale(nextProps.locale);
          updatedState.selectedDate = updatedSelectedDate;
          updatedState.inputValue = updatedSelectedDate.format(formats.datetime);
        }
      }

      if (nextProps.utc !== this.props.utc) {
        if (nextProps.utc) {
          if (this.state.viewDate) {
            updatedState.viewDate = this.state.viewDate.clone().utc();
          }

          if (this.state.selectedDate) {
            updatedState.selectedDate = this.state.selectedDate.clone().utc();
            updatedState.inputValue = updatedState.selectedDate.format(formats.datetime);
          }
        } else {
          if (this.state.viewDate) {
            updatedState.viewDate = this.state.viewDate.clone().local();
          }

          if (this.state.selectedDate) {
            updatedState.selectedDate = this.state.selectedDate.clone().local();
            updatedState.inputValue = updatedState.selectedDate.format(formats.datetime);
          }
        }
      }

      this.setState(updatedState);
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(e) {
      var _this2 = this;

      var value = e.target === null ? e : e.target.value;
      var localMoment = this.localMoment(value, this.state.inputFormat);
      var update = {
        inputValue: value
      };

      if (localMoment.isValid() && !this.props.value) {
        update.selectedDate = localMoment;
        update.viewDate = localMoment.clone().startOf('month');
      } else {
        update.selectedDate = null;
      }

      return this.setState(update, function () {
        return _this2.props.onChange(_this2.props.name, localMoment.isValid() ? localMoment : _this2.state.inputValue);
      });
    }
  }, {
    key: "onInputKey",
    value: function onInputKey(e) {
      if (e.which === 9 && this.props.closeOnTab) {
        this.closeCalendar();
      }
    }
  }, {
    key: "showView",
    value: function showView(view) {
      var me = this;
      return function () {
        me.setState({
          currentView: view
        });
      };
    }
  }, {
    key: "setDate",
    value: function setDate(type) {
      var _this3 = this;

      var nextViews = {
        month: 'days',
        year: 'months'
      };
      return function (e) {
        _this3.setState({
          viewDate: _this3.state.viewDate.clone()[type](parseInt(e.target.getAttribute('data-value'), 10)).startOf(type),
          currentView: nextViews[type]
        });
      };
    }
  }, {
    key: "addTime",
    value: function addTime(amount, type, toSelected) {
      return this.updateTime('add', amount, type, toSelected);
    }
  }, {
    key: "subtractTime",
    value: function subtractTime(amount, type, toSelected) {
      return this.updateTime('subtract', amount, type, toSelected);
    }
  }, {
    key: "updateTime",
    value: function updateTime(op, amount, type, toSelected) {
      var me = this;
      return function () {
        var update = {};
        var date = toSelected ? 'selectedDate' : 'viewDate';
        update[date] = me.state[date].clone()[op](amount, type);
        me.setState(update);
      };
    }
  }, {
    key: "setTime",
    value: function setTime(type, value) {
      var index = this.allowedSetTime.indexOf(type) + 1;
      var state = this.state;
      var date = (state.selectedDate || state.viewDate).clone();
      var nextType; // It is needed to set all the time properties
      // to not to reset the time

      date[type](value);

      for (; index < this.allowedSetTime.length; index++) {
        nextType = this.allowedSetTime[index];
        date[nextType](date[nextType]());
      }

      if (!this.props.value) {
        this.setState({
          selectedDate: date,
          inputValue: date.format(state.inputFormat)
        });
      }

      this.props.onChange(this.props.name, date.format(state.inputFormat));
    }
  }, {
    key: "updateSelectedDate",
    value: function updateSelectedDate(e, close) {
      var target = e.target;
      var modifier = 0;
      var viewDate = this.state.viewDate;
      var currentDate = this.state.selectedDate || viewDate;
      var date;

      if (target.className.indexOf(styles.rdtDay) !== -1) {
        if (target.className.indexOf(styles.rdtNew) !== -1) {
          modifier = 1;
        } else if (target.className.indexOf(styles.rdtOld) !== -1) {
          modifier = -1;
        }

        date = viewDate.clone().month(viewDate.month() + modifier).date(parseInt(target.getAttribute('data-value'), 10));
      } else if (target.className.indexOf(styles.rdtMonth) !== -1) {
        date = viewDate.clone().month(parseInt(target.getAttribute('data-value'), 10)).date(currentDate.date());
      } else if (target.className.indexOf(styles.rdtYear) !== -1) {
        date = viewDate.clone().month(currentDate.month()).date(currentDate.date()).year(parseInt(target.getAttribute('data-value'), 10));
      }

      date.hours(currentDate.hours()).minutes(currentDate.minutes()).seconds(currentDate.seconds()).milliseconds(currentDate.milliseconds());

      if (!this.props.value) {
        var open = !(this.props.closeOnSelect && close);

        if (!open) {
          this.props.onBlur(date);
        }

        this.setState({
          selectedDate: date,
          viewDate: date.clone().startOf('month'),
          inputValue: date.format(this.state.inputFormat),
          open: open
        });
      } else {
        if (this.props.closeOnSelect && close) {
          this.closeCalendar();
        }
      }

      this.props.onChange(this.props.name, date.format(this.state.inputFormat));
    }
  }, {
    key: "openCalendar",
    value: function openCalendar() {
      var _this4 = this;

      if (!this.state.open) {
        this.setState({
          open: true
        }, function () {
          _this4.props.onFocus();
        });
      }
    }
  }, {
    key: "closeCalendar",
    value: function closeCalendar() {
      var _this5 = this;

      this.setState({
        open: false
      }, function () {
        _this5.props.onBlur(_this5.state.selectedDate || _this5.state.inputValue);
      });
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside() {
      var _this6 = this;

      if (this.props.input && this.state.open && !this.props.open) {
        this.setState({
          open: false
        }, function () {
          _this6.props.onBlur(_this6.state.selectedDate || _this6.state.inputValue);
        });
      }
    }
  }, {
    key: "localMoment",
    value: function localMoment(date, format, props) {
      props = props || this.props;
      var momentFn = props.utc ? _moment.default.utc : _moment.default;
      var m = momentFn(date, format, props.strictParsing);
      if (props.locale) m.locale(props.locale);
      return m;
    }
  }, {
    key: "getComponentProps",
    value: function getComponentProps() {
      var me = this;
      var formats = this.getFormats(this.props);
      var props = {
        dateFormat: formats.date,
        timeFormat: formats.time
      };
      this.componentProps.fromProps.forEach(function (name) {
        props[name] = me.props[name];
      });
      this.componentProps.fromState.forEach(function (name) {
        props[name] = me.state[name];
      });
      this.componentProps.fromThis.forEach(function (name) {
        props[name] = me[name];
      });
      return props;
    }
  }, {
    key: "render",
    value: function render() {
      var classProp = Array.isArray(this.props.className) ? "".concat(this.props.className.map(function (item) {
        return styles[item];
      }).join(' ')) : "".concat(styles[this.props.className]);
      var classes = this.props.className ? classProp : '';
      var className = "".concat(styles.rdt, " ").concat(classes);

      if (!this.props.input) {
        className += " ".concat(styles.rdtStatic);
      }

      if (this.state.open) {
        className += " ".concat(styles.rdtOpen);
      }

      var viewProps = this.getComponentProps();
      return _react.default.createElement("div", {
        className: className
      }, this.props.input && _react.default.createElement(_formControl.default, _extends({}, this.props.inputProps, {
        addonAfter: _react.default.createElement(_icon.default, {
          name: this.props.dateFormat ? 'calendar' : 'clock-o',
          color: "#fff"
        }),
        key: "i",
        type: "text",
        onFocus: this.openCalendar,
        onChange: this.onInputChange,
        onKeyDown: this.onInputKey,
        value: this.state.inputValue,
        placeholder: this.props.placeholder,
        disabled: this.props.disabled
      })), _react.default.createElement("div", {
        key: "dt",
        className: styles.rdtPicker
      }, _react.default.createElement(_calendar.default, _extends({}, viewProps, {
        view: this.state.currentView,
        onClickOutside: this.handleClickOutside
      }))));
    }
  }]);

  return DatetimePicker;
}(_react.PureComponent);

Object.defineProperty(DatetimePicker, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    onFocus: _propTypes.default.func,
    onBlur: _propTypes.default.func,
    onChange: _propTypes.default.func,
    locale: _propTypes.default.string,
    utc: _propTypes.default.bool,
    input: _propTypes.default.bool,
    inputProps: _propTypes.default.object,
    timeConstraints: _propTypes.default.object,
    viewMode: _propTypes.default.oneOf(['years', 'months', 'days', 'time']),
    isValidDate: _propTypes.default.func,
    open: _propTypes.default.bool,
    strictParsing: _propTypes.default.bool,
    closeOnSelect: _propTypes.default.bool,
    closeOnTab: _propTypes.default.bool,
    value: _propTypes.default.any,
    dateFormat: _propTypes.default.any,
    className: _propTypes.default.string,
    placeholder: _propTypes.default.string
  }
});
Object.defineProperty(DatetimePicker, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    onFocus: nof,
    onBlur: nof,
    onChange: nof,
    className: '',
    defaultValue: '',
    inputProps: {},
    input: true,
    timeFormat: true,
    timeConstraints: {},
    dateFormat: true,
    strictParsing: true,
    closeOnSelect: false,
    closeOnTab: true,
    utc: false
  }
});
DatetimePicker.moment = _moment.default;
/**
 * @example <DatetimePicker />
 */

var _default = (0, _reactCssModules.default)(DatetimePicker, styles);

exports.default = _default;