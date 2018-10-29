import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Button from '../button';

import styles from './error.styl';

class Error extends PureComponent {
  static propTypes = {
    errorMessage: PropTypes.string,
    onErrorClick: PropTypes.func,
    errorBtnText: PropTypes.string,
    hasButton: PropTypes.bool,
    outline: PropTypes.bool,
  };

  static defaultProps = {
    errorMessage: 'Ops, algo deu errado :(',
    errorBtnText: 'Tentar de novo',
    hasButton: false,
    outline: false,
  };

  render() {
    const { errorMessage, hasButton, onErrorClick, errorBtnText, outline, className, ...rest } = this.props;
    const wrapClassname = classNames(styles.wrap, className, {
      [styles.isOutline]: outline,
    });

    return (
      <div className={wrapClassname} {...rest}>
        <p className={styles.title}>{errorMessage}</p>
        {hasButton &&
          <Button className={styles.btn} onClick={onErrorClick}>
            {errorBtnText}
          </Button>}
      </div>
    );
  }
}

export default CSSModules(Error, styles);
