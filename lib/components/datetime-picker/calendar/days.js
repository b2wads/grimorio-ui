"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

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

var DateTimePickerDays =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DateTimePickerDays, _PureComponent);

  function DateTimePickerDays(props) {
    var _this;

    _classCallCheck(this, DateTimePickerDays);

    _this = _possibleConstructorReturn(this, (DateTimePickerDays.__proto__ || Object.getPrototypeOf(DateTimePickerDays)).call(this, props));
    _this.getDaysOfWeek = _this.getDaysOfWeek.bind(_assertThisInitialized(_this));
    _this.renderDays = _this.renderDays.bind(_assertThisInitialized(_this));
    _this.updateSelectedDate = _this.updateSelectedDate.bind(_assertThisInitialized(_this));
    _this.renderDay = _this.renderDay.bind(_assertThisInitialized(_this));
    _this.renderFooter = _this.renderFooter.bind(_assertThisInitialized(_this));
    _this.alwaysValidDate = _this.alwaysValidDate.bind(_assertThisInitialized(_this));
    _this.handleClickOutside = _this.handleClickOutside.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DateTimePickerDays, [{
    key: "getDaysOfWeek",
    value: function getDaysOfWeek(locale) {
      var days = locale._weekdaysShort;
      var first = locale.firstDayOfWeek();
      var dow = [];
      var i = 0;
      days.forEach(function (day) {
        dow[(7 + i++ - first) % 7] = day;
      });
      return dow;
    }
  }, {
    key: "renderDays",
    value: function renderDays() {
      var date = this.props.viewDate;
      var selected = this.props.selectedDate && this.props.selectedDate.clone();
      var prevMonth = date.clone().subtract(1, 'months');
      var currentYear = date.year();
      var currentMonth = date.month();
      var weeks = [];
      var days = [];
      var renderer = this.props.renderDay || this.renderDay;
      var isValid = this.props.isValidDate || this.alwaysValidDate;
      var classes;
      var isDisabled;
      var dayProps;
      var currentDate; // Go to the last week of the previous month

      prevMonth.date(prevMonth.daysInMonth()).startOf('week');
      var lastDay = prevMonth.clone().add(42, 'd');

      while (prevMonth.isBefore(lastDay)) {
        classes = styles.rdtDay;
        currentDate = prevMonth.clone();

        if (prevMonth.year() === currentYear && prevMonth.month() < currentMonth || prevMonth.year() < currentYear) {
          classes += " ".concat(styles.rdtOld);
        } else if (prevMonth.year() === currentYear && prevMonth.month() > currentMonth || prevMonth.year() > currentYear) {
          classes += " ".concat(styles.rdtNew);
        }

        if (selected && prevMonth.isSame(selected, 'day')) {
          classes += " ".concat(styles.rdtActive);
        }

        if (prevMonth.isSame((0, _moment.default)(), 'day')) {
          classes += " ".concat(styles.rdtToday);
        }

        isDisabled = !isValid(currentDate, selected);

        if (isDisabled) {
          classes += " ".concat(styles.rdtDisabled);
        }

        dayProps = {
          key: prevMonth.format('M_D'),
          'data-value': prevMonth.date(),
          className: classes
        };

        if (!isDisabled) {
          dayProps.onClick = this.updateSelectedDate;
        }

        days.push(renderer(dayProps, currentDate, selected));

        if (days.length === 7) {
          weeks.push(_react.default.createElement("tr", {
            key: prevMonth.format('M_D')
          }, days));
          days = [];
        }

        prevMonth.add(1, 'd');
      }

      return weeks;
    }
  }, {
    key: "updateSelectedDate",
    value: function updateSelectedDate(event) {
      this.props.updateSelectedDate(event, true);
    }
  }, {
    key: "renderDay",
    value: function renderDay(props, currentDate) {
      return _react.default.createElement("td", props, currentDate.date());
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      if (!this.props.timeFormat) {
        return '';
      }

      var date = this.props.selectedDate || this.props.viewDate;
      return _react.default.createElement("tfoot", {
        key: "tf"
      }, _react.default.createElement("tr", null, _react.default.createElement("td", {
        onClick: this.props.showView('time'),
        colSpan: "7",
        className: styles.rdtTimeToggle
      }, date.format(this.props.timeFormat))));
    }
  }, {
    key: "alwaysValidDate",
    value: function alwaysValidDate() {
      return 1;
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside() {
      this.props.handleClickOutside();
    }
  }, {
    key: "render",
    value: function render() {
      var footer = this.renderFooter();
      var date = this.props.viewDate;
      var locale = date.localeData();
      return _react.default.createElement("div", {
        className: styles.rdtDays
      }, _react.default.createElement("table", null, _react.default.createElement("thead", {
        key: "th"
      }, _react.default.createElement("tr", {
        key: "h"
      }, _react.default.createElement("th", {
        key: "p",
        className: styles.rdtPrev
      }, _react.default.createElement("span", {
        onClick: this.props.subtractTime(1, 'months')
      }, "\u2039")), _react.default.createElement("th", {
        key: "s",
        className: styles.rdtSwitch,
        onClick: this.props.showView('months'),
        colSpan: "5",
        "data-value": this.props.viewDate.month()
      }, "".concat(locale.months(date), " ").concat(date.year())), _react.default.createElement("th", {
        key: "n",
        className: styles.rdtNext
      }, _react.default.createElement("span", {
        onClick: this.props.addTime(1, 'months')
      }, "\u203A"))), _react.default.createElement("tr", {
        key: "d"
      }, this.getDaysOfWeek(locale).map(function (day, index) {
        return _react.default.createElement("th", {
          key: day,
          className: styles.dow
        }, day);
      }))), _react.default.createElement("tbody", {
        key: "tb"
      }, this.renderDays()), footer));
    }
  }]);

  return DateTimePickerDays;
}(_react.PureComponent);

Object.defineProperty(DateTimePickerDays, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    timeFormat: _propTypes.default.any,
    selectedDate: _propTypes.default.any,
    viewDate: _propTypes.default.any,
    renderDay: _propTypes.default.any,
    isValidDate: _propTypes.default.any,
    updateOn: _propTypes.default.any,
    updateSelectedDate: _propTypes.default.any,
    handleClickOutside: _propTypes.default.any,
    subtractTime: _propTypes.default.any,
    showView: _propTypes.default.any,
    addTime: _propTypes.default.any
  }
});

var _default = (0, _reactOnclickoutside.default)(DateTimePickerDays);

exports.default = _default;