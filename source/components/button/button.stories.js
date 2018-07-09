import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from './index';

import Icon from '../icon';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.addWithInfo(
  'Style',
  `
    This is the basic usage with the button.
  `,
  () => (
    <div>
      <Button style="primary" className="teste">Primary</Button>&nbsp;
      <Button style="primary">
        <Icon size={18} /> Primary Icon
      </Button>&nbsp;
      <Button style="secondary">Secondary</Button>&nbsp;
      <Button disabled>Disabled</Button>&nbsp;
      <Button style="clean" size="small">Clean</Button>&nbsp;
      <Button style="clean" size="small">
        Clean Icon <Icon size={18} />
      </Button>&nbsp;
    </div>
  )
);

stories.addWithInfo('Disabled', () => (
  <div>
    <Button style="primary" disabled={boolean('Disabled', true)}>
      {text('Primary', 'Primary')}
    </Button>&nbsp;
    <Button style="secondary" disabled={boolean('Disabled', true)}>
      {text('Secondary', 'Secondary')}
    </Button>&nbsp;
    <Button style="clean" size="small" disabled={boolean('Disabled', true)}>
      {text('Clean', 'Clean')}
    </Button>&nbsp;
  </div>
));

stories.addWithInfo('Size', () => (
  <div>
    <Button size="small">Small</Button>&nbsp;
    <Button>Medium</Button>&nbsp;
    <Button style="secondary">Medium</Button>&nbsp;
    <Button style="secondary" size="small">Small</Button>&nbsp;
  </div>
));

stories.addWithInfo('With icon', () => (
  <div>
    <Button style="primary">
      <Icon size={18} /> Primary Medium
    </Button>&nbsp;
    <Button style="secondary" size="small">
      Secondary Small <Icon name="link" size={18} />
    </Button>&nbsp;
    <Button style="clean" size="small">
      <Icon size={18} />Clean Small<Icon name="keyboard_arrow_down" size={18} />
    </Button>&nbsp;
  </div>
));
