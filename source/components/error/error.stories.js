import React from 'react';

import Error from './error-component';

export default {
  title: 'Error',
  component: Error,
};

export const Normal = () => {
  return (
    <div>
      <Error hasButton onErrorClick={() => alert('error!')} />
      <br />
      <br />
      <Error errorMessage="Parece que algo deu errado, por favor, tente mais tarde." />
      <br />
      <br />
      <br />
      <Error hasButton outline errorBtnText="Sair" />
    </div>
  );
};
