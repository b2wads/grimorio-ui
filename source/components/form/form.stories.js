import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import Button from '../button';
import Icon from '../icon';

import { fieldsMask } from '../../helpers/mask';

import Form, { FormGroup, FormLabel, FormControl, FormActions, FormHelpText, FormControlLabel } from './index';

const stories = storiesOf('Form', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', withState({ input: 'Campo com valor default' })(({ store }) => {
  const handleChange = event => {
    store.set({ input: event.target.value });
  }

  return (
    <div>
      <Form onSubmit={ ()=>{} }>
        <FormGroup>
          <FormLabel>Example of label</FormLabel>
          <FormControl placeholder="Form, FormGroup and input" />
          <FormHelpText>text</FormHelpText>
        </FormGroup>
        <FormActions>
          <Button>Cancelar</Button>
          <Button style="primary">Enviar</Button>
        </FormActions>
      </Form>
      <Form onSubmit={ ()=>{} }>
        <FormGroup>
          <FormControlLabel label="Nome" placeholder="Form, FormGroup and input" />
          <FormHelpText>text</FormHelpText>
        </FormGroup>
        <FormActions>
          <Button>Cancelar</Button>
          <Button style="primary">Enviar</Button>
        </FormActions>
      </Form>
      <Form onSubmit={ ()=>{} }>
        <FormGroup>
          <FormControlLabel label="Nome" placeholder="Form, FormGroup and input" value={store.state.input} onChange={handleChange} />
          <FormHelpText>Tem valor default controlado</FormHelpText>
        </FormGroup>
        <FormActions>
          <Button>Cancelar</Button>
          <Button style="primary">Enviar</Button>
        </FormActions>
      </Form>
      <Form>
        <FormGroup>
          <FormControlLabel label="Nome" placeholder="Form, FormGroup and input" defaultValue="Valor default" />
          <FormHelpText>Tem valor default, porém não é controlado</FormHelpText>
        </FormGroup>
        <br/>
        <FormGroup>
          <FormControlLabel outline label="Nome" placeholder="Form, FormGroup and input" defaultValue="Valor default" />
          <FormHelpText>Versão outline!</FormHelpText>
        </FormGroup>
      </Form>
    </div>
  );
}));

stories.addWithInfo('Inline', () => (
  <Form onSubmit={ ()=>{} } styleType='inline'>
    <FormGroup>
      <FormControl placeholder="Form, FormGroup and input" />
    </FormGroup>
    <FormGroup>
      <FormControl placeholder="Form, FormGroup and input" />
    </FormGroup>
    <FormActions>
      <Button>Cancelar</Button>
      <Button style="primary">Enviar</Button>
    </FormActions>
  </Form>
));

stories.addWithInfo('Horizontal', () => (
  <Form onSubmit={ ()=>{} } styleType='horizontal'>
    <FormGroup>
      <FormLabel>Example of label</FormLabel>
      <FormControl placeholder="Form, FormGroup and input" />
    </FormGroup>
    <FormGroup>
      <FormLabel>Example of label</FormLabel>
      <FormControl placeholder="Form, FormGroup and input" />
    </FormGroup>
    <FormActions>
      <Button>Cancelar</Button>
      <Button style="primary">Enviar</Button>
    </FormActions>
  </Form>
));

// Form label
stories.addWithInfo('Addon text', () => (
  <FormGroup>
    <br/><br/><br/>
    <FormLabel addon={'text'}>Nome:</FormLabel>
  </FormGroup>
));

stories.addWithInfo('Addon link', () => (
  <FormGroup>
    <br/><br/><br/>
    <FormLabel addon={<a href="/home">Esqueci a minha senha</a>}>Nome:</FormLabel>
  </FormGroup>
));

// Form group
stories.addWithInfo('With id', () => (
  <FormGroup controlId="test">
    <FormLabel>Nome:</FormLabel>
    <FormControl placeholder="Form group with input" />
  </FormGroup>
));

stories.addWithInfo('With validation', () => (
  <div>
    <FormGroup validationState="success">
      <FormLabel>Nome:</FormLabel>
      <FormControl addonBefore="@"  placeholder="Form group with input" feedback />
    </FormGroup>
    <FormGroup validationState="warning">
      <FormLabel>Nome:</FormLabel>
      <FormControl addonBefore="@"   placeholder="Form group with input" feedback />
    </FormGroup>
    <FormGroup validationState="error">
      <FormLabel>Nome:</FormLabel>
      <FormControl addonBefore="@"  placeholder="Form group with input" feedback />
      <span className="error">testte</span>
    </FormGroup>
  </div>
));

// Form control
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
    <FormControl type="email" placeholder="Digite o seu e-mail" disabled />
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
        <Icon className="search" size={20} />
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
        <Icon className="search" size={20} />
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

stories.addWithInfo('On Mask', () => {
  const handleMask = value => {
    return fieldsMask({ type: 'number' }, value);
  }
  return (
    <FormControl
      placeholder="Digite um nome"
      onMask={handleMask}
    />
  );
});


stories.addWithInfo('On Validation', withState({ status: undefined, message: undefined, status2: undefined, message2: undefined })(({ store }) => {
  const handleValidate = validation => {
    store.set({ status: validation.validationState, message: validation.errorMessage });
  }

  const handleValidateTwo = validation => {
    store.set({ status2: validation.validationState, message2: validation.errorMessage });
  }

  return (
    <div>
      <FormGroup validationState={store.state.status}>
        <FormControlLabel
          label="Nome"
          placeholder="Digite um nome"
          onValidate={handleValidate}
          validate={[{
              rule: 'required',
              message: 'Campo obrigatório'
            }, {
              rule: 'letter',
              message: 'Deve ser apenas letras'
            }]
          }
        />
        {store.state.message && <FormHelpText>{store.state.message}</FormHelpText>}
      </FormGroup>
      <FormGroup validationState={store.state.status2}>
        <FormLabel>Nome:</FormLabel>
        <FormControl
          placeholder="Digite um nome"
          onValidate={handleValidateTwo}
          validate={[{
              rule: 'required',
              message: 'Campo obrigatório'
            }, {
              rule: 'letter',
              message: 'Deve ser apenas letras'
            }]
          }
        />
        <FormHelpText>{store.state.message2 ? store.state.message2 : 'Seja uma pessoa gentil e escreva aqui'}</FormHelpText>
      </FormGroup>
    </div>
  );
}));
