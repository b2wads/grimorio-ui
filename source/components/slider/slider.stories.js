import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Slider from './slider-component';

const stories = storiesOf('Slider', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
  <div>
    <Slider arrows dots>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Slider>
  </div>
));
