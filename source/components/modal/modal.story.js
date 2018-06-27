import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import Modal from './index';
import Button from '../button';

const stories = storiesOf('Modal', module);

stories.addDecorator(withKnobs);

const body = () => {
  return (
    <div>
      <strong>ALIBABA</strong><em>NADA</em><span>É</span>
    </div>
  );
};

const button = () => {
  return (
    <Button style="primary">Ok</Button>
  );
};

const modal = {
  id: `${(new Date()).getTime()}`,
  header: 'Termos de Segmentação',
  body: body(),
  footer: true,
  actionButton: button()
};

stories.addWithInfo('scaleUp', () => (
  <Modal data={modal} effect={'scaleUp'} onDismiss={action('removed')}/>
));

stories.addWithInfo('slideFromRight', () => (
  <Modal data={modal} effect={'slideFromRight'} onDismiss={action('removed')}/>
));

stories.addWithInfo('slideFromBottom', () => (
  <Modal data={modal} effect={'slideFromBottom'} onDismiss={action('removed')}/>
));

stories.addWithInfo('newspaper', () => (
  <Modal data={modal} effect={'newspaper'} onDismiss={action('removed')}/>
));

stories.addWithInfo('fall', () => (
  <Modal data={modal} effect={'fall'} onDismiss={action('removed')}/>
));

stories.addWithInfo('sideFall', () => (
  <Modal data={modal} effect={'sideFall'} onDismiss={action('removed')}/>
));

stories.addWithInfo('flipHorizontalThreeD', () => (
  <Modal data={modal} effect={'flipHorizontalThreeD'} onDismiss={action('removed')}/>
));

stories.addWithInfo('flipVerticalThreeD', () => (
  <Modal data={modal} effect={'flipVerticalThreeD'} onDismiss={action('removed')}/>
));

stories.addWithInfo('signThreeD', () => (
  <Modal data={modal} effect={'signThreeD'} onDismiss={action('removed')}/>
));

stories.addWithInfo('superScaled', () => (
  <Modal data={modal} effect={'superScaled'} onDismiss={action('removed')}/>
));

stories.addWithInfo('rotateFromBottomThreeD', () => (
  <Modal data={modal} effect={'rotateFromBottomThreeD'} onDismiss={action('removed')}/>
));

stories.addWithInfo('rotateFromLeftThreeD', () => (
  <Modal data={modal} effect={'rotateFromLeftThreeD'} onDismiss={action('removed')}/>
));
