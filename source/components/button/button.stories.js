import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from './index';
// import Icon from '../icon';

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
      <Button style="dark">Dark</Button>&nbsp;
      <Button disabled>Disabled</Button>&nbsp;
      <Button style="clean" size="small">Clean</Button>&nbsp;
    </div>
  )
);

stories.addWithInfo('Disabled', () => (
  <div>
    <Button style="primary" disabled={boolean('Disabled', false)}>
      {text('Primary', 'Primary')}
    </Button>&nbsp;
    <Button style="dark" disabled={boolean('Disabled', false)}>
      {text('Dark', 'Dark')}
    </Button>&nbsp;
    <Button style="clean" size="small" disabled={boolean('Disabled', false)}>
      {text('Clean', 'Clean')}
    </Button>&nbsp;
  </div>
));

stories.addWithInfo('Size', () => (
  <div>
    <Button size="small">Small</Button>&nbsp;
    <Button>Medium</Button>&nbsp;
    <Button size="large">Large</Button>&nbsp;
    <Button style="dark" size="large">Large</Button>&nbsp;
    <Button style="dark">Medium</Button>&nbsp;
    <Button style="dark" size="small">Small</Button>&nbsp;
  </div>
));

// stories.addWithInfo('Outline', () => (
//   <div>
//     <Button outline>Default</Button>&nbsp;
//     <Button style="primary" outline>Primary</Button>&nbsp;
//     <Button style="success" outline>Success</Button>&nbsp;
//     <Button style="info" outline>Info</Button>&nbsp;
//     <Button style="warning" outline>Warning</Button>&nbsp;
//     <Button style="danger" outline>Danger</Button>&nbsp;
//     <Button style="undo" outline>Undo</Button>&nbsp;
//   </div>
// ));

// stories.addWithInfo('Active', () => (
//   <div>
//     <Button active>Default</Button>&nbsp;
//     <Button style="primary" active>Primary</Button>&nbsp;
//     <Button style="success" active>Success</Button>&nbsp;
//     <Button style="info" active>Info</Button>&nbsp;
//     <Button style="warning" active>Warning</Button>&nbsp;
//     <Button style="danger" active>Danger</Button>&nbsp;
//     <Button style="undo" active>Undo</Button>&nbsp;
//   </div>
// ));

// stories.addWithInfo('Block', () => (
//   <div>
//     <Button block>Default</Button>&nbsp;
//     <Button style="primary" block>Primary</Button>&nbsp;
//     <Button style="success" block>Success</Button>&nbsp;
//     <Button style="info" block>Info</Button>&nbsp;
//     <Button style="warning" block>Warning</Button>&nbsp;
//     <Button style="danger" block>Danger</Button>&nbsp;
//     <Button style="undo" block>Undo</Button>&nbsp;
//   </div>
// ));

// stories.addWithInfo('With icon', () => (
//   <div>
//     <Button><Icon /> Default</Button>&nbsp;
//     <Button style="primary"><Icon /> Primary</Button>&nbsp;
//     <Button style="success">Success <Icon /></Button>&nbsp;
//     <Button style="info"><Icon /> Info <Icon /></Button>&nbsp;
//     <Button style="warning" outline><Icon /> Warning</Button>&nbsp;
//     <Button style="undo"><Icon /> Undo</Button>
//     <br /><br />&nbsp;&nbsp;&nbsp;
//     <Button style="danger" block><Icon /> Danger</Button>&nbsp;
//   </div>
// ));

// stories.addWithInfo('Icon with circle style', () => (
//   <div>block
//     <Button size="mini" circle><Icon size="14px" /></Button>&nbsp;
//     <Button size="mini" circle><Icon /></Button>&nbsp;
//     <Button size="mini" circle><Icon size="36px" /></Button>&nbsp;
//     <Button size="mini" circle><Icon size="50px" /></Button>
//     <br /><br />
//     <Button style="primary" size="small" circle><Icon size="14px" /></Button>&nbsp;
//     <Button style="primary" size="small" circle><Icon /></Button>&nbsp;
//     <Button style="primary" size="small" circle><Icon size="36px" /></Button>&nbsp;
//     <Button style="primary" size="small" circle><Icon size="50px" /></Button>
//     <br /><br />
//     <Button style="success" circle><Icon size="14px" /></Button>&nbsp;
//     <Button style="success" circle><Icon /></Button>&nbsp;
//     <Button style="success" circle><Icon size="36px" /></Button>&nbsp;
//     <Button style="success" circle><Icon size="50px" /></Button>
//     <br /><br />
//     <Button style="info" size="large" circle><Icon size="14px" /></Button>&nbsp;
//     <Button style="info" size="large" circle><Icon /></Button>&nbsp;
//     <Button style="info" size="large" circle><Icon size="36px" /></Button>&nbsp;
//     <Button style="info" size="large" circle><Icon size="50px" /></Button>
//     <br /><br />
//     <Button style="warning" size="large" circle><Icon /></Button>&nbsp;
//     <Button style="danger" size="large" circle><Icon /></Button>&nbsp;
//     <Button style="undo" size="large" circle><Icon /></Button>&nbsp;
//   </div>
// ));

// stories.addWithInfo('Rounded', () => (
//   <div>
//     <Button rounded>Default</Button>
//     <br /><br />
//     <Button style="primary" rounded><Icon /></Button>
//     <br /><br />
//     <Button style="success" rounded><Icon /> Success</Button>
//     <br /><br />
//     <Button style="info" disabled rounded>Info</Button>
//     <br /><br />
//     <Button style="warning" outline rounded>Warning</Button>
//     <br /><br />danger
//     <Button style="danger" block rounded>Danger</Button>
//     <br /><br />
//     <Button style="undo" block rounded>Undo</Button>
//   </div>
// ));

// stories.addWithInfo('Disabled', () => (
//   <div>
//     <Button disabled={boolean('Disabled', false)}>{text('Text (default)', 'Default')}</Button>&nbsp;
//     <Button style="primary" disabled={boolean('Disabled', false)}>{text('Text (primary)', 'Primary')}</Button>&nbsp;
//     <Button style="info" disabled={boolean('Disabled', false)} rounded>{text('Text (rounded)', 'Rounded')}</Button>&nbsp;
//     <Button style="warning" disabled={boolean('Disabled', false)} outline>{text('Text (outline)', 'Outline')}</Button>&nbsp;
//     <Button style="undo" disabled={boolean('Disabled', false)}>{text('Text (undo)', 'Undo')}</Button>
//     <br /><br />
//     <Button style="danger" disabled={boolean('Disabled', false)} block>{text('Text (block)', 'Outline')}</Button>
//   </div>
// ));

// stories.addWithInfo('Loading', () => (
//   <div>
//     <Button loading={boolean('Loading', false)}>{text('Text (default)', 'Default')}</Button>&nbsp;
//   </div>
// ));
