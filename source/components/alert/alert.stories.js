import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Alert from './alert-component';

const stories = storiesOf('Alert', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () =>
  <div>
    <Alert
      type="danger"
      title="Granger Danger"
      content="Nullam iaculis laoreet felis et dapibus. Nunc convallis purus ac arcu pharetra faucibus."
      actionText="Resolva já"
      onClick={() => window.open('https://youtu.be/OwLVKIMamhA?t=115', '_blank')}
    />
    <br/>
    <Alert
      type="warning"
      title="Warning"
      content="Nullam iaculis laoreet felis et dapibus. Nunc convallis purus ac arcu pharetra faucibus."
      onClick={() => alert('é')}
    />
    <br/>
    <Alert
      type="success"
      title="Só Sucesso"
      content="Nullam iaculis laoreet felis et dapibus. Nunc convallis purus ac arcu pharetra faucibus."
      onClick={() => alert(':)')}
    />
    <br/>
    <Alert
      type="info"
      title="Aqui tem informação!!!!"
      content="Nullam iaculis laoreet felis et dapibus. Nunc convallis purus ac arcu pharetra faucibus."
      onClick={() => alert('Solta vinheta, Simone!')}
    />
  </div>
);

stories.addWithInfo('Overlay', () =>
  <div>
    <Alert
      type="danger"
      title="Granger Danger"
      onClick={() => alert('resolvido')}
      overlay
    >
      <p>Nullam iaculis laoreet felis et dapibus. <strong>Nunc convallis</strong> purus ac arcu pharetra faucibus.</p>
    </Alert>
  </div>
);
