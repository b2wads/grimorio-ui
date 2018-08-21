import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './info-card.styl';

import { moneyFormat } from '../../helpers';

import Panel from '../panel';

class InfoCard extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    type: PropTypes.oneOf(['alphanum', 'money']),
  };

  static defaultProptypes = {
    type: 'alphanum',
  };

  render() {
    const { type, title, value, tagline, className, ...elementProps } = this.props;
    const fullClassName = classNames(className, styles.default);

    return (
      <Panel title={title} className={fullClassName} {...elementProps}>
        <span className={styles.info}>
          {type === 'money' ? <span className={styles.symbol}>R$</span> : ''}
          {type === 'money' ? moneyFormat(value, false) : value}
        </span>
        <span className={styles.tagline}>
          {tagline ? <span>{tagline}</span> : ''}
        </span>
      </Panel>
    );
  }
}

export default CSSModules(InfoCard, styles);
