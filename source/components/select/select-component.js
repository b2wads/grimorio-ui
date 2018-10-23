import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import SelectOption from './elements/select-option';
import Icon from '../icon';

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
    };

    this.onSelectItem = this.onSelectItem.bind(this);
    this.verifyClickOutside = this.verifyClickOutside.bind(this);
    this.selectWrap = null;
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
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.menuOpen !== this.state.menuOpen ||
      nextState.selectedValue !== this.state.selectedValue ||
      nextProps.value !== this.props.value ||
      nextProps.items.length !== this.props.items.length ||
      nextProps.open !== this.props.open
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

  verifyClickOutside(e) {
    const { selectedName } = this.state;

    if (this.selectWrap && !this.selectWrap.contains(e.target)) {
      this.setState({
        menuOpen: false,
        activeLabel: selectedName ? true : false,
      });

      this.props.onClickOutside && this.props.onClickOutside(this.state.menuOpen);
    }
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
    };
  }

  toggleOptions() {
    const { menuOpen } = this.state;
    const { disabled } = this.props;
    this.list && (this.list.scrollTop = 0);
    return () =>
      !disabled &&
      this.setState({
        activeLabel: true,
        menuOpen: !menuOpen,
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

    !this.state.childItems.length && this.setState({ childItems });
  }

  sortItems(items, value) {
    return items.reduce((acc, item) => {
      if (item.value === value) {
        return [item, ...acc];
      }
      return [...acc, item];
    }, []);
  }

  renderInput() {
    const { selectedName, activeLabel } = this.state;
    const { placeholder, disabled, inputClassName } = this.props;
    const fieldClasses = classNames(styles.input, inputClassName, {
      [styles.isPlaceholder]: selectedName === null,
      [styles.isActive]: activeLabel,
      [styles.isDisabled]: disabled,
    });

    return (
      <div onClick={this.toggleOptions()} className={fieldClasses}>
        {selectedName || placeholder}
      </div>
    );
  }

  renderButton(type, label, menuButton) {
    const { activeLabel } = this.state;
    const labelClasses = classNames(styles.label, {
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

  cleanProps(elementProps) {
    delete elementProps.closeOnClickOutside;
    delete elementProps.onClickOutside;
    return elementProps;
  }

  render() {
    const {
      items,
      position,
      open,
      height,
      className,
      type,
      label,
      menuButton,
      sortItems,
      ...elementProps
    } = this.props;
    const { selectedValue, menuOpen, childItems } = this.state;
    const renderItems = items.length ? items : childItems;
    const sortedItems = sortItems ? this.sortItems(renderItems, selectedValue) : renderItems;

    const menuStyle = classNames(styles.menu, {
      [styles.isOpen]: open !== null ? open : menuOpen,
      [styles.isBottom]: position === 'bottom',
      [styles.isUnder]: position === 'under',
      [styles.isScroll]: height !== 'auto',
    });

    return (
      <div
        ref={el => (this.selectWrap = el)}
        className={classNames(styles.selectWrap, className)}
        {...this.cleanProps(elementProps)}
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
            >
              {option.name}
            </SelectOption>
          ))}
        </ul>
      </div>
    );
  }
}

export default CSSModules(Select, styles);
