import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { assert, expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

Object.assign(global, {
  React,
  ReactDOM,
  ReactTestUtils,
  assert,
  expect,
  shallow,
  mount,
  render
});

global.shallowRender = jsx => {
  const renderer = new ReactShallowRenderer();
  renderer.render(jsx);
  return renderer.getRenderOutput();
};

