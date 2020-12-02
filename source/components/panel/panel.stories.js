import React from 'react';

import Panel from './panel-component';
import Button from '../button';

export default {
  title: 'Panel',
  component: Panel,
};

export const Default = () => (
  <div style={{ width: '25%' }}>
    <Panel accordion>Simple Panel</Panel>
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
);

export const PaddingSize = () => (
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
);

export const HighlightTypes = () => (
  <div style={{ width: '25%' }}>
    <Panel highlight="line" title="Highlight">
      <p>Line</p>
    </Panel>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Panel highlight="shadow" title="Highlight">
      <p>Shadow</p>
    </Panel>
  </div>
);



export const WithFooter = () => (
  <div style={{ width: '25%' }}>
    <Panel title="Title" footer={<Button size="large">Cadastrar Site</Button>}>
      <p>Content</p>
    </Panel>
  </div>
);

export const TitleVariations = () => (
  <div>
    <Panel style={{ width: '35%' }} title="Normal Title">
      <p>Content</p>
      <Button>Send</Button>
    </Panel>
    <br />
    <br />
    <Panel title="Title Border" titleBorder style={{ width: '35%' }}>
      <p>Content</p>
    </Panel>
    <br />
    <br />
    <Panel
      style={{ width: '35%' }}
      title="Title"
      titleBorder
      titleSideComponent={<Button style={{ marginLeft: '10px' }}>Side Component</Button>}
      accordion
    >
      <p>titleSideComponent</p>
    </Panel>
  </div>
);

export const Accordion = () => (
  <div style={{ width: '25%' }}>
    <Panel
      title="Title"
      titleBorder
      footer={<Button size="large">Cadastrar Site</Button>}
      accordion
      open={true}
    >
      <p>Content</p>
    </Panel>
    <br />
    <Panel highlight="line" title="Highlight" accordion>
      <p>Line</p>
    </Panel>
  </div>
);

export const Loading = () => (
  <div style={{ width: '25%' }}>
    <Panel title="Title" loading={true} footer={<Button size="large">Cadastrar Site</Button>}>
      <p>Content</p>
    </Panel>
  </div>
);
