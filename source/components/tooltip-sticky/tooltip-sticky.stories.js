import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import TooltipSticky from './tooltip-sticky-component';
import Button from '../button';

const stories = storiesOf('TooltipSticky', module);

stories.addDecorator(withKnobs);

stories.add('Normal', () =>
  <TooltipSticky
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
  </TooltipSticky>
);

stories.add('With Title', () =>
  <TooltipSticky
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
  </TooltipSticky>
);
