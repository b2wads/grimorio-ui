import React from 'react';
import { storiesOf } from '@storybook/react';

import TooltipSticky from './tooltip-sticky-component';
import Button from '../button';

const stories = storiesOf('TooltipSticky', module);

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

stories.add('With showOnSide', () =>
  <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <TooltipSticky
      body={
        <div>
          <span>Suas campanhas estão paradas por falta de saldo.</span>
            Insira novos créditos e volte a anunciar.
        </div>
      }
      showOnSide
    >
      <Button color="clean">
        Passe o mouse aqui também!
      </Button>
    </TooltipSticky>

    <TooltipSticky
      body={
        <div>
          <span>Suas campanhas estão paradas por falta de saldo.</span>
            Insira novos créditos e volte a anunciar.
        </div>
      }
      showOnSide
      >
      <Button color="clean" style={{paddingLeft: '0px'}}>
        Passe o mouse aqui também!
      </Button>
    </TooltipSticky>
  </div>
);
