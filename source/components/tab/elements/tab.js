import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../icon';

const Tab = ({ className, onClick, icon, children, ...rest }) => {
  return (
    <li className={className} onClick={onClick} {...rest}>
      {icon ? <Icon name={icon} /> : null}
      {children}
    </li>
  );
};

Tab.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default React.memo(Tab);
