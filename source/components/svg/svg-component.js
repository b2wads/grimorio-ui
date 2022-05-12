import React from 'react';
import PropTypes from 'prop-types';

function Svg({ src, align, width, height, ...elementProps }) {
  function pathLoader(src) {
    try {
      /* eslint-disable */
      return require('!!svg-react-loader!../../images/svg/'+ src +'.svg');
      /* eslint-disable */
    } catch (error) {
      return false;
    }
  }

  let styles = {
    verticalAlign: align,
  };

  if (width) {
    // CSS instead of the width attr to support non-pixel units
    styles.width = width;
  }

  if (height) {
    // Prevents scaling issue in IE
    styles.height = height;
  }

  const Component = pathLoader(src);

  if (!Component) {
    return null;
  }

  return <Component style={styles} {...elementProps} />;

}

Svg.defaultProps = {
  align: 'middle',
};

Svg.propTypes = {
  src: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  align: PropTypes.oneOf([
    'baseline',
    'length',
    'sub',
    'super',
    'top',
    'text-top',
    'middle',
    'bottom',
    'text-bottom',
    'initial',
    'inherit',
  ]),
  style: PropTypes.object,
};

export default Svg;
