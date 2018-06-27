import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Image from './index';

const stories = storiesOf('Image', module);

stories.addDecorator(withKnobs);

const pathImage = 'https://placeholdit.imgix.net/~text?txtsize=13&txt=image&w=100&h=100';

stories.addWithInfo(
  'size',
  () => (
    <div>
      <Image path={pathImage} size="small" />
      <Image path={pathImage} size="medium" />
      <Image path={pathImage} size="large" />
    </div>
  )
);

stories.addWithInfo(
  'style',
  () => (
    <div>
      <Image size="small" rounded path={pathImage} />
      <Image size="small" circle path={pathImage} />
      <Image size="small" thumbnail path={pathImage} />
      <Image size="medium" rounded path={pathImage} />
      <Image size="medium" circle path={pathImage} />
      <Image size="medium" thumbnail path={pathImage} />
      <Image size="large" rounded path={pathImage} />
      <Image size="large" circle path={pathImage} />
      <Image size="large" thumbnail path={pathImage} />
    </div>
  )
);

stories.addWithInfo(
  'align',
  () => (
    <div>
      <Image size="small" rounded path={pathImage} />
      <Image size="medium" rounded path={pathImage} />
      <Image size="large" rounded path={pathImage} />

      <Image size="small" circle align='center' path={pathImage} />
      <Image size="medium" circle align='center' path={pathImage} />
      <Image size="large" circle align='center' path={pathImage} />

      <Image size="small" thumbnail align='right' path={pathImage} />
      <Image size="medium" thumbnail align='right' path={pathImage} />
      <Image size="large" thumbnail align='right' path={pathImage} />
    </div>
  )
);
