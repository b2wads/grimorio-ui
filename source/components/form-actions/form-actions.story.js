import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import FormActions from './index';
import Button from '../button';

const stories = storiesOf('FormActions', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
  <FormActions>
    <Button style="undo" type="submit">Cancelar</Button>
    <Button style="primary" type="submit">Criar</Button>
  </FormActions>
));
