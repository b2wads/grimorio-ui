import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './panel.styl';

class Panel extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['default', 'brand']),
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    children: PropTypes.element.isRequired,
  };

  static defaultProps = {
    type: 'default',
  };

  render() {
    const { header, children, className, type } = this.props;
    const fullClassName = classNames(className, styles[type]);

    return (
      <article className={fullClassName}>
        <header>
          <h1 className={styles[`${type}__header`]}>{header}</h1>
        </header>
        <div className={styles[`${type}__content`]}>
          {children}
        </div>
      </article>
    );
  }
}

export default CSSModules(Panel, styles);
