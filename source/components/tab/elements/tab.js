import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../icon';

const Tab = ({ onClick, icon, children, className }) => {
  return (
    <li className={className} onClick={onClick}>
      {icon ? <Icon name={icon} /> : null}
      {children}
    </li>
  );
};

Tab.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
};

export default React.memo(Tab);
