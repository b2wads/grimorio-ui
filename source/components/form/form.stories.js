import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import Button from '../button';

import { fieldsMask } from '../../helpers/mask';

import Form, { FormGroup, FormLabel, FormControl, FormActions, FormHelpText, FormControlLabel } from './index';
import { SelectOption } from '../select';

const stories = storiesOf('Form', module);

stories.addDecorator(withKnobs);

stories.add('Normal', withState({ input: 'Campo com valor default', check: [] })(({ store }) => {
  const handleChange = event => {
    store.set({ input: event.target.value });
  }

  const change = () => {
    store.set({ input: '' });
  }

  const changeCheck = () => {
    store.set({ check: [1, 2] });
  }

  const toggleCheck = id => {
    let check = store.state.check;

    if (store.state.check.includes(id)) {
      check = store.state.check.filter(chosen => chosen !== id);
    } else {
      check.push(id);
    }

    store.set({ check });
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
          <Button color="primary">Enviar</Button>
        </FormActions>
      </Form>
      <Form onSubmit={ ()=>{} }>
        <FormGroup>
          <FormControlLabel label="Nome" placeholder="Form, FormGroup and input" />
          <FormHelpText>text</FormHelpText>
        </FormGroup>
        <FormActions>
          <Button>Cancelar</Button>
          <Button color="primary">Enviar</Button>
        </FormActions>
      </Form>
      <Form onSubmit={ ()=>{} }>
        <Button onClick={change}>Deixar vazio!</Button>
        <FormGroup>
          <FormControlLabel label="Nome" placeholder="Form, FormGroup and input" value={store.state.input} onChange={handleChange} />
          <FormHelpText>Tem valor default controlado</FormHelpText>
        </FormGroup>
        <FormActions>
          <Button>Cancelar</Button>
          <Button color="primary">Enviar</Button>
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
        <br/>
        <FormGroup>
          <FormControlLabel onChange={data => console.log(data)} label="Nome" type="select">
            <SelectOption value="a">a</SelectOption>
            <SelectOption value="b">b</SelectOption>
          </FormControlLabel>
          <FormHelpText>Select!</FormHelpText>
        </FormGroup>

        <Button onClick={changeCheck}>Marcar Checkboxes</Button>
        <FormGroup>
          <label htmlFor="check">Checkbox!</label>
          <FormControl onChange={() => toggleCheck(1)} checked={store.state.check.includes(1)} type="checkbox" id="check" value="1" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="check2">Checkbox2!</label>
          <FormControl onChange={() => toggleCheck(2)} checked={store.state.check.includes(2)} type="checkbox" id="check2" value="2" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="radio">Radio!</label>
          <FormControl type="radio" name="test" id="radio" value="1" />
          <br/>
          <label htmlFor="radio2">Radio2!</label>
          <FormControl type="radio" name="test" id="radio2" value="2" />
          <br/>
          <label htmlFor="radio3">Radio3!</label>
          <FormControl type="radio" name="test" id="radio3" value="3" />
        </FormGroup>
      </Form>
    </div>
  );
}));

stories.add('Inline', () => (
  <Form onSubmit={ ()=>{} } styleType='inline'>
    <FormGroup>
      <FormControl placeholder="Form, FormGroup and input" />
    </FormGroup>
    <FormGroup>
      <FormControl placeholder="Form, FormGroup and input" />
    </FormGroup>
    <FormActions>
      <Button>Cancelar</Button>
      <Button color="primary">Enviar</Button>
    </FormActions>
  </Form>
));

stories.add('Horizontal', () => (
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
      <Button color="primary">Enviar</Button>
    </FormActions>
  </Form>
));

// Form label
stories.add('Addon text', () => (
  <FormGroup>
    <br/><br/><br/>
    <FormLabel addon={'text'}>Nome:</FormLabel>
  </FormGroup>
));

