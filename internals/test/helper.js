import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { assert, expect } from 'chai';

Object.assign(global, {
  React,
  ReactDOM,
  ReactTestUtils,
  assert,
  expect
});

global.shallowRender = jsx => {
  const renderer = new ReactShallowRenderer();
  renderer.render(jsx);
  return renderer.getRenderOutput();
};

