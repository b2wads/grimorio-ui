import React from 'react';

import Slider from './slider-component';

export default {
  title: 'Slider',
  component: Slider,
};

const style = {
  width: '100%',
  background: 'firebrick',
  color: '#fff',
  fontSize: '22px',
  textAlign: 'center',
  padding: '50px 0',
};

export const ArrowDots = () => (
  <div>
    <Slider arrows dots>
      <div style={style}>1</div>
      <div style={style}>2</div>
      <div style={style}>3</div>
    </Slider>
  </div>
);

export const DotsBack = () => (
  <div>
    <Slider dots dotsBackground>
      <div style={style}>1</div>
      <div style={style}>2</div>
      <div style={style}>3</div>
      <div style={style}>4</div>
      <div style={style}>5</div>
    </Slider>
  </div>
);

export const Autoplay = () => (
  <div>
    <Slider dots autoplay delay={2500}>
      <img style={{ width: '100%', height: 'auto' }} src="https://picsum.photos/1020/420" />
      <img style={{ width: '100%', height: 'auto' }} src="https://picsum.photos/1020/420?random" />
      <img style={{ width: '100%', height: 'auto' }} src="https://picsum.photos/1020/420?random" />
    </Slider>
  </div>
);

export const SlidesToShow = () => (
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
);

export const SingleSlide = () => (
  <div>
    <Slider>
      <div style={style}>Single</div>
    </Slider>
  </div>
);
