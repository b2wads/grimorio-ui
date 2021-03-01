import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
// styles
import styles from '../accordion.styl';

class AccordionContent extends PureComponent {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    content: PropTypes.node,
    index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func,
  };

  render() {
    const { active, className, content, children } = this.props;
    const classes = classNames(styles.content, className, {
      [`${styles.isActive}`]: active,
    });

    return (
      <div className={classes}>
        {children ? children : content}
      </div>
    );
  }
}

export default AccordionContent;