stories.add('Addon link', () => (
  <FormGroup>
    <br/><br/><br/>
    <FormLabel addon={<a href="/home">Esqueci a minha senha</a>}>Nome:</FormLabel>
  </FormGroup>
));

// Form group
stories.add('With id', () => (
  <FormGroup controlId="test">
    <FormLabel>Nome:</FormLabel>
    <FormControl placeholder="Form group with input" />
  </FormGroup>
));

stories.add('With validation', () => (
  <div>
    <FormGroup validationState="success">
      <FormLabel>Nome:</FormLabel>
      <FormControl  placeholder="Form group with input" feedback />
    </FormGroup>
    <FormGroup validationState="warning">
      <FormLabel>Nome:</FormLabel>
      <FormControl placeholder="Form group with input" feedback />
    </FormGroup>
    <FormGroup validationState="error">
      <FormLabel>Nome:</FormLabel>
      <FormControl  placeholder="Form group with input" feedback />
      <span className="error">testte</span>
    </FormGroup>
  </div>
));

// Form control
stories.add('Knobs', () => (
  <div>
    <FormControl
      type={text('Type', 'text')}
      placeholder={text('Placeholder', 'Digite algo')}
      disabled={boolean('Disabled', false)}
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
    />
    <br /><br /><br /><br />
    <FormControl
      type="select"
      placeholder="Selecione"
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
    >
      <SelectOption value="a">Nome a</SelectOption>
      <SelectOption value="b">Nome b</SelectOption>
    </FormControl>
  </div>
));

stories.add('Disabled', () => (
  <div>
    <FormControl placeholder="Digite um nome" disabled />
    <FormControl type="email" placeholder="Digite o seu e-mail" disabled />
    <FormControl type="radio" checked={true} disabled />
    <FormControl type="checkbox" checked={true} disabled />
    <FormControl type="select" placeholder="Selecione" disabled>
      <SelectOption value="a">a</SelectOption>
      <SelectOption value="b">b</SelectOption>
    </FormControl>
    <FormControl type="textarea" disabled />
  </div>
));

stories.add('Feedback', () => (
  <FormGroup validationState="success">
    <FormControl type="password" placeholder="Digite um valor" feedback />
  </FormGroup>
));

stories.add('On focus', () => (
  <div>
    <FormControl placeholder="Digite um nome" onFocus={action('focus')} />
    <FormControl type="radio" onFocus={action('focus')} />
    <FormControl type="checkbox" onFocus={action('focus')} />
    <FormControl type="select" placeholder="Selecione" onFocus={action('focus')}>
      <SelectOption value="a">a</SelectOption>
      <SelectOption value="b">b</SelectOption>
    </FormControl>

    <FormControl type="textarea" onFocus={action('focus')} />
  </div>
));

stories.add('On change', () => (
  <div>
    <FormControl placeholder="Digite um nome" onChange={action('change')} />
    <FormControl type="radio" onChange={action('change')} />
    <FormControl type="checkbox" onChange={action('change')} />
    <FormControl type="select" placeholder="selecione" onChange={action('change')}>
      <SelectOption value="a">a</SelectOption>
      <SelectOption value="b">b</SelectOption>
    </FormControl>

    <FormControl type="textarea" onChange={action('change')} />
  </div>
));

stories.add('On blur', () => (
  <div>
    <FormControl placeholder="Digite um nome" onBlur={action('blur')} />
    <FormControl type="radio" onBlur={action('blur')} />
    <FormControl type="checkbox" onBlur={action('blur')} />
    <FormControl type="select" placeholder="selecione" onBlur={action('blur')}>
      <SelectOption value="a">a</SelectOption>
      <SelectOption value="b">b</SelectOption>
    </FormControl>

    <FormControl type="textarea" onBlur={action('blur')} />
  </div>
));

stories.add('On Mask', () => {
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


stories.add('On Validation', withState({ status: undefined, message: undefined, status2: undefined, message2: undefined })(({ store }) => {
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
