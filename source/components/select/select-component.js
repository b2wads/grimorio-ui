import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Option from './elements/option';
import { FormControlLabel } from '../form';
import Icon from '../icon';

import styles from './select.styl';

class Select extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedName: null,
      selectedValue: null,
      menuOpen: false,
      activeLabel: false,
    };

    this.onSelectItem = this.onSelectItem.bind(this);
    this.verifyClickOutside = this.verifyClickOutside.bind(this);
  }

  static propTypes = {
    items: PropTypes.array,
    label: PropTypes.string,
    onSelect: PropTypes.func,
    type: PropTypes.oneOf(['select', 'dropdown']),
    dropDownButton: PropTypes.element,
    position: PropTypes.oneOf(['top', 'bottom']),
    open: PropTypes.bool,
    closeOnClickOutside: PropTypes.bool,
    onClickOutside: PropTypes.func,
  };

  static defaultProps = {
    items: [],
    type: 'select',
    position: 'top',
    open: null,
    closeOnClickOutside: true,
  };

  componentWillMount() {
    const { closeOnClickOutside } = this.props;
    closeOnClickOutside && document.addEventListener('click', this.verifyClickOutside, false);
  }

  componentWillUnmount() {
    const { closeOnClickOutside } = this.props;
    closeOnClickOutside && document.removeEventListener('click', this.verifyClickOutside, false);
  }

  verifyClickOutside(e) {
    const { selectedName } = this.state;

    if (!this.selectWrap.contains(e.target)) {
      this.setState({
        menuOpen: false,
        activeLabel: selectedName ? true : false,
      });

      this.props.onClickOutside(this.state.menuOpen);
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
    return () =>
      this.setState({
        activeLabel: true,
        menuOpen: !menuOpen,
      });
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      if (child.type.prototype === Option.prototype) {
        return React.cloneElement(child, {
          onSelect: this.onSelectItem,
          selected: this.state.selectedValue === child.props.value,
        });
      }
    });
  }

  renderButton() {
    const { type, label, dropDownButton } = this.props;
    const { selectedName, activeLabel } = this.state;

    if (type === 'select') {
      return (
        <span className={styles.button}>
          <FormControlLabel
            activeLabel={activeLabel}
            label={label}
            type="text"
            value={selectedName}
            onClick={this.toggleOptions()}
          />
          <Icon className={styles.arrow} name="arrow_drop_down" size={20} />
        </span>
      );
    } else if (type === 'dropdown') {
      return (
        <span className={styles.button} onClick={this.toggleOptions()}>
          {dropDownButton}
        </span>
      );
    }
  }

  render() {
    const { items, position, open, className, ...elementProps } = this.props;
    const { selectedValue, menuOpen } = this.state;
    const menuStyle = classNames(styles.menu, {
      [styles.isOpen]: open !== null ? open : menuOpen,
      [styles.isBottom]: position === 'bottom',
    });

    return (
      <div ref={el => (this.selectWrap = el)} className={classNames(styles.selectWrap, className)} {...elementProps}>
        {this.renderButton()}

        <ul className={menuStyle}>
          {items.length
            ? items.map(option => (
                <Option
                  icon={option.icon}
                  selected={selectedValue === option.value}
                  onSelect={this.onSelectItem}
                  value={option.value}
                >
                  {option.name}
                </Option>
              ))
            : this.renderChildren()}
        </ul>
      </div>
    );
  }
}

export default CSSModules(Select, styles);
