import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Tab from './elements/tab';

import styles from './tab.styl';

class TabMenu extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      activeTab: props.active,
      activeTabIndex: this.getFirstIndex(props),
      indicator: {
        width: 0,
        left: 0,
      },
    };

    this.generateIndicatorPosition = this.generateIndicatorPosition.bind(this);
    this.list = React.createRef();
  }

  static propTypes = {
    active: PropTypes.string,
    onChange: PropTypes.func,
    iconLeft: PropTypes.string,
    iconTop: PropTypes.string,
    tabs: PropTypes.array,
    activeStyle: PropTypes.oneOf(['primary', 'secondary']),
    layout: PropTypes.oneOf(['stretch', 'auto']),
    listClassName: PropTypes.string,
    itemClassName: PropTypes.string,
  };

  static defaultProps = {
    activeStyle: 'primary',
    layout: 'stretch',
    tabs: [],
  };

  componentDidMount() {
    this.generateIndicatorPosition();
    window.addEventListener('resize', this.generateIndicatorPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.generateIndicatorPosition);
  }

  getFirstIndex(props) {
    const { active, tabs, children } = props;

    if (tabs.length) {
      return tabs.findIndex(singleTab => active === singleTab.id);
    } else if (children) {
      return children.findIndex(childTab => active === childTab.props.id);
    }

    return -1;
  }

  onChange(id, value, activeTabIndex) {
    return () => {
      this.setState({ activeTab: id, activeTabIndex }, () => {
        this.generateIndicatorPosition();
      });
      this.props.onChange(id, value);
    };
  }

  hydrateChildren(children) {
    const { activeTab } = this.state;
    const { activeStyle, itemClassName } = this.props;

    return React.Children.map(children, (child, idx) =>
      React.cloneElement(child, {
        onClick: this.onChange(child.props.id, child.props.value, idx),
        key: child.props.id,
        className: cx(styles.item, itemClassName, {
          [styles.isActive]: child.props.id === activeTab,
          [styles[activeStyle]]: activeStyle,
        }),
      })
    );
  }

  generateChildren(array) {
    const { activeTab } = this.state;
    const { itemClassName, activeStyle } = this.props;

    return array.map((tabValue, idx) => (
      <Tab
        key={tabValue.id}
        {...tabValue}
        onClick={this.onChange(tabValue.id, tabValue.value, idx)}
        className={cx(styles.item, itemClassName, {
          [styles.isActive]: tabValue.id === activeTab,
          [styles[activeStyle]]: activeStyle,
        })}
      >
        {tabValue.content}
      </Tab>
    ));
  }

  generateIndicatorPosition() {
    const { activeTabIndex } = this.state;
    const list = this.list ? this.list.current : null;

    if (list && activeTabIndex !== -1) {
      const currentNode = list.childNodes[activeTabIndex];
      const { width, left } = currentNode.getBoundingClientRect();

      this.setState({
        indicator: {
          width,
          left: left - 10,
        },
      });
    }
  }

  render() {
    const { tabs, layout, activeStyle, className, listClassName, children } = this.props;
    const { indicator } = this.state;
    const wrapClassName = cx(className, styles.wrap);
    const listFullClass = cx(listClassName, styles.list, {
      [styles[layout]]: layout,
    });

    const indicatorClass = cx(styles.indicator, {
      [styles[activeStyle]]: activeStyle,
    });

    return (
      <nav className={wrapClassName}>
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
