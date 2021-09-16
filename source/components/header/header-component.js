import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './header.styl';

export const Header = ({
  className,
  color,
  contentClassName,
  showLogo,
  logo,
  onLogoClick,
  children,
  ...elementProps
}) => {
  const fullClassName = cx(className, styles.header, {
    [styles[color]]: color,
    [styles.showLogo]: showLogo,
  });

  const fullContent = cx(contentClassName, styles.content, {
    [styles.showLogo]: showLogo,
  });

  return (
    <header className={fullClassName} {...elementProps}>
      {showLogo &&
        <div className={styles.logo} onClick={onLogoClick}>
          {logo}
        </div>}

      <div className={fullContent}>
        {children}
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'support']),
  contentClassName: PropTypes.string,
  showLogo: PropTypes.bool,
  logo: PropTypes.node,
  onLogoClick: PropTypes.func,
};

Header.defaultProps = {
  color: 'primary',
  showLogo: false,
};

export default memo(Header);
