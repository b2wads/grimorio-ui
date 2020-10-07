import { withState } from '@dump247/storybook-state';

export const useState = (initialState, renderComp) => {
  const state = withState(initialState);
  return state(({ store }) => renderComp(store));
};

export const action = name => (...params) => {
  console.log(name, params);
};
