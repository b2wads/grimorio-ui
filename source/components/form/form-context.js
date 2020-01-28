import React from 'react';
import { withContextGenerator } from '../../helpers';

export const { Provider, Consumer } = React.createContext({
  formGroup: {
    controlId: null,
    validationState: undefined,
  },
  changeContext: () => {},
});

export const withContext = Component => withContextGenerator(Consumer, Component);
