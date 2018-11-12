import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonUpload from './index';

const stories = storiesOf('Button Upload', module);

stories.addWithInfo(
  'Normal',
  `
    This is the basic usage with the button upload.
  `,
  () => (
    <div>
      <ButtonUpload onChange={(data, list) => console.log('images: ', data, 'list:', list)} />
    </div>
  )
);


stories.addWithInfo('With Limit', () => <ButtonUpload btnText="Apenas 2 imagens" limit={2} onChange={(data, list) => console.log('images: ', data, 'list:', list)} />);
