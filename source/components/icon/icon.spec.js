import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Icon from './icon-component';

/** @test {Icon} */
describe('Icon component', () => {
/** @test {Icon#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Icon />
      );
      expect(wrapper.length).to.equal(1);
    });
  });
});
