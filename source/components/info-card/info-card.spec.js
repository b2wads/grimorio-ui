import '../../../internals/test/helper';
import React from 'react';

import InfoCard from './info-card-component';

/** @test {InfoCard} */
describe('InfoCard component', () => {
/** @test {InfoCard#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <InfoCard />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
