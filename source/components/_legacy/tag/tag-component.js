import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
// components
import Button from '../button';
import Icon from '../icon';
// styles
import styles from './tag.styl';

class Tag extends PureComponent {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    children: false,
    onRemove: () => {},
    onClick: () => {},
    className: undefined,
  };

  static propTypes = {
    children: PropTypes.any.isRequired,
    onRemove: PropTypes.func,
    onClick: PropTypes.func,
    className: PropTypes.string,
  };

  render() {
    const { children, onRemove, className, ...rest } = this.props;

    if (!children) {
      return null;
    }

    return (
      <div {...rest} className={classNames(className, styles.tag)}>
        {children}
        <span className={styles['tag-close']}>
          <Button onClick={onRemove}>
            <Icon name="close" size="12px" />
          </Button>
        </span>
      </div>
    );
  }
}

export default CSSModules(Tag, styles);
