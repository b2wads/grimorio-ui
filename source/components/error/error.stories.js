import React from 'react';
import { storiesOf } from '@storybook/react';

import Error from './error-component';

const stories = storiesOf('Error', module);

stories.add('Normal', () => {
  return (
    <div>
      <Error hasButton onErrorClick={() => alert('error!')} />
      <br/>
      <br/>
      <Error errorMessage="Parece que algo deu errado, por favor, tente mais tarde." />
      <br/><br/><br/>
      <Error hasButton outline errorBtnText="Sair"/>
    </div>
  );
});
