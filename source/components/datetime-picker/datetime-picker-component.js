import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CSSModules from 'react-css-modules';
// components
import FormControl from '../form-control';
import Icon from '../icon';
import Calendar from './calendar';
// styles
import styles from './datetime-picker.styl';

const nof = () => {};

class DatetimePicker extends PureComponent {
  constructor(props) {
    super(props);

    this.getStateFromProps = this.getStateFromProps.bind(this);
    this.getUpdateOn = this.getUpdateOn.bind(this);
    this.getFormats = this.getFormats.bind(this);
    this.addTime = this.addTime.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.subtractTime = this.subtractTime.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputKey = this.onInputKey.bind(this);
    this.showView = this.showView.bind(this);
    this.setTime = this.setTime.bind(this);
    this.updateSelectedDate = this.updateSelectedDate.bind(this);
    this.openCalendar = this.openCalendar.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
    this.localMoment = this.localMoment.bind(this);
    this.getComponentProps = this.getComponentProps.bind(this);
    this.setDate = this.setDate.bind(this);

    this.allowedSetTime = ['hours', 'minutes', 'seconds', 'milliseconds'];

    this.componentProps = {
      fromProps: ['value', 'isValidDate', 'renderDay', 'renderMonth', 'renderYear', 'timeConstraints'],
      fromState: ['viewDate', 'selectedDate', 'updateOn'],
      fromThis: [
        'setDate',
        'setTime',
        'showView',
        'addTime',
        'subtractTime',
        'updateSelectedDate',
        'localMoment',
        'handleClickOutside',
      ],
    };

    this.state = this.getStateFromProps(this.props);
  }

  static propTypes = {
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    locale: PropTypes.string,
    utc: PropTypes.bool,
    input: PropTypes.bool,
    inputProps: PropTypes.object,
    timeConstraints: PropTypes.object,
    viewMode: PropTypes.oneOf(['years', 'months', 'days', 'time']),
    isValidDate: PropTypes.func,
    open: PropTypes.bool,
    strictParsing: PropTypes.bool,
    closeOnSelect: PropTypes.bool,
    closeOnTab: PropTypes.bool,
    value: PropTypes.any,
    dateFormat: PropTypes.any,
    className: PropTypes.string,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
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
    utc: false,
  };

  componentWillMount() {
    if (this.state.open === undefined) {
      this.setState({
        open: !this.props.input,
      });
    }

    this.setState({
      currentView: this.props.dateFormat ? this.props.viewMode || this.state.updateOn || 'days' : 'time',
    });
  }

