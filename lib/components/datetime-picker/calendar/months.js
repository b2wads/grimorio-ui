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

var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

var DateTimePickerMonths =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DateTimePickerMonths, _PureComponent);

  function DateTimePickerMonths(props) {
    var _this;

    _classCallCheck(this, DateTimePickerMonths);

    _this = _possibleConstructorReturn(this, (DateTimePickerMonths.__proto__ || Object.getPrototypeOf(DateTimePickerMonths)).call(this, props));
    _this.renderMonths = _this.renderMonths.bind(_assertThisInitialized(_this));
    _this.updateSelectedMonth = _this.updateSelectedMonth.bind(_assertThisInitialized(_this));
    _this.renderMonth = _this.renderMonth.bind(_assertThisInitialized(_this));
    _this.alwaysValidDate = _this.alwaysValidDate.bind(_assertThisInitialized(_this));
    _this.handleClickOutside = _this.handleClickOutside.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DateTimePickerMonths, [{
    key: "renderMonths",
    value: function renderMonths() {
      var date = this.props.selectedDate;
      var month = this.props.viewDate.month();
      var year = this.props.viewDate.year();
      var rows = [];
      var i = 0;
      var months = [];
      var renderer = this.props.renderMonth || this.renderMonth;
      var isValid = this.props.isValidDate || this.alwaysValidDate;
      var classes;
      var props;
      var currentMonth;
      var isDisabled;
      var noOfDaysInMonth;
      var daysInMonth;
      var validDay; // Date is irrelevant because we're only interested in month

      var irrelevantDate = 1;

      while (i < 12) {
        classes = styles.rdtMonth;
        currentMonth = this.props.viewDate.clone().set({
          year: year,
          month: i,
          date: irrelevantDate
        });
        noOfDaysInMonth = currentMonth.endOf('month').format('D');
        daysInMonth = Array.from({
          length: noOfDaysInMonth
        }, function (e, i) {
          return i + 1;
        });
        validDay = daysInMonth.find(function (d) {
          var day = currentMonth.clone().set('date', d);
          return isValid(day);
        });
        isDisabled = validDay === undefined;

        if (isDisabled) {
          classes += " ".concat(styles.rdtDisabled);
        }

        if (date && i === month && year === date.year()) {
          classes += " ".concat(styles.rdtActive);
        }

        props = {
          key: i,
          'data-value': i,
          className: classes
        };

        if (!isDisabled) {
          props.onClick = this.props.updateOn === 'months' ? this.updateSelectedMonth : this.props.setDate('month');
        }

        months.push(renderer(props, i, year, date && date.clone()));

        if (months.length === 4) {
          rows.push(_react.default.createElement("tr", {
            key: "".concat(month, "_").concat(rows.length)
          }, months));
          months = [];
        }

        i++;
      }

      return rows;
    }
  }, {
    key: "updateSelectedMonth",
    value: function updateSelectedMonth(event) {
      this.props.updateSelectedDate(event);
    }
  }, {
    key: "renderMonth",
    value: function renderMonth(props, month) {
      var localMoment = this.props.viewDate;
      var monthStr = localMoment.localeData().monthsShort(localMoment.month(month));
      var strLength = 3; // Because some months are up to 5 characters long, we want to
      // use a fixed string length for consistency

      var monthStrFixedLength = monthStr.substring(0, strLength);
      return _react.default.createElement("td", props, capitalize(monthStrFixedLength));
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
      return _react.default.createElement("div", {
        className: styles.rdtMonths
      }, _react.default.createElement("table", {
        key: "a"
      }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", {
        key: "prev",
        className: styles.rdtPrev
      }, _react.default.createElement("span", {
        onClick: this.props.subtractTime(1, 'years')
      }, "\u2039")), _react.default.createElement("th", {
        key: "year",
        className: styles.rdtSwitch,
        onClick: this.props.showView('years'),
        colSpan: "2",
        "data-value": this.props.viewDate.year()
      }, this.props.viewDate.year()), _react.default.createElement("th", {
        key: "next",
        className: styles.rdtNext
      }, _react.default.createElement("span", {
        onClick: this.props.addTime(1, 'years')
      }, "\u203A"))))), _react.default.createElement("table", {
        key: "months"
      }, _react.default.createElement("tbody", {
        key: "b"
      }, this.renderMonths())));
    }
  }]);

  return DateTimePickerMonths;
}(_react.PureComponent);

Object.defineProperty(DateTimePickerMonths, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    selectedDate: _propTypes.default.any,
    viewDate: _propTypes.default.any,
    renderMonth: _propTypes.default.any,
    isValidDate: _propTypes.default.any,
    updateOn: _propTypes.default.any,
    updateSelectedDate: _propTypes.default.any,
    handleClickOutside: _propTypes.default.any,
    subtractTime: _propTypes.default.any,
    showView: _propTypes.default.any,
    addTime: _propTypes.default.any,
    setDate: _propTypes.default.any
  }
});

var _default = (0, _reactOnclickoutside.default)(DateTimePickerMonths);

exports.default = _default;