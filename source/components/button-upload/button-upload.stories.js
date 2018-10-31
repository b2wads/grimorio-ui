import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import ButtonUpload from './index';

const stories = storiesOf('Button Upload', module);

stories.addDecorator(withKnobs);

stories.addWithInfo(
  'Normal',
  `
    This is the basic usage with the button upload.
  `,
  () => (
    <div>
      <ButtonUpload onChange={data => console.log('images: ', data)} />
    </div>
  )
);
