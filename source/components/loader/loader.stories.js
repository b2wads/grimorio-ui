import React from 'react';

import Loader from './loader-component';
import Panel from '../panel';
import Button from '../button';

export default {
  title: 'Loader',
  component: Loader,
};

export const Normal = () => (
  <div>
    <Loader />
    <div style={{ background: 'gray', display: 'inline-block', padding: '10px' }}>
      <Loader color="secondary" />
    </div>
  </div>
);

export const Size = () => (
  <div>
    <Loader size="20px" />
    <Loader size="40px" />
    <Loader size="60px" />
    <Loader size="80px" />
  </div>
);

export const Full = () => (
  <Panel>
    <p>Conteúdo</p>
    <Button>Continuar</Button>
    <Loader type="full" />
  </Panel>
);

export const FullPage = () => <Loader background="black" color="secondary" type="full-page" />;
