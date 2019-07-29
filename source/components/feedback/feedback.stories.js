import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Feedback from './feedback-component';

const stories = storiesOf('Feedback', module);

stories.addDecorator(withKnobs);

stories.add('Success', () => <Feedback type="success" message="Sua campanha foi criada com sucesso!" />);

stories.add('Fail', () => <Feedback type="fail" message="Alguma coisa aconteceu, por favor tente novamente ou entre em contato conosco" />);
