import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from './index';

import Icon from '../icon';
import Loader from '../loader';

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
      <Button style="outline">Outline</Button>&nbsp;
      <Button disabled>Disabled</Button>&nbsp;
      <Button style="clean" size="small">Clean</Button>&nbsp;
      <Button style="clean" size="small">
        Clean Icon <Icon size={18} />
      </Button>&nbsp;
      <span style={{background: 'lightgray'}}>
        <Button style="clean" modifier="inverted" size="small">
          Clean Inverted
        </Button>&nbsp;
      </span>
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

stories.addWithInfo('States', () => (
  <div>
    <Button style="primary">
      Normal
    </Button>&nbsp;
    <Button style="primary" disabled>
      Disabled
    </Button>&nbsp;
    <Button style="primary" active>
      Active
    </Button>
  </div>
));

stories.addWithInfo('Size', () => (
  <div>
    <Button size="small">Small</Button>&nbsp;
    <Button>Medium</Button>&nbsp;
    <Button size="large">Large</Button>&nbsp;
    <Button style="secondary" size="large">Large</Button>&nbsp;
    <Button style="secondary">Medium</Button>&nbsp;
    <Button style="secondary" size="small">Small</Button>&nbsp;
  </div>
));

stories.addWithInfo('Loading', () => (
  <div>
    <Button loading={true} style="primary">
      <Loader style={{ marginRight: '7px' }} size="17px" color="secondary" /> Primary
    </Button>&nbsp;
    <Button loading={true} style="clean" size="small">
      <Loader style={{ marginRight: '7px' }} size="17px" /> Clean Small
    </Button>&nbsp;
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
