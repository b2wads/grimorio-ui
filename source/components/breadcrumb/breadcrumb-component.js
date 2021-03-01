import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './breadcrumb.styl';

import Icon from '../icon';

class Breadcrumb extends PureComponent {
  static propTypes = {
    path: PropTypes.string.isRequired,
    home: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    path: '/',
  };

  generatePageList() {
    const { path, home } = this.props;
    const list = path.split('/').filter(path => path !== '');
    let fullpath = '';

    let pageList = list.map(page => {
      fullpath += `/${page}`;
      return {
        path: fullpath,
        name: page.replace(/-/g, ' '),
      };
    });

    if (home) {
      pageList = [
        {
          path: '/',
          name: home,
        },
        ...pageList,
      ];
    }

    return pageList;
  }

  renderItems(list, onItemClick) {
    return list.map((item, index) => {
      if (index === 0 && list.length > 1) {
        return (
          <div key={item.path} className={styles.itemWrap}>
            <Icon align="unset" size="16" className={styles.iconHome} name="home" />
            <span className={styles.item} onClick={() => onItemClick(item.path)}>{item.name}</span>
            <Icon size="17" className={styles.icon} name="keyboard_arrow_right" />
          </div>
        );
      } else if (index === list.length - 1 && list.length === 1) {
        return (
          <div key={item.path} className={styles.itemWrap}>
            <Icon align="unset" size="16" className={styles.iconHome} name="home" />
            <span className={styles.itemCurrent}>{item.name}</span>
          </div>
        );
      } else if (index === list.length - 1) {
        return (
          <div key={item.path} className={styles.itemCurrent}>
            <span>{item.name}</span>
          </div>
        );
      }

      return (
        <div key={item.path} className={styles.itemWrap}>
          <span className={styles.item} onClick={() => onItemClick(item.path)}>{item.name}</span>
          <Icon size="17" className={styles.icon} name="keyboard_arrow_right" />
        </div>
      );
    });
  }

  render() {
    const list = this.generatePageList();
    const { className, onItemClick, ...elementProps } = this.props;
    return (
      <div className={classNames(className, styles.list)} {...elementProps}>
        {this.renderItems(list, onItemClick)}
      </div>
    );
  }
}

export default Breadcrumb;
