import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import TooltipStycker from './tooltip-stycker-component';
import Button from '../button';

const stories = storiesOf('TooltipStycker', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () =>
  <TooltipStycker
    body={
      <div>
        <span>Suas campanhas estão paradas por falta de saldo.</span>
          Insira novos créditos e volte a anunciar.
      </div>
    }
  >
    <Button color="clean">
      Passe o mouse
    </Button>
  </TooltipStycker>
);

stories.addWithInfo('With Title', () =>
  <TooltipStycker
    body={
      <div>
        <span>Suas campanhas estão paradas por falta de saldo.</span>
          Insira novos créditos e volte a anunciar.
      </div>
    }
    title="Meu tooltip com título"
  >
    <Button color="clean">
      Passe o mouse aqui também!
    </Button>
  </TooltipStycker>
);
