import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { boolean } from '@storybook/addon-knobs';

import Panel from './panel-component';
import Button from '../button';

const stories = storiesOf('Panel', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <div style={{ width: '25%' }}>
    <Panel accordion>
      Simple Panel
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel title="Title">
      <p>Content</p>
      <Button>Send</Button>
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel>
      <p>Valor</p>
    </Panel>
  </div>
));

stories.add('Padding Size', () => (
  <div style={{ width: '25%' }}>
    <Panel title="Small" size="small">
      <p>Content</p>
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel title="Medium" size="medium">
      <p>Content</p>
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel title="Large" size="large">
      <p>Content</p>
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel title="No Padding" size="nopadding">
      <p>Content</p>
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
  </div>
));

stories.add('Highlight types', () => (
  <div style={{ width: '25%' }}>
    <Panel highlight="line" title="Highlight">
      <p>Line</p>
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel highlight="shadow" title="Highlight">
      <p>Shadow</p>
    </Panel>
  </div>
));

stories.add('With Footer', () => (
  <div style={{ width: '25%' }}>
    <Panel title="Title" footer={<Button size="large">Cadastrar Site</Button>}>
      <p>Content</p>
    </Panel>
  </div>
));

stories.add('Title Variations', () => (
  <div>
    <Panel style={{ width: '35%' }} title="Normal Title">
      <p>Content</p>
      <Button>Send</Button>
    </Panel>
    <br/>
    <br/>
    <Panel title="Title Border" titleBorder style={{ width: '35%' }}>
      <p>Content</p>
    </Panel>
    <br/>
    <br/>
    <Panel 
      style={{ width: '35%' }}
      title="Title"
      titleBorder
      titleSideComponent={<Button style={{ marginLeft: '10px' }}>Side Component</Button>}
      accordion>
      <p>titleSideComponent</p>
    </Panel>
  </div>
));


stories.add('Accordion', () => (
  <div style={{ width: '25%' }}>
    <Panel
      title="Title"
      titleBorder
      footer={<Button size="large">Cadastrar Site</Button>}
      accordion
      open={boolean('Open', true, 'accordion')}
    >
      <p>Content</p>
    </Panel>
    <br/>
    <Panel highlight="line" title="Highlight" accordion>
      <p>Line</p>
    </Panel>
  </div>
));

stories.add('Loading', () => (
  <div style={{ width: '25%' }}>
    <Panel title="Title" loading={true} footer={<Button size="large">Cadastrar Site</Button>}>
      <p>Content</p>
    </Panel>
  </div>
));
