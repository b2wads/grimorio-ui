import React from 'react';

import TooltipSticky from './tooltip-sticky-component';
import Button from '../button';

export default {
  title: 'TooltipSticky',
  component: TooltipSticky,
};

export const Normal = () => (
  <TooltipSticky
    body={
      <div>
        <span>Suas campanhas estão paradas por falta de saldo.</span>
        Insira novos créditos e volte a anunciar.
      </div>
    }
  >
    <Button color="clean">Passe o mouse</Button>
  </TooltipSticky>
);

export const WithTitle = () => (
  <TooltipSticky
    body={
      <div>
        <span>Suas campanhas estão paradas por falta de saldo.</span>
        Insira novos créditos e volte a anunciar.
      </div>
    }
    title="Meu tooltip com título"
  >
    <Button color="clean">Passe o mouse aqui também!</Button>
  </TooltipSticky>
);

export const WithShowOnSide = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <TooltipSticky
      body={
        <div>
          <span>Suas campanhas estão paradas por falta de saldo.</span>
          Insira novos créditos e volte a anunciar.
        </div>
      }
      showOnSide
    >
      <Button color="clean">Passe o mouse aqui também!</Button>
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
      <Button color="clean" style={{ paddingLeft: '0px' }}>
        Passe o mouse aqui também!
      </Button>
    </TooltipSticky>
  </div>
);
