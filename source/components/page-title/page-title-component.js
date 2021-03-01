import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import styles from './page-title.styl';

import Panel from '../panel';

class PageTitle extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    sideComponent: PropTypes.element,
    isMobile: PropTypes.bool,
  };

  render() {
    const { title, sideComponent, isMobile, ...elementProps } = this.props;

    const checkIsMobile = cx(styles.titleWrap, {
      [styles.isMobile]: isMobile,
    });

    return (
      <Panel size="small" contentClassName={checkIsMobile} {...elementProps}>
        <h1 className={styles.title}>{title}</h1>
        {sideComponent ? <div>{sideComponent}</div> : ''}
      </Panel>
    );
  }
}

export default PageTitle;
