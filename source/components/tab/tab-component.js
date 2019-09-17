import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { debounced } from '../../helpers';

import Tab from './elements/tab';

import styles from './tab.styl';

class TabMenu extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      activeTab: props.defaultActive,
      activeTabIndex: this.getFirstValueIndex(props),
      indicator: {
        width: 0,
        left: 0,
      },
    };

    this.generateIndicatorPosition = this.generateIndicatorPosition.bind(this);
    this.getCurrentIndicator = this.getCurrentIndicator.bind(this);
    this.list = React.createRef();

    this.debouncedIndicatorResize = debounced(this.getCurrentIndicator, 50);
  }

  static propTypes = {
    active: PropTypes.string,
    defaultActive: PropTypes.string,
    onChange: PropTypes.func,
    icon: PropTypes.string,
    tabs: PropTypes.array,
    activeStyle: PropTypes.oneOf(['primary', 'secondary']),
    tabDisplay: PropTypes.oneOf(['inline', 'center', 'full']),
    listClassName: PropTypes.string,
    itemClassName: PropTypes.string,
  };

  static defaultProps = {
    activeStyle: 'primary',
    tabDisplay: 'inline',
    tabs: [],
  };

  componentDidMount() {
    this.getCurrentIndicator();
    window.addEventListener('resize', this.debouncedIndicatorResize);
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.debouncedIndicatorResize);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.active !== this.props.active) {
      const { tabs, children, active } = this.props;
      const index = this.getValueIndex(tabs, children, active);
      this.generateIndicatorPosition(index);
    }
  }

  getValueIndex(tabs, children, value) {
    if (tabs.length) {
      return tabs.findIndex(singleTab => value === singleTab.id);
    } else if (children) {
      return children.findIndex(childTab => value === childTab.props.id);
    }
    return -1;
  }

  getFirstValueIndex(props) {
    const { tabs, children, active, defaultActive } = props;
    const firstActive = active || defaultActive;
    return this.getValueIndex(tabs, children, firstActive);
  }

  onChange(id, value, index) {
    return () => {
      if (!this.props.active) {
        this.setState({ activeTab: id, activeTabIndex: index }, () => {
          this.getCurrentIndicator();
        });
      }

      this.props.onChange(id, value);
    };
  }

  hydrateChildren(children) {
    const { activeTab } = this.state;
    const { active, activeStyle, itemClassName } = this.props;
    const finalActive = active || activeTab;

    return React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        ...child.props,
        onClick: this.onChange(child.props.id, child.props.value, index),
        className: cx(styles.item, itemClassName, child.props.className, {
          [styles.isActive]: child.props.id === finalActive,
          [styles[activeStyle]]: activeStyle,
        }),
      })
    );
  }

  generateChildren(array) {
    const { activeTab } = this.state;
    const { active, itemClassName, activeStyle } = this.props;
    const finalActive = active || activeTab;

    return array.map((tabValue, index) => (
      <Tab
        {...tabValue}
        key={tabValue.id}
        onClick={this.onChange(tabValue.id, tabValue.value, index)}
        className={cx(styles.item, itemClassName, {
          [styles.isActive]: tabValue.id === finalActive,
          [styles[activeStyle]]: activeStyle,
        })}
      >
        {tabValue.content}
      </Tab>
    ));
  }

  generateIndicatorPosition(index) {
    const list = this.list ? this.list.current : null;

    if (list && index !== -1) {
      const currentNode = list.childNodes[index];
      const { left: listLeft } = list.getBoundingClientRect();
      const { width, left } = currentNode.getBoundingClientRect();

      this.setState({
        indicator: {
          width,
          left: left - listLeft,
        },
      });
    }
  }

  getCurrentIndicator() {
    this.generateIndicatorPosition(this.state.activeTabIndex);
  }

  render() {
    const { tabs, tabDisplay, activeStyle, className, listClassName, children } = this.props;
    const { indicator } = this.state;
    const listFullClass = cx(listClassName, styles.list, {
      [styles[tabDisplay]]: tabDisplay,
    });

    const indicatorClass = cx(styles.indicator, {
      [styles[activeStyle]]: activeStyle,
    });

    return (
      <nav className={cx(className, styles.wrap)}>
        <ul className={listFullClass} ref={this.list}>
          {tabs.length ? this.generateChildren(tabs) : null}
          {children && this.hydrateChildren(children)}
        </ul>
        {indicator.width ? <span style={indicator} className={indicatorClass} /> : null}
      </nav>
    );
  }
}

export default TabMenu;
