import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';

Object.assign(global, {
  React,
  shallow,
  mount,
  render,
  toJson
});

global.window.localStorage = global.window.sessionStorage = {
  getItem(key) {
    return this[key];
  },
  setItem(key, value) {
    this[key] = value;
  },
  removeItem(key) {
    delete this[key];
  },
};

global.shallowRender = jsx => {
  const renderer = new ReactShallowRenderer();
  renderer.render(jsx);
  return renderer.getRenderOutput();
};

