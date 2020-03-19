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
    ellipsis: PropTypes.bool,
    titleClassName: PropTypes.string,
    infoClassName: PropTypes.string,
    tagClassName: PropTypes.string,
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
      titleClassName,
      infoClassName,
      tagClassName,
      errorMessage,
      errorBtnText,
      ...elementProps
    } = this.props;

    const fullClassName = classNames(className, styles.default);

    return (
      <Panel title={title} className={fullClassName} titleClassName={titleClassName} {...elementProps}>
        {error
          ? <Error
              className={styles.error}
              hasButton
              onErrorClick={onErrorClick}
              errorMessage={errorMessage}
              errorBtnText={errorBtnText}
            />
          : <Fragment>
              <span className={cx(styles.info, infoClassName, { [styles.ellipsis]: ellipsis })}>
                {type === 'money' ? <span className={styles.symbol}>R$</span> : ''}
                {type === 'money' ? moneyFormat(value, false) : value}
              </span>
              <span className={cx(styles.tagline, tagClassName)}>
                {tagline ? <span>{tagline}</span> : ''}
              </span>
            </Fragment>}
      </Panel>
    );
  }
}

export default CSSModules(InfoCard, styles);
