import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Svg from '../svg';

import styles from './panel.styl';

class Panel extends PureComponent {
  static propTypes = {
    brand: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['none', 'acom', 'suba', 'shop', 'soub'])]),
    title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  };

  static defaultProps = {
    type: 'default',
    brand: false,
    title: false,
  };

  renderHeader(brand, title) {
    if (brand) {
      return <Svg src={`logo/${brand}`} height={40} width={40} />;
    } else {
      return title;
    }
  }

  render() {
    const { title, children, className, brand, ...elementProps } = this.props;
    const fullClassName = classNames(className, styles[`${brand ? 'brand' : 'default'}`]);

    return (
      <article {...elementProps} className={fullClassName}>
        {(title || brand) &&
          <header>
            <h1 className={`${styles['header']} ${styles[brand]}`}>
              {this.renderHeader(brand, title)}
            </h1>
          </header>}
        <div className={styles['content']}>
          {children}
        </div>
      </article>
    );
  }
}

export default CSSModules(Panel, styles);
