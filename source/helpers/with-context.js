import React from 'react';

export const withContextGenerator = (Consumer, Component) => {
  class ThemeComponent extends React.Component {
    render() {
      return (
        <Consumer>
          {ctx => <Component {...this.props} context={ctx} />}
        </Consumer>
      );
    }
  }

  ThemeComponent.displayName = `withContext(${Component.name})`;

  return ThemeComponent;
};
