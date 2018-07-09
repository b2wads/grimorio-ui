import React from 'react';
import { storiesOf } from '@storybook/react';
import { decorateAction } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import Alert from './index';

const stories = storiesOf('Alert', module);

stories.addDecorator(withKnobs);

const firstArgAction = decorateAction([
  args => args.slice(0, 1)
]);

const options = {
  info: 'Info',
  warning: 'Warning',
  success: 'Success',
  danger: 'Danger',
};

stories.addWithInfo('Without dismiss',
  `
  This is the basic usage.
  `,
  () => (
    <div>
      <Alert
        type={select('Type', options, 'info')}
        showIcon={boolean('showIcon', false)}
        dark={boolean('Dark color', false)}
        headline={text('Headline', '')}
      >
        <p>{text('Text', 'Maecenas ipsum velit, consectetuer eu.')}</p>
      </Alert>
    </div>
  ));

stories.addWithInfo('With dismiss', () => (
  <div>
    <Alert
      type={select('Type', options, 'info')}
      showIcon={boolean('showIcon', false)}
      dark={boolean('Dark color', false)}
      headline={text('Headline', '')}
      onDismiss={firstArgAction('removed')}
    >
      <p>{text('Text', 'Maecenas ipsum velit, consectetuer eu.')}</p>
    </Alert>
  </div>
));