  getStateFromProps(props) {
    let formats = this.getFormats(props);
    let date = props.value || props.defaultValue;
    let selectedDate;
    let viewDate;
    let updateOn;
    let inputValue;

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
      open: props.open,
    };
  }

  getUpdateOn(formats) {
    if (formats.date.match(/[lLD]/)) {
      return 'days';
    } else if (formats.date.indexOf('M') !== -1) {
      return 'months';
    } else if (formats.date.indexOf('Y') !== -1) {
      return 'years';
    }

    return 'days';
  }

  getFormats(props) {
    let formats = {
      date: props.dateFormat || '',
      time: props.timeFormat || '',
    };
    let locale = this.localMoment(props.date, null, props).localeData();

    if (formats.date === true) {
      formats.date = locale.longDateFormat('L');
    } else if (this.getUpdateOn(formats) !== 'days') {
      formats.time = '';
    }

    if (formats.time === true) {
      formats.time = locale.longDateFormat('LT');
    }

    formats.datetime = formats.date && formats.time ? `${formats.date} ${formats.time}` : formats.date || formats.time;

    return formats;
  }

  componentWillReceiveProps(nextProps) {
    let formats = this.getFormats(nextProps);
    let updatedState = {};

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
        let updatedViewDate = this.state.viewDate.clone().locale(nextProps.locale);
        updatedState.viewDate = updatedViewDate;
      }
      if (this.state.selectedDate) {
        let updatedSelectedDate = this.state.selectedDate.clone().locale(nextProps.locale);
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

  onInputChange(e) {
    let value = e.target === null ? e : e.target.value;
    let localMoment = this.localMoment(value, this.state.inputFormat);
    let update = { inputValue: value };

    if (localMoment.isValid() && !this.props.value) {
      update.selectedDate = localMoment;
      update.viewDate = localMoment.clone().startOf('month');
    } else {
      update.selectedDate = null;
    }

    return this.setState(update, () => {
      return this.props.onChange(this.props.name, localMoment.isValid() ? localMoment : this.state.inputValue);
    });
  }

  onInputKey(e) {
    if (e.which === 9 && this.props.closeOnTab) {
      this.closeCalendar();
    }
  }

  showView(view) {
    let me = this;
    return function() {
      me.setState({ currentView: view });
    };
  }

  setDate(type) {
    let nextViews = {
      month: 'days',
      year: 'months',
    };

    return e => {
      this.setState({
        viewDate: this.state.viewDate.clone()[type](parseInt(e.target.getAttribute('data-value'), 10)).startOf(type),
        currentView: nextViews[type],
      });
    };
  }

  addTime(amount, type, toSelected) {
    return this.updateTime('add', amount, type, toSelected);
  }

  subtractTime(amount, type, toSelected) {
    return this.updateTime('subtract', amount, type, toSelected);
  }

  updateTime(op, amount, type, toSelected) {
    let me = this;

    return function() {
      let update = {};
      let date = toSelected ? 'selectedDate' : 'viewDate';

      update[date] = me.state[date].clone()[op](amount, type);

      me.setState(update);
    };
  }

  setTime(type, value) {
    let index = this.allowedSetTime.indexOf(type) + 1;
    let { state } = this;
    let date = (state.selectedDate || state.viewDate).clone();
    let nextType;

    // It is needed to set all the time properties
    // to not to reset the time
    date[type](value);
    for (; index < this.allowedSetTime.length; index++) {
      nextType = this.allowedSetTime[index];
      date[nextType](date[nextType]());
    }

    if (!this.props.value) {
      this.setState({
        selectedDate: date,
        inputValue: date.format(state.inputFormat),
      });
    }
    this.props.onChange(this.props.name, date.format(state.inputFormat));
  }

  updateSelectedDate(e, close) {
    let { target } = e;
    let modifier = 0;
    let { viewDate } = this.state;
    let currentDate = this.state.selectedDate || viewDate;
    let date;

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
      date = viewDate
        .clone()
        .month(currentDate.month())
        .date(currentDate.date())
        .year(parseInt(target.getAttribute('data-value'), 10));
    }

    date
      .hours(currentDate.hours())
      .minutes(currentDate.minutes())
      .seconds(currentDate.seconds())
      .milliseconds(currentDate.milliseconds());

    if (!this.props.value) {
      let open = !(this.props.closeOnSelect && close);
      if (!open) {
        this.props.onBlur(date);
      }

      this.setState({
        selectedDate: date,
        viewDate: date.clone().startOf('month'),
        inputValue: date.format(this.state.inputFormat),
        open: open,
      });
    } else {
      if (this.props.closeOnSelect && close) {
        this.closeCalendar();
      }
    }

    this.props.onChange(this.props.name, date.format(this.state.inputFormat));
  }

  openCalendar() {
    if (!this.state.open) {
      this.setState({ open: true }, () => {
        this.props.onFocus();
      });
    }
  }

  closeCalendar() {
    this.setState({ open: false }, () => {
      this.props.onBlur(this.state.selectedDate || this.state.inputValue);
    });
  }

  handleClickOutside() {
    if (this.props.input && this.state.open && !this.props.open) {
      this.setState({ open: false }, () => {
        this.props.onBlur(this.state.selectedDate || this.state.inputValue);
      });
    }
  }

  localMoment(date, format, props) {
    props = props || this.props;
    let momentFn = props.utc ? moment.utc : moment;
    let m = momentFn(date, format, props.strictParsing);
    if (props.locale) m.locale(props.locale);
    return m;
  }

  getComponentProps() {
    let me = this;
    let formats = this.getFormats(this.props);
    let props = { dateFormat: formats.date, timeFormat: formats.time };

    this.componentProps.fromProps.forEach(function(name) {
      props[name] = me.props[name];
    });
    this.componentProps.fromState.forEach(function(name) {
      props[name] = me.state[name];
    });
    this.componentProps.fromThis.forEach(function(name) {
      props[name] = me[name];
    });

    return props;
  }

  render() {
    const classProp = Array.isArray(this.props.className)
      ? `${this.props.className.map(item => styles[item]).join(' ')}`
      : `${styles[this.props.className]}`;
    const classes = this.props.className ? classProp : '';

    let className = `${styles.rdt} ${classes}`;

    if (!this.props.input) {
      className += ` ${styles.rdtStatic}`;
    }

    if (this.state.open) {
      className += ` ${styles.rdtOpen}`;
    }

    const viewProps = this.getComponentProps();

    return (
      <div className={className}>
        {this.props.input &&
          <FormControl
            {...this.props.inputProps}
            addonAfter={<Icon name={this.props.dateFormat ? 'calendar' : 'clock-o'} color="#fff" />}
            key="i"
            type="text"
            onFocus={this.openCalendar}
            onChange={this.onInputChange}
            onKeyDown={this.onInputKey}
            value={this.state.inputValue}
            placeholder={this.props.placeholder}
            disabled={this.props.disabled}
          />}
        <div key="dt" className={styles.rdtPicker}>
          <Calendar {...viewProps} view={this.state.currentView} onClickOutside={this.handleClickOutside} />
        </div>
      </div>
    );
  }
}

DatetimePicker.moment = moment;

/**
 * @example <DatetimePicker />
 */
export default CSSModules(DatetimePicker, styles);
