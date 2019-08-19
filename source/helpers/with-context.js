import React from 'react';

export function withContextGenerator(Consumer, Component) {
  return function ThemeComponent(props) {
    return (
      <Consumer>
        {ctx => <Component {...props} context={ctx} />}
      </Consumer>
    );
  };
}
