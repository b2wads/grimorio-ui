import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Error from './error-component';

const stories = storiesOf('Error', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => {
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
