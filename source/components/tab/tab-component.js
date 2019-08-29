import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Tab from './elements/tab';

import styles from './tab.styl';

class TabMenu extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      activeTab: props.active,
    };
  }
  static propTypes = {
    active: PropTypes.string,
    onChange: PropTypes.func,
    iconLeft: PropTypes.string,
    iconTop: PropTypes.string,
    tabs: PropTypes.array,
    layout: PropTypes.oneOf(['fixed', 'scroll']),
  };

  static defaultProps = {
    layout: 'scroll',
  };

  onChange(id, value) {
    return () => {
      this.setState({ activeTab: id });
      this.props.onChange(id, value);
    };
  }

  hydrateChildren(children) {
    const { activeTab } = this.state;
    console.log('>>>>>>>>>>', activeTab);

    return React.Children.map(children, child =>
      React.cloneElement(child, {
        active: child.props.id === activeTab,
        onClick: this.onChange(child.props.id, child.props.value),
      })
    );
  }

  generateChildren(array) {
    const { activeTab } = this.state;

    return array.map(tabValue => (
      <Tab {...tabValue} active={tabValue.id === activeTab} onClick={this.onChange(tabValue.id, tabValue.value)}>
        {tabValue.content}
      </Tab>
    ));
  }

  render() {
    const { tabs, children } = this.props;
    return (
      <nav>
        <ul>
          {tabs && this.generateChildren(tabs)}
          {children && this.hydrateChildren(children)}
        </ul>
      </nav>
    );
  }
}

export default CSSModules(TabMenu, styles);
