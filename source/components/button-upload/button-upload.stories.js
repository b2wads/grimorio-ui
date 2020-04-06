import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonUpload from './index';

const stories = storiesOf('Button Upload', module);

const printRes = (data, list, error, size) => {
  console.log('images: ', data, 'list:', list, 'error:', error, 'size', size);
};

stories.add('Normal', () => <ButtonUpload onChange={printRes} />);

stories.add('As Div', () => <ButtonUpload as="div" onChange={printRes} />);

stories.add(
  'With image Dimensions',
  () => (
    <ButtonUpload
      allowedDimensions={['300x124', '1280x720']}
      formatWhiteList={['.jpg', '.jpeg', '.png']}
      btnText="Apenas Ibagens"
      onChange={printRes}
    />
  )
);

stories.add('With Limit', () =>
  <ButtonUpload
    btnText="Apenas 2 imagens"
    limit={2}
    onChange={printRes}
  />
);

stories.add('With Extension Whitelist', () =>
  <ButtonUpload
    formatWhiteList={['.jpg', '.jpeg']}
    btnText="Apenas JPG e JPEG"
    onChange={printRes}
  />
);

stories.add('With MaxFileSize', () =>
  <ButtonUpload
    maxFileSize={100000}
    btnText="Até 100KB"
    onChange={printRes}
  />
);
