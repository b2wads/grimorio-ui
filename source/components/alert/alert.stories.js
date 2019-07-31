import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Alert from './alert-component';

const stories = storiesOf('Alert', module);

stories.addDecorator(withKnobs);

stories.add('Normal', () =>
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
      action={false}
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
      action={false}
      close
      onClick={() => alert('Solta vinheta, Simone!')}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget lacus congue, blandit ex vel, malesuada nulla. Pellentesque consequat accumsan velit, sit amet porttitor nibh tempor non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam interdum laoreet viverra. Duis tempor, ligula nec molestie fermentum, tellus lorem rutrum tortor, vel condimentum tellus nisl vel dolor. Pellentesque ultrices, nisi non vestibulum feugiat, urna ex ultricies lorem, non maximus dui nisi quis lectus. Praesent porttitor in magna sit amet eleifend. Sed consectetur mi vel cursus facilisis.
    </Alert>
  </div>
);

stories.add('Overlay', () =>
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
