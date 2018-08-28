import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Option from './elements/option';

import styles from './select.styl';

class Select extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedName: this.props.initialValue,
      selectedValue: null,
      open: false,
    };

    this.onSelectItem = this.onSelectItem.bind(this);
  }

  static propTypes = {
    items: PropTypes.array,
    initialValue: PropTypes.string,
    onSelect: PropTypes.func,
    type: PropTypes.oneOf(['select', 'dropdown']),
  };

  static defaultProps = {
    items: [],
    initialValue: 'Selecione',
    type: 'select',
  };

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

  render() {
    const { items } = this.props;
    const { selectedName, selectedValue, open } = this.state;

    return (
      <div>
        <span className={styles.button} onClick={this.toggleOptions()}>
          {selectedName}
        </span>

        <ul className={classNames(styles.menu, { [styles.isOpen]: open })}>
          {items.length
            ? items.map(option => (
                <Option selected={selectedValue === option.value} onSelect={this.onSelectItem} value={option.value}>
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
