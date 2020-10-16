import React, { useState } from 'react';

export const State = ({ initialState, render }) => {
  const [state, setState] = useState(initialState);
  const changeUnmutable = changes => setState({
    ...state,
    ...changes,
  });

  const store = {
    state,
    set: changeUnmutable,
  };

  return <>
    {render(store)}
  </>;
};

export const withState = (initialState, renderComp) => {
  return () => <State initialState={initialState} render={store => renderComp(store)} />;
};

export const action = name => (...params) => {
  console.log(name, params);
};
