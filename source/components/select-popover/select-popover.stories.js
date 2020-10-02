import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';

import SelectPopover from './select-popover-component';
import Button from '../button'

const stories = storiesOf('SelectPopover', module);

const action = name => (...params) => {
  console.log(name, params);
};

stories.add('Normal', () => {
  const options = [
    {
      key: 'name',
      label: 'Nome',
      checked: true,
    },
    {
      key: 'likes',
      label: 'Favoritos',
      checked: false,
    },
    {
      key: 'store',
      label: 'Loja',
    },
  ];

  const submit = (e) => {
    action('form submitted')();
    console.log(e);
  }

  return (
    <SelectPopover
      component={<Button>Select</Button>}
      title="Escolha as colunas visíveis"
      options={options}
      onSubmit={submit}
    />
  )
});

stories.add('Open in different positions', () => {
  const options = [
    {
      key: 'name',
      label: 'Nome',
      checked: true,
    },
    {
      key: 'likes',
      label: 'Favoritos',
      checked: false,
    },
    {
      key: 'store',
      label: 'Loja',
    },
  ];

  const submit = (e) => {
    action('form submitted')();
    console.log(e);
  }

  return (
    <React.Fragment>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SelectPopover
          component={<Button>Select</Button>}
          title="Escolha as colunas visíveis"
          options={options}
          onSubmit={submit}
          position="bottomRight"
        />
        <SelectPopover
          component={<Button>Select</Button>}
          title="Escolha as colunas visíveis"
          options={options}
          onSubmit={submit}
          position="bottomLeft"
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SelectPopover
          component={<Button>Select</Button>}
          title="Escolha as colunas visíveis"
          options={options}
          onSubmit={submit}
          position="topRight"
        />
        <SelectPopover
          component={<Button>Select</Button>}
          title="Escolha as colunas visíveis"
          options={options}
          onSubmit={submit}
          position="topLeft"
        />
      </div>

    </React.Fragment>
  )
});

stories.add('With Header', () => {
  const options = [
    {
      key: 'name',
      label: 'Nome',
      checked: true,
    },
    {
      key: 'likes',
      label: 'Favoritos',
      checked: false,
    },
  ];

  const submit = (e) => {
    action('form submitted')();
    console.log(e);
  }

  return (
    <SelectPopover
      component={<Button>Select</Button>}
      header="Colunas"
      options={options}
      onSubmit={submit}
    />
  )
});

const initialState = {
  options: [
    {
      key: 'name',
      label: 'Nome',
      checked: true,
    },
    {
      key: 'likes',
      label: 'Favoritos',
      checked: false,
    },
  ],
}

stories.add('Dynamic options', withState(initialState)(({ store }) => {

  const changedOptions = [
    {
      key: 'name',
      label: 'Nome',
      checked: true,
    },
    {
      key: 'likes',
      label: 'Favoritos',
      checked: false,
    },
    {
      key: 'shares',
      label: 'Compartilhamentos',
      checked: false,
    }
  ]

  const submit = (e) => {
    action('form submitted')();
    console.log(e);
  }

  const changeOptions = () => {
    store.set({
      options: changedOptions,
    })
  }

  return (
    <React.Fragment>
      <Button color="variant" onClick={changeOptions}>Then, change options</Button>
      <br />
      <br />
      <SelectPopover
        component={<Button>Open select first</Button>}
        options={store.state.options}
        onSubmit={submit}
      />
    </React.Fragment>
  )
}));

stories.add('Without submit button', () => {
  const options = [
    {
      key: 'name',
      label: 'Nome',
      checked: true,
    },
    {
      key: 'likes',
      label: 'Favoritos',
      checked: false,
    },
    {
      key: 'store',
      label: 'Loja',
    },
  ];

  const submit = (e) => {
    action('form submitted')();
    console.log(e);
  }

  return (
    <SelectPopover
      component={<Button>Select</Button>}
      title="Escolha as colunas visíveis"
      options={options}
      onSubmit={submit}
      submitOnChange={true}
    />
  )

});
