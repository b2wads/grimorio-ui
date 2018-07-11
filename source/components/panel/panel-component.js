import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Svg from '../svg';

import styles from './panel.styl';

class Panel extends PureComponent {
  static propTypes = {
    brand: PropTypes.oneOf([null, 'acom', 'suba', 'shop', 'soub']),
    title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  };

  static defaultProps = {
    brand: null,
    title: false,
  };

  renderHeader(brand, title) {
    if (brand) {
      return (
        <header className={styles[brand]}>
          <Svg src={`logo/${brand}`} height={40} width={40} />
        </header>
      );
    } else {
      return (
        <header className={styles.title}>
          {title}
        </header>
      );
    }
  }

  render() {
    const { title, children, className, brand, ...elementProps } = this.props;
    const fullClassName = classNames(className, {
      [styles.default]: true,
      [styles.isBrand]: brand,
    });

    return (
      <article {...elementProps} className={fullClassName}>
        {(title || brand) && this.renderHeader(brand, title)}
        <div className={classNames(styles.content, { [styles.isBrand]: brand })}>
          {children}
        </div>
      </article>
    );
  }
}

export default CSSModules(Panel, styles);
