import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonUpload from './index';

const stories = storiesOf('Button Upload', module);

stories.add(
  'Normal',
  () => (
    <div>
      <ButtonUpload onChange={(data, list) => console.log('images: ', data, 'list:', list)} />
    </div>
  )
);


stories.add('With Limit', () =>
  <ButtonUpload
    btnText="Apenas 2 imagens"
    limit={2}
    onChange={(data, list) => console.log('images: ', data, 'list:', list)}
  />
);

stories.add('With Extension Whitelist', () =>
  <ButtonUpload
    formatWhiteList={['.jpg', '.jpeg']}
    btnText="Apenas JPG e JPEG"
    onChange={(data, list, error) => console.log('images: ', data, 'list:', list, 'error:', error)}
  />
);

stories.add('With MaxFileSize', () =>
  <ButtonUpload
    maxFileSize={100000}
    btnText="Até 100KB"
    onChange={(data, list, error) => console.log('images: ', data, 'list:', list, 'error:', error)}
  />
);
