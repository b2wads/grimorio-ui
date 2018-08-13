import React from 'react';

export const withContext = (Consumer, Component) => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {context => <Component {...this.props} context={context} />}
        </Consumer>
      );
    }
  };
};
