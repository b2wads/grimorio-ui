import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Slider from './slider-component';

const stories = storiesOf('Slider', module);

stories.addDecorator(withKnobs);

const style = {
  width: '100%',
  background: 'firebrick',
  color: '#fff',
  fontSize: '22px',
  textAlign: 'center',
  padding: '50px 0',
};

stories.addWithInfo('Arrow Dots', () => (
  <div>
    <Slider arrows dots>
      <div style={style}>1</div>
      <div style={style}>2</div>
      <div style={style}>3</div>
    </Slider>
  </div>
));

stories.addWithInfo('Dots Back', () => (
  <div>
    <Slider dots dotsBackground>
      <div style={style}>1</div>
      <div style={style}>2</div>
      <div style={style}>3</div>
      <div style={style}>4</div>
      <div style={style}>5</div>
    </Slider>
  </div>
));

stories.addWithInfo('Autoplay', () => (
  <div>
    <Slider dots autoplay delay={2500}>
      <div style={style}>1</div>
      <div style={style}>2</div>
    </Slider>
  </div>
));

stories.addWithInfo('Slides To Show', () => (
  <div>
    <Slider dots autoplay delay={2500} slidesToShow={2}>
      <div style={style}>1</div>
      <div style={style}>2</div>
      <div style={style}>3</div>
      <div style={style}>4</div>
      <div style={style}>5</div>
      <div style={style}>6</div>
    </Slider>
  </div>
));
