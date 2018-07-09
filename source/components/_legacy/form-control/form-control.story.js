import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from '../button';
import Icon from '../icon';
import FormGroup from '../form-group';
import FormControl from './index';

const stories = storiesOf('FormControl', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Knobs', () => (
  <div>
    <FormControl
      type={text('Type', 'text')}
      addonBefore={text('Addon Before', '@')}
      addonAfter={text('Addon After', '.00')}
      placeholder={text('Placeholder', 'Digite algo')}
      disabled={boolean('Disabled', false)}
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
    />
    <br /><br /><br /><br />
    <FormControl
      type="select"
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
    >
      <option value="">Selecione</option>
      <option value="a">a</option>
      <option value="b">b</option>
    </FormControl>
  </div>
));

stories.addWithInfo('Disabled', () => (
  <div>
    <FormControl placeholder="Digite um nome" disabled />
    <FormControl type="email" placeholder="Digire o seu e-mail" disabled />
    <FormControl type="radio" disabled />
    <FormControl type="checkbox" disabled />
    <FormControl type="select" disabled>
      <option value="">Selecione</option>
      <option value="a">a</option>
      <option value="b">b</option>
    </FormControl>
    <FormControl type="textarea" disabled />
  </div>
));

stories.addWithInfo('Addon before', () => (
  <div>
    <FormControl type="password" placeholder="Digite um nome"  addonBefore={<FormControl type="radio" />} />
    <br /><br />
    <FormControl type="password" placeholder="Digite um valor" addonBefore={
      <Button style="transparent" size="none">
        <Icon className="search" color="#fff" />
      </Button>
    } />
  </div>
));

stories.addWithInfo('Addon after', () => (
  <div>
    <FormControl type="password" placeholder="Digite um valor" addonAfter=".00" />
    <br /><br />
    <FormControl type="password" placeholder="Digite um valor" addonAfter={
      <Button style="transparent" size="none">
        <Icon className="search" color="#fff" />
      </Button>
    } />
  </div>
));

stories.addWithInfo('Feedback', () => (
  <FormGroup validationState="success">
    <FormControl type="password" placeholder="Digite um valor" feedback />
  </FormGroup>
));

stories.addWithInfo('On focus', () => (
  <div>
    <FormControl placeholder="Digite um nome" onFocus={action('focus')} />
    <FormControl type="radio" onFocus={action('focus')} />
    <FormControl type="checkbox" onFocus={action('focus')} />
    <FormControl type="select" onFocus={action('focus')}>
      <option value="">Selecione</option>
      <option value="a">a</option>
      <option value="b">b</option>
    </FormControl>

    <FormControl type="textarea" onFocus={action('focus')} />
  </div>
));

stories.addWithInfo('On change', () => (
  <div>
    <FormControl placeholder="Digite um nome" onChange={action('change')} />
    <FormControl type="radio" onChange={action('change')} />
    <FormControl type="checkbox" onChange={action('change')} />
    <FormControl type="select" onChange={action('change')}>
      <option value="">Selecione</option>
      <option value="a">a</option>
      <option value="b">b</option>
    </FormControl>

    <FormControl type="textarea" onChange={action('change')} />
  </div>
));

stories.addWithInfo('On blur', () => (
  <div>
    <FormControl placeholder="Digite um nome" onBlur={action('blur')} />
    <FormControl type="radio" onBlur={action('blur')} />
    <FormControl type="checkbox" onBlur={action('blur')} />
    <FormControl type="select" onBlur={action('blur')}>
      <option value="">Selecione</option>
      <option value="a">a</option>
      <option value="b">b</option>
    </FormControl>

    <FormControl type="textarea" onBlur={action('blur')} />
  </div>
));
