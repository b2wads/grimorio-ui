import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import SelectOption from './elements/select-option';
import Icon from '../icon';

import { omit } from '../../helpers';

import styles from './select.styl';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedName: null,
      selectedValue: null,
      menuOpen: false,
      activeLabel: !!props.value || !!props.defaultValue,
      childItems: [],
      filteredItems: [],
    };

    this.onSelectItem = this.onSelectItem.bind(this);
    this.verifyClickOutside = this.verifyClickOutside.bind(this);
    this.closeSelect = this.closeSelect.bind(this);
    this.filterInput = this.filterInput.bind(this);
    this.selectWrap = null;
    this.inputFilter = null;
  }

  static propTypes = {
    items: PropTypes.array,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onSelect: PropTypes.func,
    type: PropTypes.oneOf(['select', 'menu']),
    menuButton: PropTypes.element,
    position: PropTypes.oneOf(['top', 'bottom', 'under']),
    height: PropTypes.string,
    open: PropTypes.bool,
    closeOnClickOutside: PropTypes.bool,
    onClickOutside: PropTypes.func,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    inputClassName: PropTypes.string,
    sortItems: PropTypes.bool,
    isMobile: PropTypes.bool,
    active: PropTypes.bool,
    noCurrentValue: PropTypes.bool,
    hasFilter: PropTypes.bool,
  };

  static defaultProps = {
    items: [],
    type: 'select',
    position: 'top',
    open: null,
    closeOnClickOutside: true,
    disabled: false,
    height: 'auto',
    value: false,
    sortItems: true,
    isMobile: false,
    hasFilter: false,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.activeLabel !== this.state.activeLabel ||
      nextState.menuOpen !== this.state.menuOpen ||
      nextState.selectedValue !== this.state.selectedValue ||
      nextState.filteredItems !== this.state.filteredItems ||
      nextProps.value !== this.props.value ||
      nextProps.items.length !== this.props.items.length ||
      nextProps.open !== this.props.open ||
      nextProps.disabled !== this.props.disabled
    );
  }

  componentWillMount() {
    const { closeOnClickOutside, items } = this.props;
    !items.length && this.getChildren();
    closeOnClickOutside && document.addEventListener('click', this.verifyClickOutside, false);
  }

  componentWillUnmount() {
    const { closeOnClickOutside } = this.props;
    closeOnClickOutside && document.removeEventListener('click', this.verifyClickOutside, false);
  }

  componentDidMount() {
    const { defaultValue, value } = this.props;
    const initialValue = value || defaultValue;
    this.getSelectedValue(initialValue) &&
      this.setState({
        selectedName: this.getSelectedValue(initialValue)['name'],
        selectedValue: this.getSelectedValue(initialValue)['value'],
      });
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;
    if (this.props.value !== prevProps.value) {
      this.setState({
        activeLabel: true,
        selectedName: this.getSelectedValue(value) ? this.getSelectedValue(value)['name'] : null,
        selectedValue: this.getSelectedValue(value) ? this.getSelectedValue(value)['value'] : null,
      });
    }
  }

  getSelectedValue(selectedValue) {
    const { items } = this.props;
    const { childItems } = this.state;
    const selectItems = items.length ? items : childItems;

    const currentOption = selectItems.filter(option => option.value === selectedValue);
    const [currentOptionValues] = currentOption;

    return currentOption.length ? currentOptionValues : false;
  }

  clearFilterInput() {
    const { items } = this.props;
    const { childItems } = this.state;

    if (this.inputFilter) {
      this.setState({ filteredItems: items.length ? items : childItems });
      this.inputFilter.value = null;
    }
  }

  verifyClickOutside(e) {
    if (this.selectWrap && !this.selectWrap.contains(e.target)) {
      this.closeSelect();
      this.clearFilterInput();
      this.props.onClickOutside && this.props.onClickOutside(this.state.menuOpen);
    }
  }

  closeSelect() {
    const { selectedName } = this.state;

    this.clearFilterInput();
    this.setState({
      menuOpen: false,
      activeLabel: selectedName ? true : false,
    });
  }

  onSelectItem({ name, value }) {
    return () => {
      const selectedState = {
        menuOpen: false,
      };

      if (this.props.type === 'select' && this.props.value === false) {
        selectedState.activeLabel = true;
        selectedState.selectedName = name;
        selectedState.selectedValue = value;
      }

      this.setState(selectedState, this.props.onSelect({ name, value }, false));
      this.clearFilterInput();
    };
  }

  toggleOptions() {
    const { disabled } = this.props;
    this.list && (this.list.scrollTop = 0);
    return () =>
      !disabled &&
      this.setState({
        activeLabel: true,
        menuOpen: true,
      });
  }

  getChildren() {
    let childItems = [];

    React.Children.forEach(this.props.children, child => {
      childItems.push({
        value: child.props.value,
        icon: child.props.icon,
        name: child.props.children,
      });
    });

    !this.state.childItems.length && this.setState({ childItems, filteredItems: childItems });
  }

  sortItems(items, value) {
    return items.reduce((acc, item) => {
      if (item.value === value) {
        return [item, ...acc];
      }
      return [...acc, item];
    }, []);
  }

  filterInput(event) {
    const { items } = this.props;
    const { childItems } = this.state;
    const { value } = event.target;

    const itemsToFilter = items.length ? items : childItems;

    const filteredItems = itemsToFilter.filter(item => {
      const itemLowercase = item.name.toLowerCase();

      return item.name.includes(value) || itemLowercase.includes(value);
    });

    this.setState({ filteredItems });
  }

  renderInput() {
    const { selectedName, menuOpen } = this.state;
    const { placeholder, disabled, inputClassName, active, hasFilter } = this.props;
    const fieldClasses = cx(styles.input, inputClassName, {
      [styles.isPlaceholder]: selectedName === null,
      [styles.isActive]: active,
      [styles.isDisabled]: disabled,
    });

    return (
      <div onClick={this.toggleOptions()} className={fieldClasses}>
        {hasFilter && menuOpen
          ? <input
              ref={el => (this.inputFilter = el)}
              className={styles.filterInput}
              onChange={this.filterInput}
              placeholder="Filtrar"
              autoFocus
            />
          : selectedName || placeholder}
      </div>
    );
  }

  renderButton(type, label, menuButton) {
    const { activeLabel } = this.state;
    const labelClasses = cx(styles.label, {
      [styles.isActive]: activeLabel,
    });

    if (type === 'select' && label) {
      return (
        <React.Fragment>
          <div className={styles.labelWrapper}>
            <span className={labelClasses}>{label}</span>
            {this.renderInput()}
          </div>
          <Icon className={styles.arrow} name="arrow_drop_down" size={20} />
        </React.Fragment>
      );
    } else if (type === 'select') {
      return (
        <React.Fragment>
          {this.renderInput()}
          <Icon className={styles.arrow} name="arrow_drop_down" size={20} />
        </React.Fragment>
      );
    } else if (type === 'menu') {
      return menuButton;
    }
  }

  render() {
    const {
      position,
      open,
      height,
      className,
      type,
      label,
      menuButton,
      sortItems,
      isMobile,
      outline,
      noCurrentValue,
      hasFilter,
      ...elementProps
    } = this.props;
    const { selectedValue, menuOpen, filteredItems } = this.state;
    const isOpen = open !== null ? open : menuOpen;
    const renderItems = filteredItems;
    const sortedItems = sortItems ? this.sortItems(renderItems, selectedValue) : renderItems;

    const menuStyle = cx(styles.menu, {
      [styles.isOpen]: isOpen,
      [styles.isBottom]: position === 'bottom',
      [styles.isUnder]: position === 'under',
      [styles.isScroll]: height !== 'auto',
      [styles.isMobile]: isMobile,
      [styles.hasFilter]: hasFilter,
    });

    const selectStyles = cx(styles.selectWrap, className, {
      [styles.isOutline]: outline,
    });

    return (
      <div
        ref={el => (this.selectWrap = el)}
        className={selectStyles}
        {...omit(elementProps, ['closeOnClickOutside', 'onClickOutside'])}
      >
        <span onClick={this.toggleOptions()} className={styles.button}>
          {this.renderButton(type, label, menuButton)}
        </span>

        <ul ref={list => (this.list = list)} style={{ height }} className={menuStyle}>
          {sortedItems.map(option => (
            <SelectOption
              key={option.value}
              icon={option.icon}
              selected={selectedValue === option.value}
              onSelect={this.onSelectItem}
              value={option.value}
              noCurrentValue={noCurrentValue && selectedValue === option.value}
            >
              {option.name}
            </SelectOption>
          ))}
        </ul>

        {isMobile && <div onClick={this.closeSelect} className={cx(styles.overlay, { [styles.isOpen]: isOpen })} />}
      </div>
    );
  }
}

export default Select;
