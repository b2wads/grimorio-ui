import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
// import classNames from 'classnames';

import styles from './page-title.styl';

import Panel from '../panel';

class PageTitle extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    sideComponent: PropTypes.element,
  };

  render() {
    const { title, sideComponent, ...elementProps } = this.props;

    return (
      <Panel size="small" contentClassName={styles.titleWrap} {...elementProps}>
        <h1 className={styles.title}>{title}</h1>
        {sideComponent ? <div className={styles.sideComponent}>{sideComponent}</div> : ''}
      </Panel>
    );
  }
}

export default CSSModules(PageTitle, styles);
