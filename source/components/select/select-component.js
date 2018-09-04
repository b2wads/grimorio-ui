import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import SelectOption from './elements/select-option';
import Icon from '../icon';

import styles from './select.styl';

class Select extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedName: this.getDefaultValue() ? this.getDefaultValue()['name'] : null,
      selectedValue: this.getDefaultValue() ? this.getDefaultValue()['value'] : null,
      menuOpen: false,
      activeLabel: !!this.props.defaultValue,
    };

    this.onSelectItem = this.onSelectItem.bind(this);
    this.verifyClickOutside = this.verifyClickOutside.bind(this);
    this.selectWrap = '';
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
    defaultValue: PropTypes.string,
  };

  static defaultProps = {
    items: [],
    type: 'select',
    position: 'top',
    open: null,
    closeOnClickOutside: true,
    disabled: false,
    height: 'inherit',
  };

  componentWillMount() {
    const { closeOnClickOutside } = this.props;
    closeOnClickOutside && document.addEventListener('click', this.verifyClickOutside, false);
  }

  componentWillUnmount() {
    const { closeOnClickOutside } = this.props;
    closeOnClickOutside && document.removeEventListener('click', this.verifyClickOutside, false);
  }

  getDefaultValue() {
    const { items, defaultValue, children } = this.props;
    const childrenItems = React.Children.toArray(children);
    let currentOption = [];
    let currentOptionValues = {};

    if (childrenItems.length) {
      currentOption = childrenItems.filter(child => child.props.value === defaultValue);
      currentOptionValues = {
        value: currentOption.length ? currentOption[0].props.value : null,
        name: currentOption.length ? currentOption[0].props.children : null,
      };
    } else if (items.length) {
      currentOption = items.filter(option => option.value === defaultValue);
      [currentOptionValues] = currentOption;
    }

    return currentOption.length ? currentOptionValues : false;
  }

  verifyClickOutside(e) {
    const { selectedName } = this.state;

    if (!this.selectWrap.contains(e.target)) {
      this.setState({
        menuOpen: false,
        activeLabel: selectedName ? true : false,
      });

      this.props.onClickOutside && this.props.onClickOutside(this.state.menuOpen);
    }
  }

  onSelectItem({ name, value }) {
    const { menuOpen } = this.state;

    return () => {
      const selectedState = {
        menuOpen: !menuOpen,
      };

      if (this.props.type === 'select') {
        selectedState.activeLabel = true;
        selectedState.selectedName = name;
        selectedState.selectedValue = value;
      }

      this.setState(selectedState, this.props.onSelect({ name, value }, menuOpen));
    };
  }

  toggleOptions() {
    const { menuOpen } = this.state;
    const { disabled } = this.props;
    return () =>
      !disabled &&
      this.setState({
        activeLabel: true,
        menuOpen: !menuOpen,
      });
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        onSelect: this.onSelectItem,
        selected: this.state.selectedValue === child.props.value,
      });
    });
  }

  renderInput() {
    const { selectedName, activeLabel } = this.state;
    const { placeholder, disabled } = this.props;
    const fieldClasses = classNames(styles.input, {
      [styles.isPlaceholder]: !selectedName,
      [styles.isActive]: activeLabel,
      [styles.isDisabled]: disabled,
    });

    return (
      <div onClick={this.toggleOptions()} className={fieldClasses}>
        {selectedName || placeholder}
      </div>
    );
  }

  renderButton() {
    const { type, label, menuButton } = this.props;
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

  render() {
    const { items, position, open, height, className, ...elementProps } = this.props;
    const { selectedValue, menuOpen } = this.state;
    const menuStyle = classNames(styles.menu, {
      [styles.isOpen]: open !== null ? open : menuOpen,
      [styles.isBottom]: position === 'bottom',
      [styles.isUnder]: position === 'under',
      [styles.isScroll]: height !== 'inherit',
    });

    return (
      <div ref={el => (this.selectWrap = el)} className={classNames(styles.selectWrap, className)} {...elementProps}>
        <span onClick={this.toggleOptions()} className={styles.button}>
          {this.renderButton()}
        </span>

        <ul style={{ height }} className={menuStyle}>
          {items.length
            ? items.map(option => (
                <SelectOption
                  key={option.value}
                  icon={option.icon}
                  selected={selectedValue === option.value}
                  onSelect={this.onSelectItem}
                  value={option.value}
                >
                  {option.name}
                </SelectOption>
              ))
            : this.renderChildren()}
        </ul>
      </div>
    );
  }
}

export default CSSModules(Select, styles);
