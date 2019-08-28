import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import cx from 'classnames';

import styles from './info-card.styl';

import { moneyFormat } from '../../helpers';

import Panel from '../panel';
import Error from '../error';

class InfoCard extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    tagline: PropTypes.string,
    type: PropTypes.oneOf(['alphanum', 'money']),
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    onErrorClick: PropTypes.func,
    errorBtnText: PropTypes.string,
    sizeText: PropTypes.number,
  };

  static defaultProptypes = {
    type: 'alphanum',
    error: false,
  };

  render() {
    const {
      type,
      title,
      value,
      tagline,
      className,
      error,
      ellipsis,
      onErrorClick,
      sizeTitle,
      sizeText,
      errorMessage,
      errorBtnText,
      ...elementProps
    } = this.props;

    const fullClassName = classNames(className, styles.default);

    return (
      <Panel title={title} className={fullClassName} sizeTitle={sizeTitle} {...elementProps}>
        {error &&
          <Error
            className={styles.error}
            hasButton
            onErrorClick={onErrorClick}
            errorMessage={errorMessage}
            errorBtnText={errorBtnText}
          />}
        {!error &&
          <Fragment>
            <span
              className={cx(styles.info, { [styles.ellipsis]: ellipsis })}
              style={{ fontSize: sizeText ? `${sizeText}px` : '28px' }}
            >
              {type === 'money' ? <span className={styles.symbol}>R$</span> : ''}
              {type === 'money' ? moneyFormat(value, false) : value}
            </span>
            <span className={styles.tagline}>
              {tagline ? <span>{tagline}</span> : ''}
            </span>
          </Fragment>}
      </Panel>
    );
  }
}

export default CSSModules(InfoCard, styles);
