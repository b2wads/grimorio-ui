import React, { useState } from 'react';

export const State = ({ initialState, children = () => {} }) => {
  const [state, setState] = useState(initialState);

  const store = {
    state,
    set: changes =>
      setState({
        ...state,
        ...changes,
      }),
  };

  if (typeof children !== 'function') {
    return null;
  }

return <>{children(store)}</>;
};

export const withState = (initialState, renderComp) => {
  return () => (
    <State initialState={initialState}>
      {store => renderComp(store)}
    </State>
  );
};

export const action = name => (...params) => {
  console.log(name, params);
};
