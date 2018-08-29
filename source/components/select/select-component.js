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
      open: false,
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
  };

  static defaultProps = {
    items: [],
    type: 'select',
    position: 'top',
  };

  componentWillMount() {
    document.addEventListener('click', this.verifyClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.verifyClickOutside, false);
  }

  verifyClickOutside(e) {
    if (!this.selectWrap.contains(e.target)) {
      this.setState({ open: false });
    }
  }

  onSelectItem({ name, value }) {
    return () => {
      const selectedState = {
        open: !this.state.open,
      };

      if (this.props.type === 'select') {
        selectedState.selectedName = name;
        selectedState.selectedValue = value;
      }

      this.setState(selectedState, this.props.onSelect({ name, value }));
    };
  }

  toggleOptions() {
    return () =>
      this.setState({
        open: !this.state.open,
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
    const { selectedName } = this.state;

    if (type === 'select') {
      return (
        <span className={styles.button}>
          <FormControlLabel label={label} type="text" value={selectedName} onClick={this.toggleOptions()} />
          <Icon className={styles.icon} name="arrow_drop_down" size={20} />
        </span>
      );
    } else if (type === 'dropdown') {
      return (
        <span className={styles.button} onClick={this.toggleOptions()}>
          {dropDownButton}
          <Icon className={styles.icon} name="arrow_drop_down" size={20} />
        </span>
      );
    }
  }

  render() {
    const { items, position, className, ...elementProps } = this.props;
    const { selectedValue, open } = this.state;
    const menuStyle = classNames(styles.menu, {
      [styles.isOpen]: open,
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
