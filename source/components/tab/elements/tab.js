import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ onClick, children, className }) => {
  return <li className={className} onClick={onClick}>{children}</li>;
};

Tab.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
};

export default React.memo(Tab);
